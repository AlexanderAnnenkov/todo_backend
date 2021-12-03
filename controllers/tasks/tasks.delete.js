import db from '../../db.json'
import fs from 'fs'

export default (req, res) => {
  const deleteItem = db.filter(e => e.uuid != req.params.id)
  fs.writeFileSync("db.json", JSON.stringify(deleteItem))
  res.send(deleteItem)
}
