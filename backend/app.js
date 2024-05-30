
const express = require('express');//Import du framework Express
const bodyParser = require('body-parser'); //Import du package d'accès aux contenus des données transmises par le front
const mongoose = require('mongoose'); //Import du package mongoose
const dotenv = require('dotenv').config(); //Import du package dotenv pour la gestion des variables d'environnement



//Import des routes 
const blogRoutes = require('./routes/blog');
const dashboardRoutes = require('./routes/user');
const registrationRoutes = require('./routes/registration');
const userRoutes = require('./routes/user');

const path = require('path');//Module de gestion du système de fichiers

//Connexion au cluster "myairportacademy" de la base de données MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();//Création de l'application

//Middleware de gestion du CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json()); //Transformation du contenu en fichiers JSON

//Routes d'accès aux données
app.use('/api/blog', blogRoutes);
app.use('/api/registration', registrationRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/auth', userRoutes);

//Route d'accès aux médias téléversés
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/files', express.static(path.join(__dirname, 'files')));


module.exports = app;