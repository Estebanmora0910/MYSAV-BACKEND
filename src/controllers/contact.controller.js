const contactService = require('../services/contact.service');

const handleContactForm = async (req, res) => {
  try {
    const { name, email, phone, serviceType, message } = req.body;

    // 1. Validar que vengan los datos obligatorios
    if (!name || !email || !phone || !serviceType || !message) {
      return res.status(400).json({ 
        status: 'error', 
        message: 'Todos los campos (name, email, phone, serviceType, message) son obligatorios.' 
      });
    }

    // 2. Opcional: Validar que serviceType sea uno de los valores permitidos
    const allowedServices = ['Soporte Técnico', 'Software'];
    if (!allowedServices.includes(serviceType)) {
      return res.status(400).json({
        status: 'error',
        message: 'El tipo de servicio debe ser "Soporte Técnico" o "Software".'
      });
    }

    // 2. Llamar a la capa de servicio para enviar el correo
    await contactService.sendContactEmail({ name, email, phone, serviceType, message });

    // 3. Responder al cliente que todo salió bien
    return res.status(200).json({ 
      status: 'success', 
      message: 'Mensaje enviado correctamente.' 
    });

  } catch (error) {
    console.error('Error en handleContactForm:', error);
    
    // Responder con error interno en caso de falla
    return res.status(500).json({ 
      status: 'error', 
      message: 'Ocurrió un error al enviar el mensaje. Inténtalo más tarde.' 
    });
  }
};

module.exports = { handleContactForm };