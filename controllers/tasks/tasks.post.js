import db from '../../db.json'
import fs from 'fs'

export default (req, res) => {
  
  if(!req.body) return res.sendStatus(400);

  const task = { name: req.body.name}

  // увеличиваем его на единицу
  task.done = false
  task.uuid = Math.floor(Math.random() * 10000)
  task.date = new Date()
  // добавляем пользователя в массив
  db.push(task)
  // перезаписываем файл с новыми данными
  fs.writeFileSync("db.json", JSON.stringify(db))
  res.send(task)
}
