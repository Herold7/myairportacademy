const mongoose = require('mongoose');//Import de mongoose

const interviewSchema = mongoose.Schema({//Schéma de données pour les entretiens, avec les champs définis avec leur type et leur caractère obligatoire
    date: { type: Date, required: true },
    timeSlot: { type: String, required: true },
    userId: { type: String, required: true },
    clientId: { type: String, required: true },
    created_at: { type: Date, default: Date.now, required: true },//Date de création de l'entretien, corresppond à la date actuelle
    updated_at: { type: Date, required: false },//Date de mise à jour de l'entretien
})


module.exports = mongoose.model('Interview', interviewSchema);//Export du modèle Interview vers app.js