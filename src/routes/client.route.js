const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

const userController = require('../controllers/user.controller');

router.get('/users/:id', userController.getUserById);
router.get('/users', userController.getUsers);
router.post("/users", userController.addUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
