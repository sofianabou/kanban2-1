const express = require('express');
const router = express.Router();


const { register, login, getUserById, updateUser, deleteUser } = require('../backend/controllers/controllerUser');

router.post("/register", register);
router.post('/login', login);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);



module.exports = router;
