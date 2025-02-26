const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Project = require('./projectModel'); // Importa o modelo de projeto

const Task = sequelize.define('Task', {
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
  dueDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Project, // Relacionamento com a tabela de projetos
      key: 'id',
    },
  },
});

// Relacionamento: Uma tarefa pertence a um projeto
Task.belongsTo(Project, { foreignKey: 'projectId', as: 'project' });

module.exports = Task;