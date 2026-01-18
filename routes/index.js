const routes = require('express').Router();
const lesson01Controller = require('../controllers/lesson01');

routes.get('/', lesson01Controller.reeceRoute);
routes.get('/cass', lesson01Controller.cassRoute);

module.exports = routes;