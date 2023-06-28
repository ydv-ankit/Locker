const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/routes');
const cors = require('cors');

const app = express()

// middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())

// variables
const HOST = 'localhost'
const PORT = process.env.PORT || 8080
const dbURI = "mongodb+srv://ankit123:ankit123@cluster0.q6fjelv.mongodb.net/"
const dbname = "encrypter"

// connect with mongoDB
app.listen(PORT, () => console.log("server running at port:" + PORT))
console.log("trying to connect with database...")
mongoose.connect(dbURI + dbname, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("database connected")
        
    })
    .catch((err) => console.log(err))

// routes
app.get('/', (req, res) => {
    res.status(200).end("server running")
})
app.use(authRoutes)
