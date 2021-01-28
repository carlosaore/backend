const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/', (req, res) => {
  passport.authenticate('local', (err, user, info) => {
      
  })
})

// connect to passport to use a local strategy o log in the user
// if the strategy turns out to work, assign a JWT
// send this JWT together with user info to the frontend

module.exports = router;