const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const HomesSchema = new Schema({
    address: {
        type: String,
        default: 'New Home'
    },
    numberOfBeds: {
        type: Number,
        default: 'New Beds'
    },
    price: {
        type: Number,
        default: 'New Price'
    },
    rating: {
        type: Number,
        default: 'New Rating'
    },
    image: {
        type: String,
        default: 'New Image'
    }
})

const UserSchema = new Schema({
    name: String,
    password: String,
    homes: [HomesSchema]
})

module.exports = {
    HomesSchema: HomesSchema,
    UserSchema: UserSchema
}