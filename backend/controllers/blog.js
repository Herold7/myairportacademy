const Post = require('../models/post');
const fs = require('fs');//Import du package d'intéraction avec le système de fichiers

//Middelwares CRUD
//Accessible uniquement aux users authentifiés
exports.createPost = (req, res, next) => {
    // Vérifie que l'utilisateur est authentifié
    if (post.userId != req.auth.userId) {
        res.status(401).json({ message: 'Non autorisé' });
    } else {
    const postObject = JSON.parse(req.body.post);
    delete postObject._id;
    delete postObject._userId;
    const post = new Post({
        ...postObject,
        userId: req.auth.userId, // Utilise l'ID de l'utilisateur authentifié
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` // Génération d'une URL complète lors du téléversement d'une image
    });
    }
    post.save()
        .then(() => { res.status(201).json({ message: 'Objet enregistré !' }) })
        .catch(error => { res.status(400).json({ error }) });
};

exports.getOnePost = (req, res, next) => {
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
    }
    Post.findOne({
        _id: req.params.id
    }).then(
        (post) => {
            res.status(200).json(post);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.modifyPost = (req, res, next) => {
    const postObject = req.file ? {
        ...JSON.parse(req.body.post),
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

    delete postObject._userId;
    Post.findOne({ _id: req.params.id })
        .then((post) => {
            if (post.userId != req.auth.userId) {
                res.status(401).json({ message: 'Non autorisé' });
            } else {
                Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Objet modifié!' }))
                    .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};

exports.deletePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => {
            if (post.userId != req.auth.userId) {
                res.status(401).json({ message: 'Non autorisé' });
            } else {
                const filename = post.image.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Post.deleteOne({ _id: req.params.id })
                        .then(() => { res.status(200).json({ message: 'Article supprimé !' }) })
                        .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

exports.getAllBlogs = (req, res, next) => {
    // Vérifie que l'utilisateur est authentifié
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
    }

    Post.find()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            res.status(400).json({ error });
        });
};