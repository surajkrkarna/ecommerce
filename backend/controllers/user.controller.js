const jwt = require('jsonwebtoken');
const { registerUser } = require('../Users/storeUsers');
const { userModel } = require('../models')
const crypto = require('crypto-js');
const userController = {
    rone: (req, res) => {
        jwt.verify(req.token, "mykey", (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(
                    authData
                )
            }
        })
    },

    rtwo: (req, res) => {
        // let data = await req.body;
        // console.log(data)
        res.json(res.data)
    },

    login: (req, res) => {
        res.json({ reftoken: res.reftoken, token: res.token })
    },

    regeneratetoken: (req, res, next) => {
        jwt.verify(req.token, "mykey", (err, data) => {
            if (err) {
                res.sendStatus(403);
            } else {
                jwt.sign({ data }, "mykey", { expiresIn: 30000 }, (err, token,) => {
                    if (!err) {
                        res.json({ token })
                    } else {
                        res.json({ token: "invalid" })
                    }
                })
            }
            next();
        })
    },

    register: async (req, res) => {
        await registerUser(req, res);
    },

    showPassword: async (req, res) => {
        const authHeader = req.headers.authorization.split(' ')[1];
        jwt.verify(authHeader, "mykey", async (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                const user = await userModel.findOne({ username: authData.body.username });
                const password = crypto.AES.decrypt(user.showPassword, 'randomkey').toString(crypto.enc.Utf8);
                res.status(200).json({ password })
                console.log(password)
            }
        })
    }
}

module.exports = userController;