const express = require('express')
const app = express()
const cors = require('cors');
app.use(express.json())
app.use('/api',require('./routes/api'))
app.use(cors({
    origin: 'http://localhost:3000/api'
}));
module.exports = app