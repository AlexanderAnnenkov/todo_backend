const express = require('express')
const router = express.Router()
const taskGet = require("../controllers/tasks/tasks.get.js")
const taskPost = require("../controllers/tasks/tasks.post.js")
const taskPatch = require("../controllers/tasks/tasks.patch.js")
const taskDelete = require("../controllers/tasks/tasks.delete.js")




router.get("/tasks", taskGet)
router.post("/task", taskPost)
router.patch("/task/:uuid", taskPatch)
router.delete("/task/:uuid", taskDelete)
module.exports = router
