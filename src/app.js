const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact.routes');

const app = express();

// Middlewares
app.use(cors());           // Permite peticiones desde otros dominios (como tu frontend)
app.use(express.json());   // Permite que Express lea peticiones en formato JSON

// Registro de rutas con su prefijo
app.use('/api/contact', contactRoutes);

module.exports = app;