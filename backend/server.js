const express = require('express');
const app = express();
const connectors = require('../backend/config');
require('../backend/dbconnect');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use(require('./routes'));
app.listen(connectors.PORT, () => console.log(`App Running in PORT ${connectors.PORT}`));