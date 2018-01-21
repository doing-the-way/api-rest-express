'use-strict';
const mongoose = require('mongoose');
const config = require('./config');

mongoose.Promise = require('bluebird');

let db = mongoose.connect(config.db);

// Connected
mongoose.connection.on('connected', ()=>{
    console.log('Mongoose se a conectado a la base de datos: ' + config.db);
});
// Error
mongoose.connection.on('error', ()=> {
    console.log('Error al conectarse a la base de datos: ' + config.db);
});
// Disconnected
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose se a desconectado de la base de datos: ' + config.db);
});

module.exports = db;
