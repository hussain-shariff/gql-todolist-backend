const todos = require('../models/todosSchema')

const getTodosResolver = (parent, args) =>{
    return todos.find({})
}

module.exports = getTodosResolver