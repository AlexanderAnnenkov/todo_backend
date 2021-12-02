import db from "../../db.json"
import fs from "fs"

export default (req, res) => {
  if (req.body.name) {
    const editTask = db.find((e) => e.uuid == req.params.id)
    editTask.name = req.body.name
    fs.writeFileSync("db.json", JSON.stringify(db))
    res.send(editTask)
  }
}
