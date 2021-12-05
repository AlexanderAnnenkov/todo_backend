import express, { json, urlencoded } from "express"
import router from "./routes/router.js"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
const PORT =  3001
const app = express()
app.use(cors())
app.use(json())
app.use(urlencoded({extended:true}))
app.use("/", router)




app.listen(PORT, () => {})
