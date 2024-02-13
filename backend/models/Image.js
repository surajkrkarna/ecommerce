const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const imageSchema = new mongoose.Schema({
    filename: String,
    originalname: String,
    path: String,
    url: String
});

// imageSchema.pre('save', function (next) {
//     const image = this;
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(image.filename, salt, (err, hash) => {
//             image.filename = hash;
//             next();
//         })
//     })
// })

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;