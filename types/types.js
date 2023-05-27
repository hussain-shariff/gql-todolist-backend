const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLID } = require("graphql")

const TodoType = new GraphQLObjectType({
	name: "Todo",
	fields: () => ({
		id: { type: GraphQLID },
		title: { type: GraphQLString },
		completed: { type: GraphQLBoolean },
	}),
})

module.exports = TodoType