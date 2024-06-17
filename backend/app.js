const express = require('express');//Import du framework Express
const mongoose = require('mongoose'); //Import du package mongoose
const dotenv = require('dotenv'); //Import du package dotenv pour la gestion des variables d'environnement
const cors = require('cors');


//Import des routes 
const blogRoutes = require('./routes/blog');
const profileRoutes = require('./routes/profile');
const registrationRoutes = require('./routes/registration');
const userRoutes = require('./routes/user');

const path = require('path');//Module de gestion du système de fichiers

//Connexion au cluster "myairportacademy" de la base de données MongoDB Atlas
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(error => console.error('Connexion à MongoDB échouée !', error));

const app = express();//Création de l'application

//Middleware de gestion du CORS
app.use(cors());

app.use(express.json());

//Routes d'accès aux données
app.use('/api/blog', blogRoutes);
app.use('/api/registration', registrationRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/auth', userRoutes);

//Route d'accès aux médias téléversés
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/files', express.static(path.join(__dirname, 'files')));


module.exports = app;