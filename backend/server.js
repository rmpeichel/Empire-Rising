const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 8000;
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json);
mongoose.connect((process.env.MongoDB), { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

var playerRouter = require('./routes/Player/playerRouter')(db);
app.use('/player', playerRouter);

app.listen(PORT, function() {
    console.log("Server running on Port: " + PORT);
})

