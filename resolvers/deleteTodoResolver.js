const todos = require("../models/todosSchema")

const deleteTodoResolver = async (parent, args) => {
	return await todos.findByIdAndDelete(args.id)
}

module.exports = deleteTodoResolver
