const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const toDoModel = mongoose.model('todo', todoSchema);
module.exports = toDoModel;