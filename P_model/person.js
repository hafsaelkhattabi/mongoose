const mongoose = require('mongoose')

// the person schema

const Pschema = new mongoose.Schema({
    name: { type: String, required: true},
    age: Number,
    favoriteFoods: [String]
})

// create the person model
const person = mongoose.model('person', Pschema)

module.exports = person