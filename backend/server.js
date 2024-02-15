const express = require('express');
const app = express();

const path = require('path');
const fileUpload = require('express-fileupload');

const connectors = require('../backend/config');

require('../backend/dbconnect');
require('./seeders')
const cors = require('cors');

app.use(express.json());

app.use(cors());
app.use(fileUpload());

app.use(express.static(path.join(__dirname, 'uploads')));
// app.use(express.static('uploads'));

app.use(require('./routes'));

app.listen(connectors.PORT, () => console.log(`App Running in PORT ${connectors.PORT}`));