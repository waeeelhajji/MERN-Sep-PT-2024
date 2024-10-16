const express = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env.PORT

app.use(express.json(), express.urlencoded({ extended: true }));

require("./config/mongoose.config")


const AllMoviesRoutes = require("./routes/movie.routes")

AllMoviesRoutes(app)





app.listen(PORT, () => console.log(`🌴🌴🌴 Listening on port: ${PORT}`))