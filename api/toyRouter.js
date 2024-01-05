
const express = require('express');

var toyRouter = express.Router();

var toyController = require('./toyController');

toyRouter.get('/', toyController.getAllToys);
toyRouter.post('/', toyController.createToy);
toyRouter.get('/:id', toyController.getToyById);
toyRouter.put('/:id', toyController.updateToy);
toyRouter.delete('/:id', toyController.deleteToy);

module.exports = toyRouter;