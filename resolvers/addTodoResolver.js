const todos = require('../models/todosSchema')

const addTodoResolver = (parent, args) =>{
    return todos.create({...args})
}

module.exports = addTodoResolver