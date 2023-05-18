const express = require('express');
const tasksController = require('./controllers/tasksController')
const tasksMiddleware = require('./middleware/tasksMiddleware')

const router = express.Router();

router.get('/tasks', tasksController.getAll);

router.post('/tasks',
tasksMiddleware.validadeBody, 
tasksController.createTask
);

router.delete('/tasks/:id', tasksController.deleteTask);

router.put('/tasks/:id', 
tasksMiddleware.validadeBody,
tasksController.updateTask
);

module.exports = router;