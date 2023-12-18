const { Router } = require('express');

const userController = require('../controllers/User.controller');

const route = Router();

route.get('/:id', userController.getById);

route.post('/', userController.createUser);

module.exports = route;
