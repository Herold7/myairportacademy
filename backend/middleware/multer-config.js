const multer = require('multer');

const MIME_TYPES = {//Définition des types MIME pour les images et les fichiers
    'image/jpeg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png': 'png',
    'image/webp': 'webp',
    'application/pdf': 'pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
    'application/msword': 'doc',

};

const storage = multer.diskStorage({//Configuration de multer pour l'enregistrement des fichiers
    destination: (req, file, callback) => {//Définition du dossier de destination
        if (file.mimetype.startsWith('image/')) {
            callback(null, 'images');
        } else {
            callback(null, 'files');
        }
    },
    filename: (req, file, callback) => {//Définition du nom du fichier
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage: storage }).fields([
    { name: 'image', maxCount: 1 }, //Gestion des fichiers image
    { name: 'file', maxCount: 1 }//Gestion des fichiers
]);