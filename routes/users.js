const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/', usersController.getUsers);

router.get('/:userId', usersController.getUser);
router.post('/add-user', usersController.addUser);
router.put('/update-user/:userId', usersController.updateUser);
router.delete('/delete-user/:userId', usersController.deleteUser);

module.exports = router;