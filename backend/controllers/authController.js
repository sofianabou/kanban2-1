const jwt = require('jsonwebtoken');
const config = require('../config/config'); // Assurez-vous d'avoir une configuration appropriée pour la clé secrète JWT

// Middleware pour vérifier si l'utilisateur est authentifié
const authenticateUser = (req, res, next) => {
  // Récupérer le token d'en-tête
  const token = req.header('Authorization');

  // Vérifier si le token est présent
  if (!token) {
    return res.status(401).json({ error: 'Authorization token is missing' });
  }

  try {
    // Vérifier et décoder le token
    const decoded = jwt.verify(token, config.jwtSecret);

    // Ajouter l'objet utilisateur au req pour une utilisation ultérieure dans les routes
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = {
  authenticateUser,
};
