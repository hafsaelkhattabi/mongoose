const mongoose = require('mongoose')

const uri = "mongodb+srv://hafsaelkhattabi:hafssa1213@cluster0.k7zrt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// connect to mongodb

mongoose.connect(uri)
    .then(function () {
        console.log('Connected to MongoDB');
    })
    .catch(function (err) {
        console.error('MongoDB connection error:', err);
    });
