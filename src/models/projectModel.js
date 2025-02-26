const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel'); // Importa o modelo de usuário

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('pending', 'in_progress', 'completed'),
    defaultValue: 'pending',
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User, // Relacionamento com a tabela de usuários
      key: 'id',
    },
  },
});

// Relacionamento: Um projeto pertence a um usuário
Project.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = Project;