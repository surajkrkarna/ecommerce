const mongoose = require('mongoose');
const { mdb_Url } = require('../backend/config')
mongoose.connect(mdb_Url)
    .then(() => {
        console.log('Database connected')
    })
    .catch(err => console.log(err.message))

