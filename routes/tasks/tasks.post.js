const models = require("../../models/")
const express = require("express")
const router = express.Router()

module.exports = router.post("/task", async (req, res, next) => {
  try {
    const user = await models.User.findByPk(req.user.id)
    const checkTask = await models.Task.findOne({
      where: { name: req.body.name, userId: req.user.id },
    })
    if (checkTask) throw new Error('Name must be unique')

    const task = await user.createTask({ name: req.body.name })

    res.send(task)
  } catch (err) {
    next(err)
  }
})
