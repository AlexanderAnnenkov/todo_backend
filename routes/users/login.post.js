const models = require("../../models").User
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

module.exports = router.post("/login", async (req, res) => {
  try {
    const login = req.body.login
    const password = req.body.password

    const user = await models.findOne({
      where: { login },
    })

    if (!user) throw "Invalid login"

    const hashPass = await bcrypt.compare(password, user.password)
    if (!hashPass) throw "Invalid password"

    const payload = { id: user.uuid, login: user.login }

    const jwtToken = jwt.sign(payload, process.env.SECRET_KEY)
    res.send(jwtToken)
  } catch (err) {
    if (err.errors.length) {
      res.status(400).json({ message: err.errors[0].message })
    }
  }
})
