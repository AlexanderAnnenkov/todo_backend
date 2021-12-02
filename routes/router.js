import { Router } from "express"
import taskGet from "../controllers/tasks/tasks.get.js"
import taskPost from "../controllers/tasks/tasks.post.js"
import tasksPatch from "../controllers/tasks/tasks.patch.js"
import tasksDelete from "../controllers/tasks/tasks.delete.js"

const router = Router()
router.get("/task", taskGet)
router.post("/task", taskPost)
router.patch("/task", tasksPatch)
router.delete("/task/:id", tasksDelete)
export default router
