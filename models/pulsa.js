const mongoose = require('mongoose');


//PULSA SCHEMA
const PulsaSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2,
        maxlength:100
    },
    saldo:{
        type:String,
        required:true,
        minlength:2
    },
    harga:{
        type:String,
        required:true,
        minlength:2
    },
    bonus:{
        type:String,
        minlength:2
    }
});

module.exports = new mongoose.model('Pulsa', PulsaSchema);