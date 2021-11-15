const databaseConnection = require("../../config/database")

const getHomePage=(req,res)=>{
    res.render('pages/index.ejs')
};

const getAllProducts = (req, res)=>{
    databaseConnection.query("SELECT * FROM products ",(error,data)=>{
        if(error){
            console.log(error)
        }else{
           // const newData = data.filter((info)=> info.category === "running");
           
            res.render("pages/products",{
                products:data
            })
        }
    })
    
};

const getProductsById = (req, res)=> {
    // res.send('Esto devuelve un solo producto')
    res.render('pages/detailsproduct')
};

const getForm = (req, res) =>{
    res.render('pages/addproducts')
};

const addNewProduct =(req,res)=>{
    const {name,category,price,description,stock }= req.body

    databaseConnection.query("INSERT INTO products (name,category,price,description ,stock)VALUES(?,?,?,?,?) ",[name,category,parseFloat(price),description,parseInt(stock)],(error,data)=>{
        if(error){
            console.log(error)
        }else{
    
           
            res.render("pages/index")
        }
    })
};

module.exports = {getAllProducts, getProductsById, getForm,addNewProduct,getHomePage}