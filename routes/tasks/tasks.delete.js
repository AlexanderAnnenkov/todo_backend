const models = require("../../models/")
const express = require("express")
const router = express.Router()
const t = require("../../resources/locales/translation")

module.exports = router.delete("/task/:uuid", async (req, res, next) => {
  try {
    const user = await models.User.findByPk(req.user.id)
    if (!user.hasTask(req.params.uuid)) throw new Error(t([req.headers["accept-language"]]['errDeleteTask']))
    const task = await models.Task.findByPk(req.params.uuid)
    task.destroy()
    res.send({ data: "Success Delete" })
  } catch (err) {
    next(err)
  }
})
