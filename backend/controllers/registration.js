const Interview = require('../models/interview');
const fs = require('fs');

//Middelwares CRUD
//Modification, suppression et lecture accessible uniquement aux users authentifiés
exports.createInterview = (req, res, next) => {
    const interviewObject = JSON.parse(req.body.interview);
    delete interviewObject._id;
    delete interviewObject._userId;
    const interview = new Interview({
        ...interviewObject,
        cv: `${req.protocol}://${req.get('host')}/files/${req.file.filename}`//Génération d'une URL complète lors du téléversement du cv client
    });
    interview.save()
        .then(() => { res.status(201).json({ message: 'Rendez-vous enregistré !' }) })
        .catch(error => { res.status(400).json({ error }) })
};

exports.getOneInterview = (req, res, next) => {
    // Vérifie que l'utilisateur est authentifié
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
    }
    Interview.findOne({
        _id: req.params.id
    }).then(
        (interview) => {
            res.status(200).json(interview);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.modifyInterview = (req, res, next) => {
    // Vérifie que l'utilisateur est authentifié
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
    }
    const interviewObject = req.file ? {
        ...JSON.parse(req.body.interview),
        cv: `${req.protocol}://${req.get('host')}/files/${req.file.filename}`
    } : { ...req.body };

    delete interviewObject._userId;

    Interview.findOne({ _id: req.params.id })
        .then(interview => {
            if (!interview || interview.userId !== req.auth.userId) {
                return res.status(403).json({ message: 'Non autorisé' });
            }
            // Suppression du fichier précédent si un nouveau fichier est téléchargé
            if (req.file) {
                const oldFilename = interview.cv.split('/files/')[1];//Récupération du nom du fichier
                fs.unlink(`files/${oldFilename}`, (err) => {
                    if (err) console.error('Erreur lors de la suppression de l\'ancien fichier :', err);
                });
            }
            //Mise à jour du rendez-vous
            Interview.updateOne({ _id: req.params.id }, { ...interviewObject, _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Rendez-vous modifié!' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

exports.deleteInterview = (req, res, next) => {
    // Vérifie que l'utilisateur est authentifié
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
    }
    Interview.findOne({ _id: req.params.id })
        .then(interview => {
            if (!interview || interview.userId !== req.auth.userId) {
                return res.status(403).json({ message: 'Non autorisé' });
            }
            const filename = interview.cv.split('/files/')[1];
            fs.unlink(`files/${filename}`, () => {//Suppression du fichier du dossier "files"
                Interview.deleteOne({ _id: req.params.id })
                    .then(() => { res.status(200).json({ message: 'Rendez-vous supprimé !' }) })
                    .catch(error => res.status(500).json({ error }));
            });
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

exports.getAllRegistrations = (req, res, next) => {
    // Vérifie que l'utilisateur est authentifié
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
    }

    Interview.find()
        .then(interviews => {
            res.status(200).json(interviews);
        })
        .catch(error => {
            res.status(400).json({ error });
        });
};