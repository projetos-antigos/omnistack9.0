const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/omnistack',{
    useNewUrlParser:true, useUnifiedTopology:true
});

const routes = require('./routes');

//req.query acessa os query params
//portquiz.net:porta testa se a porta esta acessivel

app.use(express.json());

app.use(routes);

app.listen('3333');