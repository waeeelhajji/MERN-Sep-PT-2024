const express = require("express")
const app = express()
const PORT = 5000


require("dotenv").config()


const dbName = process.env.DB
const username = process.env.ATLAS_USERNAME
const pw = process.env.ATLAS_PW


const mongoose = require('mongoose');

const uri = `mongodb+srv://${username}:${pw}@cluster-mern.hgbw0.mongodb.net/${dbName}?retryWrites=true&w=majority`;
//           mongodb + srv://bob:<db_password>@cluster-mern.hgbw0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-MERN
mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database " + dbName))
    .catch(err => console.log("Something went wrong when connecting to the database ", err));










app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})