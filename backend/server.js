const express = require('express')
const app = express();
const connectors = require('../backend/config');
const db = require('../backend/dbconnect');

app.listen(connectors.PORT, () => console.log(`App Running in PORT ${connectors.PORT}`))
