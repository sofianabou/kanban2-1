const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: 
  { 
    type: String,
     unique: true, 
     required: true
  },
  password: 
  { 
    type: String, 
    required: true
  },
  role: 
  { type: String, 
    enum: ['admin', 'scrumMaster', 'user'],
     default: 'user' 
  },
});

const User = mongoose.model('Users', userSchema);

module.exports = User;

