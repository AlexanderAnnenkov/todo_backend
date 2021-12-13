const models = require("../../models/").User
const express = require("express")
const router = express.Router()

module.exports = router.post("/task", async (req, res, next) => {
  try {
    const user = await models.findByPk(req.user.id)
    console.log(user);
    const task = await user.createTask({name: req.body.name})
    console.log(task);

    res.send(task)
  } catch (err) {
    next(err)
  }
})
