const mongoose = require('mongoose');

const interviewSchema = mongoose.Schema({
    date: { type: Date, required: true },
    timeSlot: { type: String, required: true },
    userId: { type: String, required: true },
    clientId: { type: String, required: true },
    created_at: { type: Date, default: Date.now, required: true },
    updated_at: { type: Date, required: false },
})


module.exports = mongoose.model('Interview', interviewSchema);