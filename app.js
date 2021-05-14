const express = require('express');
const cors = require('cors');
const path = require('path');
const { createTables } = require('./database/database');
require('dotenv').config();


const app = express();

// createTables()
//cors
app.use(cors());

//lectura y parseo del body
app.use(express.json());

//public
app.use(express.static('public'))

app.use('/api/login', require('./routes/auth.routes'));
app.use('/api/usuario', require('./routes/usuario.routes'));
app.use('/api/tematica', require('./routes/tematica.routes'));
app.use('/api/pregunta', require('./routes/pregunta.routes'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

//Levantar el servidor
app.listen(process.env.PORT, () => {
    console.log('Corriendo el servidor en el puerto ' + process.env.PORT);
});