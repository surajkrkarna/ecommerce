const express = require('express')
const app = express();
const connectors = require('../backend/config');
require('../backend/dbconnect');




app.use(require('./routes'))
app.listen(connectors.PORT, () => console.log(`App Running in PORT ${connectors.PORT}`))