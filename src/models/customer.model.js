const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv').config({path: __dirname + '/.env'});

//To check whether we get url from the env file 
//console.log(process.env.MONGODB_URL);

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true}, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Connected!');
    }
});

//Define a customer schema
let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
});

//export it as a mongoose model
module.exports = mongoose.model('Customer', CustomerSchema);