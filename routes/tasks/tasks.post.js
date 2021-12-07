const Task = require("../../models/index")
const express = require("express")
const router = express.Router()

module.exports = router.post("/task", async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.send(task)
  } catch (err) {
    if (err.errors.length) {
      res.status(400).json({ message: err.errors[0].message })
    }
  }
})
