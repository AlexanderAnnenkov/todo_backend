module.exports = (err, req, res, next) => {
  if(err.errors){
    return res.status(400).send(err.errors[0].msg)
  }
  res.status(500).send(err.message)
}
