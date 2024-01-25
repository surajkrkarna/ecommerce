const jwt = require('jsonwebtoken');
const { registerUser } = require('../Users/storeUsers');

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
                jwt.sign({ data }, "mykey", { expiresIn: 30 }, (err, token,) => {
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
    }

}

module.exports = userController;