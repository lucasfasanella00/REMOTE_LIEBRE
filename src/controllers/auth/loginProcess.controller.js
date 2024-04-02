const { compareSync } = require("bcryptjs");
const { loadData } = require("../../data")

module.exports = (req,res)=>{
   const {email, password, remember} = req.body
   const users = loadData("users");
   if(!email){
    return res.send("Debe ingresar un email")
   }

   const userFind = users.find(u => u.email === email)
   if(!userFind){
    return res.send("El usuario no existe")
   }

   const isValidPass= compareSync(password, userFind.password)

   if(!isValidPass){
    return res.send("Credenciales invalidas")
   }

   const {name, surname, role, avatar} = userFind;

   req.session.userLogin = {
    name,
    email,  
    surname,  
    role,
    avatar
   }

   res.redirect('/')



}