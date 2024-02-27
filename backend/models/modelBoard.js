const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  name: 
  { 
    type: String, 
    required: true
  },
  owner: 
  { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', required: true
  },
  columns: [
    { 
      name: String, 
      cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }] 
    }
  ],
});

 const Board = mongoose.model('Board', boardSchema);



module.exports = Board;

