const jwt = require("jsonwebtoken")
const config = process.env

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization
    if (req.url === "/registration" || req.url === "/login") return next()

    if (!token) {
      throw new Error("A token is required for authentication")
    }
    const decoded = jwt.verify(token, config.SECRET_KEY)
    req.user = decoded
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = verifyToken
