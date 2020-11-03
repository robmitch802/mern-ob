const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')

require('dotenv').config();

//image upload requirements

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, '/client/build')))
app.use(express.json());

//MongoDB database connection setup
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB is up and connected successfully.");
});

//routes for dbase
const articlesRouter = require('./routes/articles');
const inequityRouter = require('./routes/inequity');
const meetingsRouter = require('./routes/meetings');
const resourcesRouter = require('./routes/resources')

app.use('/articles', articlesRouter);
app.use('/inequity', inequityRouter);
app.use('/meetings', meetingsRouter);
app.use('/resources', resourcesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
