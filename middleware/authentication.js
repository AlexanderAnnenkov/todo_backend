const jwt = require("jsonwebtoken")
const config = process.env

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization
  // console.log(token);
  if (req.url === "/registration") return next()

  if (!token) {
    return res.status(403).send("A token is required for authentication")
  }
  try {
    const decoded = jwt.verify(token, config.SECRET_KEY)
    // console.log(decoded, '123123123123123');
    req.user = decoded
  } catch (err) {
    // console.log(err , "123123123123123123");
    return res.status(401).send("Invalid Token")
  }
  return next()
}

module.exports = verifyToken
