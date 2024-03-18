const mongoose = require('mongoose');
const paymentModel  = new mongoose.Schema({
    idVendor: {
        type:Number
    },
	codUser: {
        type:String
    },
	meterSerial : {
        type:String
    },
    totalPayment: {
        type:Number
    },
	requestID: {
        type:String
    },
	channel:{
        type:Number
    }
},{timestamps:true})

const paymentSchema = mongoose.model('User', paymentModel);
module.exports = paymentSchema