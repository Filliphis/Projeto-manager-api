const Project = require('../models/projectModel');
const Task = require('../models/taskModel');

// Criar um novo projeto
exports.createProject = async (req, res) => {
  try {
    const { name, description, userId } = req.body;
    const project = await Project.create({ name, description, userId });
    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Listar todos os projetos de um usuário
exports.getUserProjects = async (req, res) => {
  try {
    const { userId } = req.params;
    const projects = await Project.findAll({ where: { userId } });
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um projeto
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, status } = req.body;

    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    project.name = name || project.name;
    project.description = description || project.description;
    project.status = status || project.status;

    await project.save();
    res.status(200).json({ message: 'Project updated successfully', project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Excluir um projeto
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    await project.destroy();
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Listar todas as tarefas de um projeto
exports.getProjectTasks = async (req, res) => {
  try {
    const { projectId } = req.params;
    const tasks = await Task.findAll({ where: { projectId } });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};