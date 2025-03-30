


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const userHandler = require('./routeHandler/userHandler')


const app = express()
const port = process.env.PORT || 5000;


// middleware

app.use(express.json())
app.use(cors());

/// router

app.use('/users', userHandler)



//// Now connect mongodb with mongoose
mongoose.connect(process.env.Mongo_URI)
    .then(() => console.log("mongodb connect with mongoose"))
    .catch(err => console.log(err))

/// default
app.get("/", (req, res) => {
    res.send('server is running now ok')
})

app.listen(port, (req, res) => {
    console.log(`Server is running at port ${port}`)
})
