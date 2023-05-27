const mongoose = require("mongoose")

const connectDb = (url) => {
	mongoose
		.connect(url)
		.then(() => console.log("CONNECTED TO DB.."))
		.catch((err) => console.log(err))
}

module.exports = connectDb
