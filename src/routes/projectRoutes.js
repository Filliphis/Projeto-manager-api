const express = require('express');
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware de autenticação

const router = express.Router();

// Rotas de projeto
router.post('/', authMiddleware.authenticate, projectController.createProject);
router.get('/user/:userId', authMiddleware.authenticate, projectController.getUserProjects);
router.put('/:id', authMiddleware.authenticate, projectController.updateProject);
router.delete('/:id', authMiddleware.authenticate, projectController.deleteProject);
router.get('/:projectId/tasks', authMiddleware.authenticate, projectController.getProjectTasks);

module.exports = router;