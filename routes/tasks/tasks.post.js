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
    const allTask = await models.Task.findAll({where:{ userId:req.user.id}})
    const taskIndex= allTask.map((e) => e.index)
    const arrIndex = Math.max.apply(null, taskIndex)
    let index
    arrIndex !== -Infinity ? index = arrIndex + 1 : index = 1
    
    const task = await user.createTask({ name: req.body.name, index: index})

    res.send(task)
  } catch (err) {
    next(err)
  }
})
