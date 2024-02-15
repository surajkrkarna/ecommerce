const jwt = require('jsonwebtoken');
const fs = require('fs');
const { registerUser } = require('../Users/storeUsers');
const { userModel } = require('../models')
const crypto = require('crypto-js');
const path = require('path');
const { mkDirByPathSync, uniqueName, removeFile } = require('../helpers/common')
const { Product } = require('../models')
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
        const { files } = req;
        console.log(files)
        if (!files) { return ''; }

        let imageName = '';
        const image = files.image;
        console.log(image)
        if (image) {
            // mkDirByPathSync(dir);
            // Use the mv() method to place the file somewhere on your server
            imageName = `${uniqueName()}.${image.mimetype.split('/')[1]}`;
            image.mv(path.join(__dirname, '../uploads/', imageName), (err) => {
                if (err) imageName = '';
            });
        }
        // const uploadedFile = req.body.image;
        res.json({ message: 'File uploaded successfully', file: imageName });
    },

    fetchImg: (req, res) => {
        // Assuming you have a user-specific folder structure
        const userFolder = './uploads';

        fs.readdir(userFolder, (err, files) => {
            console.log(files)
            if (err) {
                console.error('Error reading user images:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            return res.json({ files });

        });
    },
    fetchProduct: async (req, res) => {
        let products = await Product.find();
        // console.log(products);
        return res.json({ products });
    },
}

module.exports = userController;