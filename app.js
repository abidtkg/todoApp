const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');

// PARSE APPLICATION/JSON
app.use(bodyParser.json())

// IMPORT ROUTER
const todoRoutes = require('./routes/todo');
// ROUTER IMPLEMENTS
app.get('/', (req, res) => {
    res.status(200).json({message: "Response from home route"});
});
app.use('/todo', todoRoutes);

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection
    .once('open', () => console.log("MongoDB Connected!"))
    .on('error', (error) => console.log("error", error));

app.listen(3000);