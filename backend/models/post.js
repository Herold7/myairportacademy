const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: false },
    status: { type: String, required: true },
    image: { type: String, required: true },
    userId: { type: String, required: true },
    created_at: { type: Date, default: Date.now, required: true },
    updated_at: { type: Date, required: false },
})


module.exports = mongoose.model('Post', postSchema);