const express = require('express');
const { getHomePage } = require('../controllers/productsControllers');
const homeRoutes = express.Router();

homeRoutes.get('/',getHomePage)

module.exports = homeRoutes