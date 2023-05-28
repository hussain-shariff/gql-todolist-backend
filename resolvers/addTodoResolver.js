const todos = require('../models/todosSchema')

const addTodoResolver = async (parent, args) =>{
    return await todos.create({...args})
}

module.exports = addTodoResolver