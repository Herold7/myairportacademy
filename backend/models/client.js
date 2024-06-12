const mongoose = require('mongoose');//Import de mongoose

const clientSchema = mongoose.Schema({//Schéma de données pour les clients, avec les champs définis avec leur type et leur caractère obligatoire
    gender: { type: String, required: false },//Genre du client, non obligatoire
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    mail: { type: String, required: true },
    phone: { type: String, required: true },
    birthday: { type: Date, required: true },
    training: { type: String, required: true },
    consent: { type: Boolean, required: true },
    cv: { type: String, required: true },
    paymentStatus: { type: String, required: false },
    created_at: { type: Date, default: Date.now, required: true },//Date de création du client, corresppond à la date actuelle
})


module.exports = mongoose.model('Client', clientSchema);//Export du modèle Client vers app.js