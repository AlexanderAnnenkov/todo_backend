const Task = require("../../models/index")

module.exports = async (req, res) => {
  try {
    const name = req.body.name
    const done = req.body.done
    const item = await Task.findByPk(req.params.uuid)
    if (name) {
      await item.update({ name })
    }
    if (typeof done === "boolean") {
      typeof done ==="boolean" && await item.update({ done })
    }
    res.send({ item })
  } catch (err) {
    const message = err
    res.status(400).json({ message })
  }
}
