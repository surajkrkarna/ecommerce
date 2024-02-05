const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { userModel } = require('../models');

const fetchData = async (req, res, next) => {
    const data = req.body;
    console.log(data)
    res.data = data;
    next();
}

const signUser = async (req, res, next) => {
    const { body } = req;
    console.log(body);
    try {
        const userdata = await userModel.findOne({ username: body.username });

        if (bcrypt.compareSync(body.password, userdata.password)) {
            jwt.sign({ body }, "mykey", { expiresIn: 3000 }, (err, token,) => {
                if (!err) {
                    res.token = token;
                } else {
                    res.token = err
                }
            })

            jwt.sign({ body }, "mykey", (err, token) => {
                if (!err) {
                    res.reftoken = token;
                } else {
                    res.reftoken = err;
                }
                next();
            })
        }
        else {
            res.sendStatus(404).json({ message: 'Password Incorrect' })
        }
    } catch (error) {
        res.json({ message: 'Password or Username not matched!' })
    }

}


const verifytoken = (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        console.log(bearerToken);
        req.token = bearerToken;
    } else {
        res.sendStatus(403);
    }
    next();
}


module.exports = { fetchData, signUser, verifytoken };
