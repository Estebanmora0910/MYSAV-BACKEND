const transporter = require('../config/mailer');

const sendContactEmail = async ({ name, email, phone, serviceType, message }) => {
  // Configuración del contenido del correo
  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // Remitente
    replyTo: email,                              // Permite responder directamente al cliente
    to: process.env.EMAIL_RECEIVER,              // Destinatario (tu empresa)
    subject: `Nuevo mensaje de contacto de ${name}`,
    html: `
      <h2>Nuevo mensaje desde el formulario web</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Correo del cliente:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Tipo de Servicio Solicitado:</strong> ${serviceType}</p>
      <hr />
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  };

  // Envío asíncrono del correo
  return await transporter.sendMail(mailOptions);
};

module.exports = { sendContactEmail };