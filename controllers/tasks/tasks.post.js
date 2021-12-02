import db from '../../db.json'
import fs from 'fs'

export default (req, res) => {
  
  if(!req.body) return res.send('123');

  
  const taskName = req.body.name
  const taskDone = req.body.done
  let task = { name: taskName, done: taskDone }

  // увеличиваем его на единицу
  task.uuid = Math.floor(Math.random() * 10000)
  task.date = new Date()
  // добавляем пользователя в массив
  db.push(task)
  // перезаписываем файл с новыми данными
  fs.writeFileSync("db.json", JSON.stringify(db))
  res.send(task)
}
