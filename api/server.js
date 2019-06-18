const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoute = require('./contact.route');

const connection = process.env.CONNECTION_STRING || 'mongodb://localhost:27017/contactDB';
mongoose
  .connect(connection, { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to mongoDB');
  })
  .catch(error => console.error(error));

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/contact', contactRoute);

//PORT
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
