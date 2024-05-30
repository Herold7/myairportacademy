const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    username: { type: String, required: false, unique: true },
    mail: { type: String, required: true },
    pass: { type: String, required: true },
    role: { type: String, required: true },
    created_at: { type: Date, default: Date.now, required: true },
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);