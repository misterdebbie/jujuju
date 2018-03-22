const express = require('express');
//import express module
const moodRouter = require('./routes/moods');
//define routes for mood collection

const app = express();
//access to routing HTTP requests
//configure middleware
//render HTML views
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
  res.send('yo');
});
//this is a route defintion
//callback function with 2 objects as args
//req and res
app.use('/mood', moodRouter);

app.get('*', (req,res) => {
  res.status(404).send('whoops, bad request!');
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
