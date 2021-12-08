const express = require("express")
const recursive = require("recursive-readdir-sync")
const cors = require("cors")


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

recursive(`${__dirname}/routes`).forEach((file) => app.use("/", require(file)))

app.listen(process.env.PORT, () => {})
