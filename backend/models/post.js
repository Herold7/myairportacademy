const mongoose = require('mongoose');//Import de mongoose

const postSchema = mongoose.Schema({//Schéma de données pour les posts, les champs sont définis avec leur type et leur caractère obligatoire
    title: { type: String, required: true },
    body: { type: String, required: false },
    status: { type: String, required: true },
    image: { type: String, required: true },
    userId: { type: String, required: true },
    created_at: { type: Date, default: Date.now, required: true },//Date de création du post, corresppond à la date actuelle
    updated_at: { type: Date, required: false },//Date de mise à jour du post
})


module.exports = mongoose.model('Post', postSchema);//Export du modèle Post vers app.js