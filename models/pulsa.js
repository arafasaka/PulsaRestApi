const mongoose = require('mongoose');
const yup = require('yup');

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

const validatePulsa = (pulsa) => {
    const schema = yup.object().shape({
        name: yup.string().required().min(2).max(100),
        saldo: yup.string().required().min(2),
        harga: yup.string().required().min(2),
        bonus: yup.string().min(2),
    })

    return schema
        .validate(pulsa)
        .then((pulsa) => pulsa)
        .catch((error) => {
            return{
                message:error.message
            }
            
        });
}

exports.Pulsa = new mongoose.model('Pulsa', PulsaSchema);
exports.validatePulsa = validatePulsa;