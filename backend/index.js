// Importações
import express, { json } from "express"
import "dotenv/config"
import { connectdb } from "./config/db.js"
import User from "./models/User.js"

// app recebe a função express
const app = express()

// importação da porta da variavel de ambiente pelo dotenv
const {PORT} = process.env

// midleware
app.use(express.json())

// rota Read
app.get("/users", async (req, res) => {
     connectdb()
try {
     const userDoc = await User.find()
     res.json(userDoc)
} catch (error) {
     res.status(404).json(error)
}
})

// rota create
app.post("/users", async (req,res)  => {
     connectdb()

     const {name, email, password} = req.body
try {                            
     const newUserDoc = await User.create({
          name,
          email,
          password,
     })
     res.json(newUserDoc)
} catch (error) {
     res.status(500).json(error)
}
})


// escutando a porta
app.listen(PORT, () =>{
     console.log(`O Servidor está rodando na porta ${PORT}`)
})