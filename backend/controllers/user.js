const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.createUser = (req, res, next) => {
    const userObject = JSON.parse(req.body.user);
    delete userObject._id;
    delete userObject._userId;
    const user = new User({
        ...userObject,
        userId: req.auth.userId,
    });

    user.save()
        .then(() => { res.status(201).json({ message: 'Objet enregistré !' }) })
        .catch(error => { res.status(400).json({ error }) })
};

exports.getOneUser = (req, res, next) => {
    // Vérifie que l'utilisateur est authentifié
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
    }
    User.findOne({
        _id: req.params.id
    }).then(
        (user) => {
            res.status(200).json(user);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.modifyUser = (req, res, next) => {
    // Vérifie que l'utilisateur est authentifié
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
    }
    const userObject = req.file ? {
        ...JSON.parse(req.body.user),
    } : { ...req.body };

    delete userObject._userId;

    User.findOne({ _id: req.params.id })
        .then(user => {
            if (!user || user.userId != req.auth.userId) {
                return res.status(403).json({ message: 'Non autorisé' });
            }
            User.updateOne({ _id: req.params.id }, { ...userObject, _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Utilisateur modifié!' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

exports.deleteUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then(user => {
            if (!user || user.userId != req.auth.userId) {
                return res.status(403).json({ message: 'Non autorisé' });
            }
            User.deleteOne({ _id: req.params.id })
                .then(() => { res.status(200).json({ message: 'Utilisateur supprimé !' }) })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.getAllUsers = (req, res, next) => {
    // Vérifie que l'utilisateur est authentifié
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
    }

    User.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(400).json({ error });
        });
};
