const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const HomesSchema = new Schema({
    address: {
        type: String,
        default: 'New Home'
    },
    numberOfBeds: {
        type: Number,
        default: null
    },
    price: {
        type: Number,
        default: null
    },
    comments: {
        type: String,
        default: 'Comments'
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