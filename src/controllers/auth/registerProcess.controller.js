const { loadData, saveData } = require("../../data")
const bcrypt = require("bcryptjs")
module.exports = (req,res)=>{
    const {email, password} = req.body
    const users = loadData("users")
    const newUser = {
        id: !users.length ? 1 : users[users.length -1].id + 1,
        name: "",
        email: email?.trim().toLowerCase(),
        password: bcrypt.hashSync(password?.trim(), 12),
        role: "REGULAR",
        avatar: "default-avatar.jpg"
    };

    users.push(newUser)

    saveData(users, "users")

    res.redirect("/")
}