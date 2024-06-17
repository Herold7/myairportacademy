const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {//Middleware de vérification du token
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;//Extraction de l'ID utilisateur du token
        req.auth = {
            userId: userId
        };
        next();
    } catch (error) {
        res.status(401).json({ error });
    }
};