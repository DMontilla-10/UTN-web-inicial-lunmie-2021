require('dotenv').config()
const transporter = require("../../config/nodemailer")

const sendAnEmail=(req,res)=>{
    const {destinatario}=req.body;

    let mailOptions={
        from:process.env.MAIL,
        to:destinatario,
        subject:"Bienvenido!",
        html:`
        <h1>Te damos la bienvenida a nuestro sitio</h1>
        <p>En este email te damos la bienvenida a este sitio de productos</p>`
    }

    transporter.sendMail(mailOptions,(error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.send("Enviado!")
        }

    })
}


module.exports= sendAnEmail;