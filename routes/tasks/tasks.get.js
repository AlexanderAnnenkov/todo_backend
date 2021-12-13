const models = require("../../models/").Task
const express = require("express")
const router = express.Router()

module.exports = router.get("/tasks", async (req, res, next) => {
  try {
    let filterTask
    if (req.query.filterBy === "done") {
      filterTask = await models.findAll({
        where: {
          userId:req.user.id,
          done: true,
        },
        order: [["createdAt", req.query.sortBy]],
      })
    }
    if (req.query.filterBy === "undone") {
      filterTask = await models.findAll({
        where: {
          userId:req.user.id,
          done: false,
        },
        order: [["createdAt", req.query.sortBy]],
      })
    }
    if (req.query.filterBy !== "done" && req.query.filterBy !== "undone") {
      filterTask = await models.findAll({
        where:{
          userId:req.user.id
        },
        order: [["createdAt", req.query.sortBy]],
      })
      console.log(filterTask, 123);
    }
    console.log(filterTask);
    res.send(filterTask, 200)
  } catch (err) {
    next(err)
  }
})
