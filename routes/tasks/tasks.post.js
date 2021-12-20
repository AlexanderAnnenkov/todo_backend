const models = require("../../models/")
const express = require("express")
const router = express.Router()
const { check } = require("express-validator")
const { validationResult } = require("express-validator")
const t = require("../../resources/locales/translation")



module.exports = router.post("/task",
check('name').custom((value, {req}) =>{
  if (value.length !== 2){
    throw new Error(t[req.headers["accept-language"]]['errNameTask'])
  }
}),
async (req, res, next) => {
  try {
    validationResult(req).throw()
    const user = await models.User.findByPk(req.user.id)
    const checkTask = await models.Task.findOne({
      where: { name: req.body.name, userId: req.user.id },
    })
    
    if (checkTask) throw new Error(t[req.headers["accept-language"]]['errDeleteTask'])
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
