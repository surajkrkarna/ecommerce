const express = require('express');
const Router = express.Router()

const userController = require('../controllers')

const { fetchData, signUser, verifytoken, upload } = require('../middlewares');


Router.post('/api', verifytoken, userController.rone)
Router.post('/api/login', signUser, userController.login)
Router.post('/api/regenerate', verifytoken, userController.regeneratetoken)
Router.post('/api/register', userController.register);
Router.get('/api/password', userController.showPassword)
Router.post('/api/upload', upload.single('image'), userController.uploadImg);
Router.post('/api/protected', fetchData, userController.rtwo);
Router.get('/api/images', userController.fetchImg);
module.exports = {
    Router,
}
