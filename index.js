import express, { json, urlencoded } from "express"
import router from "./routes/router.js"
import dotenv from "dotenv"

dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()
app.use(json())
app.use(urlencoded({extended:true}))
app.use("/", router)




app.listen(PORT, () => {})
