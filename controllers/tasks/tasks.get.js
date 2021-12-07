const Task = require('../../models/index')

module.exports = async (req, res) => {
 try{ let filterTask
  if (req.query.filterBy === 'done'){
    filterTask = await (Task.findAll({
      where:{
        done:true        
      },
      order:[['createdAt' , req.query.sortBy]]
    }))
  }
  if (req.query.filterBy === 'undone'){
    filterTask = await (Task.findAll({
      where:{
        done: false
      },
      order:[['createdAt' , req.query.sortBy]]
    }))
  }
  if (req.query.filterBy !== 'done' && req.query.filterBy !== 'undone'){
    filterTask = await (Task.findAll({
      order:[['createdAt' , req.query.sortBy]]
    }))
  }
  res.send(filterTask, 200)
  
}catch(err){
  if(err.errors.length){
    
    res.status(400).json(err.errors[0].message)
  }
  else
  res.status(400).json(err)
}
}
