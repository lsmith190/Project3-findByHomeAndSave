require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User')
const Homes = require('../models/Homes')


const lindsey = new User({
    name: 'Lindsey',
    password: 'abc123',
    homes: []
})

const mercerSt = new Homes({
    address: '780 Mercer St. Atlanta, GA 30312',
    numberOfBeds: 4,
    price: 725000,
    comments: 'Modern floorplan and structure of home',
    image: 'https://i.imgur.com/WXrSSFF.jpg?2'
})
lindsey.homes.push(mercerSt)

const hillSt = new Homes({
    address: '1050 Hill St. Atlanta, GA 30315',
    numberOfBeds: 3,
    price: 539000,
    comments: 'Has front porch and fenced in backyard',
    image: 'https://i.imgur.com/EXhfYP3.jpg?1'
})
lindsey.homes.push(hillSt)




User.remove({})
    .then(() => lindsey.save())
    // .then(() => mercerSt.save())
    // .then(() => hillSt.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())