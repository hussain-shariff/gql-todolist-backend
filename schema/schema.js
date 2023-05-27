const {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLBoolean,
	GraphQLID,
} = require("graphql")
const TodoType = require("../types/types")
const getTodosResolver = require("../resolvers/getTodosResolver")
const addTodoResolver = require("../resolvers/addTodoResolver")
const deleteTodoResolver = require("../resolvers/deleteTodoResolver")

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		getTodos: {
			type: new GraphQLList(TodoType),
			resolve: getTodosResolver,
		},
		getTodo: {
			type: TodoType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
			},
			resolve: getTodosResolver,
		},
	},
})

const mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		addTodo: {
			type: TodoType,
			args: {
				title: { type: new GraphQLNonNull(GraphQLString) },
				completed: {
					type: GraphQLBoolean,
					defaultValue: false,
				},
			},
			resolve: addTodoResolver,
		},
		deleteTodo: {
			type: TodoType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
			},
			resolve: deleteTodoResolver,
		},
	},
})

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation,
})
