const express = require('express');
const route = express.Router();
const blogController = require('../../controllers/user/blog-controller')

route.get('/blog',blogController.getListBlog);

module.exports = route;