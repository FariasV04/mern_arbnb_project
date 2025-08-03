import { Router } from "express"
import { connectdb } from "../../config/db.js"
import User from "./model.js"
import bcrypt from "bcryptjs"

const router = Router()

// Geraçãodo salt
const bcryptsalt = bcrypt.genSaltSync()

// rota Read
router.get("/", async (req, res) => {
     connectdb()
try {
     const userDoc = await User.find()
     res.json(userDoc)
} catch (error) {
     res.status(404).json(error)
}
})

// rota create
router.post("/", async (req,res)  => {
     connectdb()

     const {name, email, password} = req.body
     const encryptedPassword = bcrypt.hashSync(password, bcryptsalt)
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

export default router