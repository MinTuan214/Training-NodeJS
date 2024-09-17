const express = require('express');
const route = express.Router();

const categoryController = require('../app/controllers/CategoriesController');

route.get('/', categoryController.index);

module.exports = route;
