// Importações
import express, { json } from "express"
import "dotenv/config"
import UserRoutes from "./domains/users/routes.js"


// app recebe a função express
const app = express()

// importação da porta da variavel de ambiente pelo dotenv
const {PORT} = process.env


// midleware
app.use(express.json())

app.use("/users", UserRoutes)


// escutando a porta
app.listen(PORT, () =>{
     console.log(`O Servidor está rodando na porta ${PORT}`)
})