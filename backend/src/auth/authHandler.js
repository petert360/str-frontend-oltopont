const jwt = require('jsonwebtoken');

// Felhasználók adatbázisa:
const Users = [
    {
        email: 'admin',
        password: 'admin_pw',
        role: 'admin',
    },
    {
        email: 'user',
        password: 'user_pw',
        role: 'user',
    },
    {
        email: 'a@a.com',
        password: 'test',
        role: 'user',
    },

];

// a frissítő tokeneket tömbben tároljuk el
const refreshTokens = [];

// authenticate.js-ből
module.exports.refresh = (req, res, next) => {
    // Kiolvassuk a meglévő tokent:
    const { token } = req.body;

    // Ha nincs token:
    if (!token) {
        return res.sendStatus(401);
    }

    // Ha van token, de ne mazonos, nem szerepel a listánkban:
    if (!refreshTokens.includes(token)) {
        return res.sendStatus(403);
    }

    // Ellenőrizzük a tokent
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        // Ha hibával tér visssza a verify, a status 403-nem sikerült azonosítani
        if (err) {
            return res.sendStatus(403);
        }
        // Ha nincs hiba, új tokent állítunk ki:
        const accessToken = jwt.sign({
            email: user.email,
            role: user.role
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRY
        });
            
        res.json({
            accessToken
        });
    });
};

//login.js-ből érkezett
module.exports.login = (req, res) => {
    // Read email and password from request body
    const { email, password } = req.body;

    // Filter user from the users array by email and password
    const user = Users.find(u => {
        return u.email === email && u.password === password;
    });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({
            email: user.email,
            role: user.role
        },  process.env.ACCESS_TOKEN_SECRET, {
             expiresIn: process.env.TOKEN_EXPIRY
        });

        const refreshToken = jwt.sign({
            email: user.email, 
            role: user.role
        }, process.env.REFRESH_TOKEN_SECRET);
        // Elmentjük a tömbbe
        refreshTokens.push(refreshToken);
        
        res.json({
            accessToken,
            refreshToken,
            user,
        });
    } else {
        res.send('email or password incorrect');
    }
};

// Felhasználó kijelentkeztetése
module.exports.logout = (req, res) => {
    const { token } = req.body;
    if (refreshTokens.indexOf(token) === -1) {
        res.sendStatus(403);
    }
    refreshTokens.splice(refreshTokens.indexOf(token), 1);
    res.sendStatus(200);
};

