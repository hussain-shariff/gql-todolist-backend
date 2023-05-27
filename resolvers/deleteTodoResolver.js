const todos = require("../models/todosSchema")

const deleteTodoResolver = (parent, args) => {
	return todos.findByIdAndDelete(args.id)
}

module.exports = deleteTodoResolver
