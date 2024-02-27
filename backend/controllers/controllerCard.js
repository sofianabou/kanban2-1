const Card = require('../models/modelCard');


module.exports.createCard = async (req, res) => {
  try {
    const { title, description, column, assignedTo, status } = req.body;
    const newCard = await Card.create({ title, description, column, assignedTo, status });
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports.getCardById = async(req, res) => {
    try {
      const { id } = req.params;
      const card = await Card.findById(id);
      if (!card) {
        return res.status(404).json({ error: 'Card not found' });
      }
      res.status(200).json(card);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  module.exports.updateCard = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, column, assignedTo, status } = req.body;
      const updatedCard = await Card.findByIdAndUpdate(
        id,
        { title, description, column, assignedTo, status },
        { new: true }
      );
      if (!updatedCard) {
        return res.status(404).json({ error: 'Card not found' });
      }
      res.status(200).json(updatedCard);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



module.exports.deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCard = await Card.findByIdAndDelete(id);
    if (!deletedCard) {
      return res.status(404).json({ error: 'Card not found' });
    }
    res.status(204).json(); // 204 No Content
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




