const express = require("express")
const app = express()
const { graphqlHTTP } = require("express-graphql")
const connectDb = require("./db/connectDB")
require("dotenv").config()
const schema = require('./schema/schema')
const cors = require('cors')
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === "development",
	})
)

const start = async () => {
	try {
		await connectDb(process.env.MONGO_URI)
		app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}...`))
	} catch (err) {
		console.log(err)
	}
}

start()
