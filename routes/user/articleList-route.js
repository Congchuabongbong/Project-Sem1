const express = require('express');
const route = express.Router();
const articleListController = require('../../controllers/user/articleList-controller')

route.get('/list', articleListController.getList_Aticles);

module.exports = route;