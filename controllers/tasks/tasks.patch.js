import db from "../../db.json"
import fs from "fs"

export default (req, res) => {
    const editTask = db.find((e) => e.uuid == req.params.id)
    editTask.name = req.body.name
    editTask.done = req.body.done
    fs.writeFileSync("db.json", JSON.stringify(db))
    res.send(editTask)
  
  
}
