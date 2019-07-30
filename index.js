
const express = require('express');
const bodyParser = require('body-parser');
const loginRoute = require('./routes/login');
require('dotenv').config({path: __dirname + '/.env.test'});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', loginRoute);

const port = process.env.PORT;

app.listen(port, function () {
	console.log(`Servidor rodando na porta: ${port}`);
});