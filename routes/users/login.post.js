const models = require("../../models").User
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

module.exports = router.post("/login", async (req, res, next) => {
  try {
    const login = req.body.login
    const password = req.body.password

    const user = await models.findOne({
      where: { login },
    })

    if (!user) throw new Error("Invalid login")

    const hashPass = await bcrypt.compare(password, user.password)
    if (!hashPass) throw new Error ("Invalid password")

    const payload = { id: user.uuid, login: user.login }

    const jwtToken = jwt.sign(payload, process.env.SECRET_KEY)
    res.send({jwtToken}, 200)
  } catch (err) {
    next(err)
  }
})
