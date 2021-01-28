require('dotenv').config();
// app dependencies
const express = require('express');
// require the db
// require the auth folder
// app config related stuff
const app = express();
// create route for register, login and profile
// set the DB connection
// app global middlewares (like bodyparser)
app.use((req, res, next) => {
  let err = new Error('Not found');
  err.status = 404;
  next(err)
})
// need to export app
module.exports = app;














