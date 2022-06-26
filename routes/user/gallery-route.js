const express = require('express');
const route = express.Router();
const usergalleryController = require("../../controllers/user/gallery-controller");

route.get('/', usergalleryController.getlist_gallery);
module.exports = route;
