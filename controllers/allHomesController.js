const express = require('express')
    // const router = express.Router()
const router = express.Router({ mergeParams: true });
const Homes = require('../models/Homes.js')

router.get('/', (req, res) => {
    Homes.find().then(homes => {
            console.log(homes)
            res.json(homes)
        })
        .catch((err) => console.log(err))
});

module.exports = router;