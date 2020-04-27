const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const writerRoute = require('./routes/writer.route');
const templateRoute = require('./routes/template.route');
const outlineRoute = require('./routes/outline.route');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use('/writers', writerRoute);
app.use('/templates', templateRoute);
app.use('/outlines', outlineRoute);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});