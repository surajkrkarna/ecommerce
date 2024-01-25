const express = require('express');
const Router = express.Router()

const userController = require('../controllers')

const { fetchData, signUser, verifytoken } = require('../middlewares');


Router.post('/api', verifytoken, userController.rone)
Router.post('/api/login', signUser, userController.login)
Router.post('/api/regenerate', verifytoken, userController.regeneratetoken)
Router.post('/api/register', userController.register);

Router.post('/api/protected', fetchData, userController.rtwo)
module.exports = {
    Router,
}
