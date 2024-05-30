const Client = require('../models/client');
const fs = require('fs');

//Middelwares CRUD
//Modification, suppression et lecture accessible uniquement aux users authentifiés
exports.createClient = (req, res, next) => {
    const clientObject = JSON.parse(req.body.client);
    delete clientObject._id;
    delete clientObject._userId;
    const client = new Client({
        ...clientObject,
        cv: `${req.protocol}://${req.get('host')}/files/${req.file.filename}`//Génération d'une URL complète lors du téléversement du cv
    });

    client.save()
        .then(() => { res.status(201).json({ message: 'Client enregistré !' }) })
        .catch(error => { res.status(400).json({ error }) })
};

exports.getOneClient = (req, res, next) => {
    // Vérifie que l'utilisateur est authentifié
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
    }
    Client.findOne({
        _id: req.params.id
    }).then(
        (client) => {
            res.status(200).json(client);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.modifyClient = (req, res, next) => {
    const clientObject = req.file ? {
        ...JSON.parse(req.body.client),
        cv: `${req.protocol}://${req.get('host')}/files/${req.file.filename}`
    } : { ...req.body };

    delete clientObject._userId;
    Client.findOne({ _id: req.params.id })
        .then((client) => {
            if (client.userId != req.auth.userId) {//Vérifie qu'un user est bien authentifié pour la modification du profil d'un client
                res.status(401).json({ message: 'Non autorisé' });
            } else {
                Client.updateOne({ _id: req.params.id }, { ...clientObject, _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Client modifié!' }))
                    .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};

exports.deleteClient = (req, res, next) => {
    Client.findOne({ _id: req.params.id })
        .then(client => {
            if (client.userId != req.auth.userId) {
                res.status(401).json({ message: 'Non autorisé' });
            } else {
                    Client.deleteOne({ _id: req.params.id })
                        .then(() => { res.status(200).json({ message: 'Client supprimé !' }) })
                        .catch(error => res.status(401).json({ error }));
                };
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

exports.getAllProfiles = (req, res, next) => {
    // Vérifie que l'utilisateur est authentifié
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
    }

    Client.find()
        .then(clients => {
            res.status(200).json(clients);
        })
        .catch(error => {
            res.status(400).json({ error });
        });
};