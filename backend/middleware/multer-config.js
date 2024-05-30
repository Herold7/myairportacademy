const multer = require('multer');

const MIME_TYPES = {
    'image/jpeg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png': 'png',
    'image/webp': 'webp',
    'application/pdf': 'pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
    'application/msword': 'doc',

};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        if (file.mimetype.startsWith('image/')) {
            callback(null, 'images');
        } else {
            callback(null, 'files');
        }
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage: storage }).fields([
    { name: 'image', maxCount: 1 }, 
    { name: 'file', maxCount: 1 }
]);