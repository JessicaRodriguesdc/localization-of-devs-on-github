const { Router } = require('express');
const DevCotroller = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

routes.get('/devs',DevCotroller.index)
routes.post('/devs',DevCotroller.store);

routes.get('/search',SearchController.index);

module.exports = routes;
