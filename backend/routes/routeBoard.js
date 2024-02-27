const express = require('express');
const router = express.Router();
const { createBoard, getAllBoards, getBoardById, updateBoard, deleteBoard } = require('../backend/controllers/controllerBoard');

router.post('/', createBoard);
//router.get('/', getAllBoards);
router.get('/:id', getBoardById);
router.put('/:id', updateBoard);
router.delete('/:id', deleteBoard);




module.exports = router;
