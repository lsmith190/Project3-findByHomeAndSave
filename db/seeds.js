require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User')
const Homes = require('../models/Homes')

const mercerSt = new Homes({
    address: '780 Mercer St. Atlanta, GA 30312',
    numberOfBeds: 4,
    price: 725000,
    rating: 5,
    image: '../img/MercerSt.jpg'
})
const hillSt = new Homes({
    address: '1050 Hill St. Atlanta, GA 30315',
    numberOfBeds: 3,
    price: 539000,
    rating: 4,
    image: '../img/hillSt.jpg'
})
const lindsey = new User({
    name: 'Lindsey',
    password: 'abc123',
    ideas: [mercerSt, hillSt]
})

User.remove({})
    .then(() => lindsey.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())