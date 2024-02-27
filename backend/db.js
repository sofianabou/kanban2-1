const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/kanban', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     
    });
    console.log('Connexion établie à MongoDB');
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

