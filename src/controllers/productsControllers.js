const databaseConnection = require("../../config/database")

const getAllProducts = (req, res)=>{
    databaseConnection.query("SELECT * FROM products", (error, data) => {
        if(error) {
            console.log(error)
        } else {
            res.render('pages/products', {
                products: data
            })
        }
    })
}

const getProductsById = (req, res)=> {
    // res.send('Esto devuelve un solo producto')
    res.render('pages/detailsproduct')
}

module.exports = {getAllProducts, getProductsById}