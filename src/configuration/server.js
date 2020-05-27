const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.set("port", process.env.PORT || 3030);
module.exports = app;