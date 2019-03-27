const express = require('express')
const Homes = require('../models/Homes.js')
    // const router = express.Router()
const router = express.Router({ mergeParams: true });
const User = require('../models/User.js')

router.get('/', (req, res) => {
    User.findById(req.params.id).then(user => {
            res.json(user.homes)
        })
        .catch((err) => console.log(err))
})

router.post("/new", (req, res) => {
    const userId = req.params.id;
    const newHomeInfo = req.body;

    User.findById(userId).then((user) => {
        const newHome = new Homes(newHomeInfo);

        user.homes.push(newHome);
        return user.save();
    }).then((user) => {
        res.json(user);
    }).catch(err => console.log(err));
})


router.get('/:homeId', (req, res) => {
    const userId = req.params.id;
    const homeId = req.params.homeId;

    User.findById(userId)
        .then((user) => {
            console.log(user)
            const foundHome = user.homes.find((home) => {
                console.log(home)
                return home.id === homeId;
            })
            res.json(foundHome)
        })
        .catch((error) => {
            console.log("Failed to find" + error);
        })
});

router.delete('/:homeId', (req, res) => {
    User.findById(req.params.id).then(user => {
        const filteredHomes = user.homes.filter(home => home._id.toString() !== req.params.homeId)

        user.homes = filteredHomes

        user.save().then(user => {
            user.homes = user.homes.reverse()
            res.json(user.homes)
        })
    })
})




module.exports = router;