const encountersRouter = require('express').Router();
const getEncounters = require('../controllers/encounters');

encountersRouter.get('/', getEncounters);

module.exports = encountersRouter;
