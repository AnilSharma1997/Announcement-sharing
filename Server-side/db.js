const mongoose = require('mongoose');
const config  =  require('./config');

const url = config.mongoUrl;
const connect = mongoose.connect(url, { useNewUrlParser: true });

connect.then((db) =>{
    console.log('connected correctly to server...');
}, (err) => {console.log(err);});

module.exports = mongoose;
