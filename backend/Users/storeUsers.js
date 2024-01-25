const { userModel } = require('../models');
const crypto = require('crypto-js');
const registerUser = async (req, res) => {
    const { body } = req;
    try {
        if (body.username && body?.password === body?.confirmPassword) {
            const username = body.username;
            const password = body.password;
            const showPassword = crypto.AES.encrypt(body.password, "randomkey").toString();

            await new userModel({ username, password, showPassword }).save();
            res.json(body)
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { registerUser };

