const express = require('express');
const morgan = require('morgan');

const {db} = require('./firebase')

const app = express();

app.use(morgan('dev'))

app.get ('/', async (req,res) => {

   const result = await db.collection('books').get()
   console.log(result.docs);
   

    res.send('Hello')
})

module.exports = app;