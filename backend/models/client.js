const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    gender: { type: String, required: false },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    mail: { type: String, required: true },
    phone: { type: String, required: true },
    birthday: { type: Date, required: true },
    training: { type: String, required: true },
    consent: { type: Boolean, required: true },
    cv: { type: String, required: true },
    paymentStatus: { type: String, required: true },
    created_at: { type: Date, default: Date.now, required: true },
})


module.exports = mongoose.model('Client', clientSchema);