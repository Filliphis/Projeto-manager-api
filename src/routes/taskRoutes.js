const express = require('express');
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware de autenticação

const router = express.Router();

// Rotas de tarefa
router.post('/', authMiddleware.authenticate, taskController.createTask);
router.get('/project/:projectId', authMiddleware.authenticate, taskController.getTasksByProject);
router.put('/:id', authMiddleware.authenticate, taskController.updateTask);
router.delete('/:id', authMiddleware.authenticate, taskController.deleteTask);

module.exports = router;