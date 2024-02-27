const User = require('../models/modelUser');
const bcrypt = require('bcrypt');



module.exports.register = async (req, res) => {


  try {

    // Récupérer les données de la requête
    const { username, password, role } = req.body;

    // Hacher le mot de passe
    const bcrypt = await import('bcrypt');
    const hashedPassword = await bcrypt.default.hash(password, 10);

    // Créer un nouvel utilisateur
    const newUser = new User({
      username,
      password: hashedPassword,
      role,
    });

    // Sauvegarder l'utilisateur dans la base de données
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // Répondre avec l'utilisateur créé
  } catch (error) {
    res.status(400).json({ message: error.message }); // Répondre en cas d'erreur
  }
};


module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Identifiants invalides" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "password invalide" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password, role } = req.body;

    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { username, password: hashedPassword, role },
      { new: true } //document est mis à jour
    ).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ error: 'utilisateur introuvable' });
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};








