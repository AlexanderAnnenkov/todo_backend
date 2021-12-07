const Task = require("../../models/index") 
module.exports  = async(req, res) => {
  try{
    const id = await Task.findByPk(req.params.uuid)
    await id.destroy()
  res.send({ data: "Success Delete" })}
  catch(err){
    const message = err
    res.status(400).json({ message })
  }
}
