const express = require('express');
const morgan = require('morgan');

const {db} = require('./firebase')

const app = express();

app.use(morgan('dev'))

app.get ('/', async (req,res) => {

   
   

    res.send('Hello')
})

module.exports = app;