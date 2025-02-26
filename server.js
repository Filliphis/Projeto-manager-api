const express = require('express');
require('dotenv').config();
const db = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const projectRoutes = require('./src/routes/projectRoutes');
const taskRoutes = require('./src/routes/taskRoutes');

const app = express();
app.use(express.json());

// Configuração das rotas
app.use('/auth', authRoutes);
app.use('/projects', projectRoutes);
app.use('/tasks', taskRoutes);

// Exporta o app para uso nos testes
module.exports = app;

// Inicia o servidor apenas se o arquivo for executado diretamente
if (require.main === module) {
  const PORT = process.env.PORT || 3003;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}