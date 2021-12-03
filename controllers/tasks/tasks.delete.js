import db from '../../db.json'
import fs from 'fs'

export default (req, res) => {
  const deleteItem = db.tasks.filter(e => e.uuid != req.params.id)
  db.tasks = deleteItem
  fs.writeFileSync("db.json", JSON.stringify(db))
  res.send({ data: "Success Delete" })
}
