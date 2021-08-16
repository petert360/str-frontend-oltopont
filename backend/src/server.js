const express = require('express');
const config = require('config'); // config beolvasása
const logger = require('./config/logger');
const cors = require('./config/cors');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// swagger docs
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Authentication
const authenticateJwt = require('./auth/authenticate');
const adminOnly = require('./auth/adminOnly');
const authHandler = require('./auth/authHandler');

const swaggerDocument = YAML.load('./docs/swagger.yaml');

// ha létezik a config, akkor elmentjük az értékeket változókba
const { username, password, host } = config.get('database');
const { mongooseConnectLocal, mongooseConnectAtlas } = config.get('mongooseConnect');

// kapcsolódás az adatbázishoz
mongoose
    .connect(
        `${mongooseConnectAtlas}`,
        // Atlas: 'mongodb+srv://dbUser:dbUserPassword@cluster0.6apci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        // Local: 'mongodb://localhost:27017/oltopont',
        // `mongodb+srv://${username}:${password}@${host}`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() =>
        logger.info('MongoDB connection has been established successfully')
    )
    .catch(err => {
        logger.error(err);
        process.exit();
    });

// CORS hiba miatt:
/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });
*/  
app.use(cors());

// request logging - fontos, hogy a routers betöltése előtt legyen
app.use(morgan('combined', { stream: logger.stream }));

// ha külön images mappűnk van:
// app.use('/images', express.static('images'));
// itt nem kell a public könyvtárat megadni, tudni fogja az express, hogy statikus file-okat szolgál ki innnen:
app.use(express.static('public'));

app.use(bodyParser.json());

// Ha az url /login /refresh /logout és post kérést kaptunk, az authHandler megfelelő metódusa fog lefutni
app.post('/login', authHandler.login);
app.post('/refresh', authHandler.refresh);
app.post('/logout', authHandler.logout);

// Példa route-ok
// Beékelhetünk több middleware-t, előbb az authenticatejwt, ami az authenticate.js-ben szereplően vizsgálaja az authorizációt és a usert elhelyezi a kérésben.
// A /person url-t az érheti el, aki be van jelentkezve
// app.use('/person', authenticateJwt, require('./controllers/person/person.routes'));
// A /post url-t az érheti el, aki be van jelentkezve és admin
// app.use('/post', authenticateJwt, adminOnly, require('./controllers/post/post.routes'));

// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// saját route-ok
app.use('/patient', authenticateJwt, require('./controllers/patient/routes'));
app.use('/vaccine', authenticateJwt, require('./controllers/vaccine/routes'));
app.use('/adverse-event', authenticateJwt, require('./controllers/adverse-event/routes'));
app.use('/place', authenticateJwt, require('./controllers/place/routes'));
app.use('/vaccination', authenticateJwt, require('./controllers/vaccination/routes'));

app.use((err, req, res, next) => {
    //console.error(`ERR ${err.statusCode}: ${err.message}`);
    res.status(err.statusCode);
    res.json({
        hasError: true,
        message: err.message,
    });
});

module.exports = app;
