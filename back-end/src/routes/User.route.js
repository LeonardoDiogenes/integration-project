const { Router } = require('express');

const userController = require('../controllers/User.controller');
const validateCreateUser = require('../middlewares/validateCreateUser');

const route = Router();

route.get('/:id', userController.getById);

route.post('/', validateCreateUser, userController.createUser);

route.post('/login', userController.login);

module.exports = route;
