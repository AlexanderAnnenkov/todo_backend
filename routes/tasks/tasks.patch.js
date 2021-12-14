const models = require("../../models/").Task
const express = require("express")
const router = express.Router()

module.exports = router.patch("/task/:uuid", async (req, res, next) => {
  try {
    const name = req.body.name
    const done = req.body.done
    const item = await models.findByPk(req.params.uuid)
    if (name) {
      await item.update({ name })
    }
    if (typeof done === "boolean") {
      typeof done === "boolean" && (await item.update({ done }))
    }
    res.send({ item })
  } catch (err) {
    next(err)
  }
})
