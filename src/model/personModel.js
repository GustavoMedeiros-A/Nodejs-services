const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter a name "]
    },
    payCheck: {
        type: Number,
        required: [true, "Enter a value"]
    },
    // discountVoucher: {
    //     type: Boolean,
    //     required: [true, "Enter the Voucher"]
    // },
    nightWorker: {
        type: Boolean,
        required: [true, "Need to type"]
    },
    childrenNumber: {
        type: Number,
        required: [true, "Need a number"]
    }
});

module.exports = mongoose.model('Person', personSchema)