import db from "../../db.json"

export default (req, res) => {
  if (req.query.filterBy === "done") {
    res.send(db.tasks.filter((e) => e.done === true))
  }
  if (req.query.filterBy === "undone") {
    res.send(db.tasks.filter((e) => e.done === false))
  }
  if (req.query.filterBy !== "done" || req.query.filterBy !== "undone") {
    res.send(db.tasks)
  }
  if (req.query.orderBy === "new") {
    res.send(
      db.tasks.sort((a, b) => {
        if (a.date > b.date) return 1
        else return -1
      })
    )
  }
  if (req.query.orderBy === "old") {
    res.send(
      db.tasks.sort((a, b) => {
        if (a.date > b.date) return -1
        else return 1
      })
    )
  }
}
