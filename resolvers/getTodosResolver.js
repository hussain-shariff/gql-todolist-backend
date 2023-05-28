const todos = require('../models/todosSchema')

const getTodosResolver = async (parent, args) =>{
    return await todos.find({})
}

module.exports = getTodosResolver