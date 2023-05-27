const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema(
	{
		title: String,
		completed: Boolean,
	},
	{ timestamps: true }
)

module.exports = mongoose.model("todos", todoSchema)
