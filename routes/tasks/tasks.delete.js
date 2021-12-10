const models = require("../../models/").User
const express = require("express")
const router = express.Router()

module.exports = router.delete("/task/:uuid", async (req, res) => {
  try {
    const user = await models.findByPk(req.user.id)
    await user.removeTask(req.params.uuid)
    res.send({ data: "Success Delete" })
  } catch (err) {
    const message = err
    res.status(400).json({ message })
  }
})
