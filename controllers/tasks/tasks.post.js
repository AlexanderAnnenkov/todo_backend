import db from "../../db.json"
import fs from "fs"

export default (req, res) => {
  try {
    if (!req.body) throw { message: "Bad Request" }
    if (req.body.name.length < 2) throw { message: "Title need has 2 symbols" }

    const task = { name: req.body.name }

    task.done = false
    task.uuid = Math.floor(Math.random() * 10000)
    task.date = new Date()
    db.push(task)
    fs.writeFileSync("db.json", JSON.stringify(db))
    res.send(task)
  } catch (err) {}
}
