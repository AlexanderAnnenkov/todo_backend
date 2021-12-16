const models = require("../../models/").Task
const express = require("express")
const router = express.Router()

module.exports = router.get("/tasks", async (req, res, next) => {
  try {
    let filterTask
    switch (req.query.filterBy) {
      case "done":
        {
          filterTask = await models.findAll({
            where: {
              userId: req.user.id,
              done: true,
            },
            order: [["index", req.query.sortBy || "asc"]],
          })
        }
        break
      case "undone":
        {
          filterTask = await models.findAll({
            where: {
              userId: req.user.id,
              done: false,
            },
            order: [["index", req.query.sortBy || "asc"]],
          })
        }
        break
      default:
        {
          filterTask = await models.findAll({
            where: {
              userId: req.user.id,
            },
            order: [["index", req.query.sortBy || "asc"]],
          })
        }
        break
    }

    res.send(filterTask, 200)
  } catch (err) {
    next(err)
  }
})
