// Import dependecy
const express = require('express')
const path = require('path');
const pages = require('./pages.js');

// Init Express
const server = express();
server

// Using Static files
.use(express.static('public'))

// config tempalte engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

// Create routes
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)

// Turn on server
server.listen(5500);