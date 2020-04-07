const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET COUNTED TODO ITEMS
router.get('/list/:skip/:count', async (req, res) =>{
    const skip = +req.params.skip
    const count = +req.params.count;

    const todos = await Todo.find().skip(skip).limit(count);
    res.status(200).json(todos);
});

// ADD NEW TODO ITEMS
router.post('/new', async (req, res) => {
    const title = req.body.title;
    const completed = req.body.completed;
    const newTodo = new Todo({
        title: title,
        completed: completed
    });

    const savedTodo = await newTodo.save();
    res.status(200).json(savedTodo);
});

// UPDATE COMPLETED TODO ITEMS
router.put('/update/:id', async (req, res) => {
    const todoId = req.params.id;
    const todoStatus = req.body.completed;
    await Todo.updateOne({_id: todoId}, {completed: todoStatus});
    const updatedTodoo = await Todo.findOne({_id: todoId});
    res.json(updatedTodoo);
});

// DELETE A TODO ITEM
router.delete('/delete/:id', async (req, res) => {
    const todoId = req.params.id;
    const deletedTodo = await Todo.deleteOne({_id: todoId});
    res.json(deletedTodo);
});
module.exports = router;