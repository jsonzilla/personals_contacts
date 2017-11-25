const express = require('express');
const server = express();
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
require('./models/contactModel');
require('./models/personModel');

const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const config = require('./_config');

mongoose.connect(config.mongoURI[server.settings.env]);
// mongoose.connect(config.mongoURI[server.settings.env], function(err) {
//     if (err) {
//         console.log('Error connecting to the database. ' + err);
//     } else {
//         console.log('Connected to Database: ' + config.mongoURI[server.settings.env]);
//     }
// });

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

let routes = require('./routes/routes');
routes(server);

server.listen(port);

server.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

module.exports = server;