const express = require('express');
const Router = express.Router()

const userController = require('../controllers')

Router.get('/api', userController.rone)

module.exports = {
    Router,
}