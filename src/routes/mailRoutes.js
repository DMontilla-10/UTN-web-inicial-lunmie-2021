const express = require('express')
const mailRoutes = express.Router()
const sendAnEmail = require('../controllers/emailController')



mailRoutes.post('/',sendAnEmail);

module.exports = mailRoutes