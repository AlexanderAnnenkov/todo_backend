const models = require("../../models/")
const express = require("express")
const router = express.Router()

module.exports = router.delete("/task/:uuid", async (req, res) => {
  try {
    const user = await models.User.findByPk(req.user.id)
    if(!user.hasTask(req.params.uuid)) throw "You don`t root on task"
    const task = await models.Task.findByPk(req.params.uuid)
    task.destroy()
    res.send({ data: "Success Delete" })
  } catch (err) {
    const message = err
    res.status(400).json({ message })
  }
})
