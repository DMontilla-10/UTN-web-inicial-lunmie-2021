const express = require('express')
const path = require('path')
const databaseConnection = require('../config/database')
const productsRoutes = require('./routes/productsRoutes')
const homeRoutes = require('./routes/homeRoutes')
const mailRoutes = require('./routes/mailRoutes')

// Inicializar express
const app = express()

// Conectarnos a la DB
databaseConnection.connect()


app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Configurations
app.set("views", path.join(__dirname, "views"))
app.set("view engine", ".ejs")

// Routes
app.use('/products', productsRoutes)
app.use('/home', homeRoutes)
app.use('/sendMail',mailRoutes)

app.listen(4000, ()=>{
    console.log('Servidor corriendo en puerto 4000')
})