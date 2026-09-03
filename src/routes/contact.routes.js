const { Router } = require('express');
const { handleContactForm } = require('../controllers/contact.controller');

const router = Router();

// Definición de la ruta POST para /
router.post('/', handleContactForm);

module.exports = router;