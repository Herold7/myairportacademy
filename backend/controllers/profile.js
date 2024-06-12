const Client = require('../models/client');
const sendRegistrationEmail = require('../services/emailServices');
const fs = require('fs');

//Middelwares CRUD
//Modification, suppression et lecture accessible uniquement aux users authentifiés
exports.createClient = (req, res, next) => {
    const client = new Client({
        ...req.body,
        cv: `${req.protocol}://${req.get('host')}/files/${req.file.filename}`//Génération d'une URL complète lors du téléversement du cv
    });

    client.save()
        .then(() => { sendRegistrationEmail(client); res.status(201).json({ message: 'Client enregistré !' }) })
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
    // Vérifie que l'utilisateur est authentifié
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
    }
    const clientObject = req.file ? {
        ...JSON.parse(req.body.client),
    } : { ...req.body };

    delete clientObject._userId;

    Client.findOne({ _id: req.params.id })
        .then(client => {
            if (!client || client.userId !== req.auth.userId) {
                return res.status(403).json({ message: 'Non autorisé' });
            }
            // Suppression du fichier précédent si un nouveau fichier est téléchargé
            if (req.file) {
                const oldFilename = client.cv.split('/files/')[1];//Récupération du nom du fichier
                fs.unlink(`files/${oldFilename}`, (err) => {
                    if (err) console.error('Erreur lors de la suppression de l\'ancien fichier :', err);
                });
            }
            //Mise à jour du rendez-vous
            client.updateOne({ _id: req.params.id }, { ...clientObject, _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Rendez-vous modifié!' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

exports.deleteclient = (req, res, next) => {
    // Vérifie que l'utilisateur est authentifié
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
    }
    Client.findOne({ _id: req.params.id })
        .then(client => {
            if (!client || client.userId !== req.auth.userId) {
                return res.status(403).json({ message: 'Non autorisé' });
            }
            const filename = client.cv.split('/files/')[1];
            fs.unlink(`files/${filename}`, () => {//Suppression du fichier du dossier "files"
                Client.deleteOne({ _id: req.params.id })
                    .then(() => { res.status(200).json({ message: 'Rendez-vous supprimé !' }) })
                    .catch(error => res.status(500).json({ error }));
            });
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