const express = require('express');
const router = express.Router();
const Card = require('../backend/models/modelCard');

const { createCard, getAllCards, getCardById, updateCard, deleteCard } = require('../backend/controllers/controllerCard');


router.post('/createdCard', createCard);
router.get('/getAllCards', getAllCards);
router.get('/:id', getCardById);
router.put('/:id', updateCard);
router.delete('/:id', deleteCard);




module.exports = router;
