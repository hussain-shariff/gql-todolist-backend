const todos = require("../models/todosSchema")

const updateTodoResolver = async (parent, args) => {
	const updateTodo = {
		title: args.title,
		completed: args.completed,
	}
	return await todos.findOneAndUpdate({ _id: args.id }, updateTodo, {
		new: true,
	})
}

module.exports = updateTodoResolver
