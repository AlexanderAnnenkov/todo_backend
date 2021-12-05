import db from "../../db.json"
import fs from "fs"
import { randomUUID } from "crypto"
import { log } from "console"

export default (req, res) => {
  try {
    if (!req.body) throw { message: "Bad Request" }
    console.log(req.body.name.length);
    if (req.body.name.length < 2) throw { message: "Title need has 2 symbols" }
    
    const task = { name: req.body.name }

    task.done = false
    task.uuid = randomUUID()
    task.date = new Date()
    db.tasks.push(task)
    fs.writeFileSync("db.json", JSON.stringify(db))
    res.send(task)
  } catch (err) {
    res.status(400).json(err)
  }
}
