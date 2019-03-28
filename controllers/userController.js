const express = require('express')
const User = require('../models/User')
const router = express.Router()

router.get('/', (req, res) => {
    User.find().then(users => {
            res.json(users)
        })
        .catch((err) => console.log(err))
});

router.post('/', (req, res) => {
    const newUser = req.body;

    User.create(newUser).then((user) => {
        res.json(user)
    })
})


//Show
router.get("/:id", (req, res) => {
    User.findById(req.params.id).then((user) => {
        res.json(user);
    });
});


module.exports = router;