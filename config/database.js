const mysql2 = require('mysql2')

const databaseConnection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'WebLunMie',
    password: 'root',
    port: 8889
})

databaseConnection.connect((error)=>{
    if(error) {
        console.log(error)
    } else {
        console.log('Servidor esta conectado a MySQL')
    }
})

module.exports = databaseConnection