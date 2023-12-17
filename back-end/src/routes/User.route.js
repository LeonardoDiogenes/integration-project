const { Router } = require('express');

const userController = require('../controllers/User.controller');

const route = Router();

route.get('/:id', userController.getById);

module.exports = route;
