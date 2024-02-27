const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: 
  { 
    type: String, 
    required: true 
  },

  description: String,

  column: 
  { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Column' 
  },

  assignedTo: 
  { type: mongoose.Schema.Types.ObjectId,
     ref: 'User' 
    },

  status: 
  { type: String, 
    enum: ['todo', 'inProgress', 'done'],
     default: 'todo' 
    },
});


 const Card = mongoose.model('Card', cardSchema);


module.exports = Card;

