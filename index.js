require('dotenv').config(); // Carga las variables del archivo .env al iniciar
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor de MYSAV-BACKEND escuchando en http://localhost:${PORT}`);
});