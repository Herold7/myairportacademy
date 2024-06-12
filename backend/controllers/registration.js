const Interview = require('../models/interview');
const sendRegistrationEmail = require('../services/emailServices');


//Middelwares CRUD
//Modification, suppression et lecture accessible uniquement aux users authentifiés
exports.createInterview = (req, res, next) => {
    const interview = new Interview({
        ...req.body,
    });
    interview.save()
        .then(() => { sendRegistrationEmail(interview); res.status(201).json({ message: 'Interview enregistré !' }) })
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
    } : { ...req.body };

    delete interviewObject._userId;
    Interview.findOne({ _id: req.params.id })
        .then(interview => {
            if (!interview || interview.userId !== req.auth.userId) {
                return res.status(403).json({ message: 'Non autorisé' });
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
                Interview.deleteOne({ _id: req.params.id })
                    .then(() => { res.status(200).json({ message: 'Rendez-vous supprimé !' }) })
                    .catch(error => res.status(500).json({ error }));
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