const express = require('express');
const path = require('path');
const cors = require('cors');
const volleyball = require('volleyball');
const app = express();

// static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(cors());
app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//this is where some things should go

app.use('/api', require('./api'));

module.exports = app;
