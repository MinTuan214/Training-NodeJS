const express = require('express');
const route = express.Router();

const newsController = require('../app/controllers/NewsController');

route.get('/detail', newsController.detail);
route.get('/', newsController.index);

module.exports = route;
