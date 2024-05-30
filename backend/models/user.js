const mongoose = require('mongoose');//Import de mongoose
const uniqueValidator = require('mongoose-unique-validator');//Plugin pour garantir l'unicité de l'adresse mail

const userSchema = mongoose.Schema({//Schéma de données pour les utilisateurs, avec les champs définis avec leur type et leur caractère obligatoire
    username: { type: String, required: false, unique: true },
    mail: { type: String, required: true },
    pass: { type: String, required: true },
    role: { type: String, required: true },
    created_at: { type: Date, default: Date.now, required: true },//Date de création du compte, corresppond à la date actuelle
})

userSchema.plugin(uniqueValidator);//Application du plugin pour garantir l'unicité de l'adresse mail

module.exports = mongoose.model('User', userSchema);//Export du modèle User vers app.js