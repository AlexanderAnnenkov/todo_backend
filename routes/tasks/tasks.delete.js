const Task = require("../../models/index")
const express = require("express")
const router = express.Router()

module.exports = router.delete("/task/:uuid", async (req, res) => {
  try {
    const id = await Task.findByPk(req.params.uuid)
    await id.destroy()
    res.send({ data: "Success Delete" })
  } catch (err) {
    const message = err
    res.status(400).json({ message })
  }
})
