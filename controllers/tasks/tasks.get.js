import db from "../../db.json"

export default (req, res) =>{
    if (req.query.filterBy === 'done'){
        res.send(db.filter(e => (e.done === true)))
    };
    if(req.query.filterBy === 'undone'){
        res.send(db.filter(e => (e.done === false)))
    }
    if (req.query.filterBy !=='done' || req.query.filterBy !== 'undone'){
        res.send(db)
    }
}