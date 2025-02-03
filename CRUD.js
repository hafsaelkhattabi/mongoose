const mongoose = require('mongoose')
const person = require('./P_model/person')

//mongodb atlas connection uri
const uri = 'mongodb+srv://hafsaelkhattabi:hafssa1213@cluster0.k7zrt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// connect to mongodb
mongoose.connect('uri', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.error('mongodb not connected :',err))

// create and save a new person

function newperson() {
    var newperson = new person({
        name: 'hafsa',
        age: 22,
        favoriteFoods: ['pastilla', 'couscous']
    })

    newperson.save(function(err,save) {
        if (err) { console.error(err)}
        else {console.log('the new person saves successfuly:', save)}
    })
}

// create many people

function manypeople() {
    var arr = [
        { name: 'hafsa', age: 22, favoriteFoods: ['pastilla', 'couscous']},
        { name: 'sara', age: 23, favoriteFoods: ['rafissa', 'payla']}
    ]

    person.create(arr, function (err, save) {
        if (err) { console.error(err)}
        else { console.log('people saved successfuly:', save)}
    })
}

// find people by name

function findpeople(name) {
    person.find({ name: name}, function (err, find) {
        if (err) { console.error(err)}
        else { console.log('the random people found:', find)}
    })
}

// find one person by favorite food

function findbyfood(food) {
    person.findOne({ favoriteFoods: food }, function (err, find) {
        if (err) { console.error(err)}
        else { console.log('the random people found:', find)}
    })
}

// find by ID

function findbyid(id) {
    person.findById(id, function (err, save) {
        if (err) { console.error(err)}
        else { console.log('the random people found:', find)}
    })
}

// update a person's favorite foods

function updatebyid(id) {
    person.findById(id, function (err, save) {
        if (err) { console.error(err)}
        else { 
            person.favoriteFoods.push('pizza')
            person.save(function (err, update) {
               if (err) { console.error(err)}
               else {console.log('the person food updated:', update)}
            })
        }    
    })
}

// find and update a person by name

function updatebyname(name) {
    person.findOneAndUpdate(
        { name: name },
        { age: 15},
        { new: true },
        function (err , update) {
            if (err) { console.error(err)}
            else {console.log('the person updated:', update)} 
        }
    )
}

// delete a person by id

function deletebyid(id) {
    person.findByIdAndDelete(id, function (err, remove) {
        if (err) { console.error(err)}
        else {console.log('the person deleted:', remove)}
    })
}

// delete multiple people by name

function deletebyname(name) {
    person.deleteMany({ name: name}, function (err, remove) {
        if (err) { console.error(err)}
        else {console.log('the people removed:', remove)}
    })
}

 