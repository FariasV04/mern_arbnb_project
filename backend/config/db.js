import "dotenv/config"
import mongoose from "mongoose"

const { MONGO_URL } = process.env

export const connectdb = async () => {
try {
    await mongoose.connect(MONGO_URL)
    console.log("Conectado a DataBase")
} catch (error) {
    console.log("eRRo", error)
    
}}