const jwt = require('jsonwebtoken');
const fs = require('fs');
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
    },

    uploadImg: (req, res) => {
        const uploadedFile = req.body.image;
        res.json({ message: 'File uploaded successfully', file: uploadedFile });
    },

    fetchImg: (req, res) => {
        // Assuming you have a user-specific folder structure
        const userFolder = `./uploads/${req.params.userId}`;

        fs.readdir(userFolder, (err, files) => {
            if (err) {
                console.error('Error reading user images:', err);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                const imageUrls = files.map((file) => `/uploads/${req.params.userId}/${file}`);
                res.json({ imageUrls });
            }
        });
    }
}

module.exports = userController;