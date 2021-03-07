const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()
const app = express();
const port = process.env.PORT || 4000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./src/route/mainRoute')(app);
app.listen(port);
console.log(`START SERVICE PORT -> ${port}`);
