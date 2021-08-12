const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Kiolvassuk a request headerjei közül az autharization adatokat.
    const authHeader = req.headers.authorization;

    // Kiolvassuk a tokent
    // az authHeader valahogy így néz ki: Bearer fsdlkjgsflgjksflskjfsfs
    if (authHeader) {
        // Ha az authHeader truthy, akkor 
        const token = authHeader.split(' ')[1]; // cut the "Bearer" part from the beginning
        // Ellenőrizzük a tokent
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            // Ha hibával tér visssza a verify, a status 403-nem sikerült azonosítani
            if (err) {
                return res.sendStatus(403);
            }
            // Ha nincs hiba:, megkapjuk a usert és továbbadjuk a vezérlést a 
            // soron következő middleware-nek
            req.user = user;
            next();
        });
    } else { // Ha nincs authHeader:
        res.sendStatus(401);
    }

// Alternatív magoldás a token ellenőrzésére:
// https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs
/*
const jwt = require('jsonwebtoken');

module exports = (req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}
*/

};
