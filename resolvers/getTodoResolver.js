const todos = require("../models/todosSchema")

const getTodoResolver = async (parent, args) => {
	return await todos.findById(args.id)
}

module.exports = getTodoResolver
