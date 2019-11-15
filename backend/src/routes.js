const express = require('express');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/sessions',sessionController.store);

module.exports = routes;