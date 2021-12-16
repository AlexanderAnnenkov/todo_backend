const models = require("../../models/").Task
const express = require("express")
const router = express.Router()

module.exports = router.patch("/dnd", async (req, res, next) => {
  try {
    req.body.indexArray.forEach( async (element) => {
        const task = await models.findByPk(element.uuid)
        task.update({index:element.index})
    });

    console.log(req.body.indexArray)
  } catch (err) {
    next(err)
  }
})
