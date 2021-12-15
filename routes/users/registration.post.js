const models = require("../../models").User
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const { check } = require("express-validator")
const { validationResult } = require("express-validator")
dotenv.config()

module.exports = router.post(
  "/registration",
  check("login", "Login must be more 5 symbols").isLength({ min: 5 }),
  check("password", "Password length less 8 symbols").isLength({ min: 8 }),
  async (req, res, next) => {
    try {
      validationResult(req).throw()
      const login = req.body.login
      const password = req.body.password

      const checkLogin = await models.findOne({
        where: { login },
      })

      if (checkLogin) throw new Error("Login must be unique")

      const hashPass = bcrypt.hashSync(password, 10)

      const user = await models.create({ login, password: hashPass })
      const payload = { id: user.uuid, login: user.login }

      const jwtToken = jwt.sign(payload, process.env.SECRET_KEY)
      res.send({ jwtToken }, 200)
    } catch (err) {
      next(err)
    }
  }
)
