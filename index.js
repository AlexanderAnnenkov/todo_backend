const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const fs = require("fs")

const PORT = 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
fs.readdirSync("./routes").forEach((file) => {
  app.use("/", require(`./routes/${file}`))
})

app.listen(PORT, () => {})
