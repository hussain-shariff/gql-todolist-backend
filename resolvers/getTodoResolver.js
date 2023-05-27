const todos = require("../models/todosSchema")

const getTodoResolver = (parent, args) => {
	return todos.findById(args.id)
}

module.exports = getTodoResolver
