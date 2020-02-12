const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const studentsRoute = require('./routes/students');

app.use('/students', studentsRoute);

app.get('/', (request, response) => {
    response.send('This is a Tanveer homepage');
})

mongoose.connect('mongodb://127.0.0.1:27017/express', { useNewUrlParser: true });

app.listen(5000);