const express = require('express');
const route = express.Router();
const articleDetailController = require('../../controllers/user/articleDetail-controller')

route.get('/detail',articleDetailController.article_detail);

module.exports = route;