// CRUD
// C: Create
// R: Read
// U: Update
// D: Delete

const express = require('express')
const { getAllProducts, getProductsById ,getForm,addNewProduct} = require('../controllers/productsControllers')

const productsRoutes = express.Router()

//productsRoutes.get("/", getAllProducts)

productsRoutes.get('/unProducto', getProductsById)
productsRoutes.get("/allProducts", getAllProducts)
productsRoutes.get('/addProduct', getForm)

productsRoutes.post("/addProduct", addNewProduct)

module.exports = productsRoutes