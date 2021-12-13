const models = require("../../models").User
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

module.exports = router.post("/registration", async (req, res, next) => {
  try {
    console.log(req.body)
    const login = req.body.login
    const password = req.body.password

    const checkLogin = await models.findOne({
      where: { login },
    })

    if (checkLogin) throw new Error ('Login must be unique')

    const hashPass = bcrypt.hashSync(password, 10)

    const user = await models.create({ login, password: hashPass })
    const payload = { id: user.uuid, login: user.login }

    const jwtToken = jwt.sign(payload, process.env.SECRET_KEY)
    res.send(jwtToken)
  } catch (err) {
    next(err)
  }
})
