const Board = require('../models/modelBoard');

module.exports.createBoard = async (req, res) => {
  try {
    const { name, owner, columns } = req.body;
    const newBoard = await Board.create({ name, owner, columns });
    res.status(201).json(newBoard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*
const getAllBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
*/


   
   module.exports.getBoardById = async (req, res) => {
    try {
      const { id } = req.params;
      const board = await Board.findById(id);
      if (!board) {
        return res.status(404).json({ error: 'Board not found' });
      }
      res.status(200).json(board);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  module.exports.updateBoard = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, owner, columns } = req.body;
      const updatedBoard = await Board.findByIdAndUpdate(
        id,
        { name, owner, columns },
        { new: true }
      );
      if (!updatedBoard) {
        return res.status(404).json({ error: 'Board not found' });
      }
      res.status(200).json(updatedBoard);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



  module.exports.deleteBoard = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBoard = await Board.findByIdAndDelete(id);
      if (!deletedBoard) {
        return res.status(404).json({ error: 'Board not found' });
      }
      res.status(204).json(); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



