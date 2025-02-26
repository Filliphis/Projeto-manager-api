const Task = require('../models/taskModel');

// Criar uma nova tarefa
exports.createTask = async (req, res) => {
  try {
    const { name, description, projectId, dueDate } = req.body;
    const task = await Task.create({ name, description, projectId, dueDate });
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Listar todas as tarefas de um projeto
exports.getTasksByProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const tasks = await Task.findAll({ where: { projectId } });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar uma tarefa
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, status, dueDate } = req.body;

    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.name = name || task.name;
    task.description = description || task.description;
    task.status = status || task.status;
    task.dueDate = dueDate || task.dueDate;

    await task.save();
    res.status(200).json({ message: 'Task updated successfully', task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Excluir uma tarefa
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.destroy();
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};