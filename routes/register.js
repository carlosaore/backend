const express = require('express');
const router = express.Router();
const bicrypt = require('bcrypt');
const db = require('../database/configs');
const { user } = require('../database/configs');
const Users = db.user;

router.post('/', (req, res) => {
// We are receiving all the user info from a form

    bicrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
        //we have our password ready
        //we need to store the user that is being registered in our db
        console.log(req.body.password, hashedPassword)
        user.create({
            firstname: req.body.firstname,
            lastname : req.body.lastname,
            password : hashedPassword,
            email : req.body.email,
        })
            .then(() => 
                res.status(201).send({message : 'You have succesfully signed up'})
            )
            .catch((userError) => console.error(`User error ${userError}`))
    })
    .catch((hashError) => console.error(`Hashing the password had the following errors: ${hashError}`))
})

module.exports = router;