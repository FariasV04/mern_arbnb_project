import express, { json } from "express"
import "dotenv/config"
import { connectdb } from "./config/db.js"
import User from "./models/User.js"


const app = express()
const {PORT} = process.env



app.get("/users", async (req, res) => {
     connectdb()
try {
     const userDoc = await User.find()
     res.json(userDoc)
} catch (error) {
     res.status(404).json(error)
}

})


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
console.log(`O Servidor está rodando na porta ${PORT}`)
})

app.listen(PORT, () =>{
})