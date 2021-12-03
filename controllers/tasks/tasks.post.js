import db from "../../db.json"
import fs from "fs"
import { randomUUID } from "crypto"

export default (req, res) => {
  try {
    if (!req.body) throw { message: "Bad Request" }
    if (req.body.name.length < 2) throw { message: "Title need has 2 symbols" }

    const task = { name: req.body.name }

    task.done = false
    task.uuid = randomUUID()
    task.date = new Date()
    db.push(task)
    fs.writeFileSync("db.json", JSON.stringify(db))
    res.send(task)
  } catch (err) {
    res.send(err.message)
  }
}
