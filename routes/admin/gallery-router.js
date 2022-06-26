const express = require('express');
const route = express.Router();
const galleryController = require("../../controllers/admin/gallery-controller");

route.get('/', galleryController.getlist);

route.get('/detail', galleryController.detail);

route.get('/edit', galleryController.getEdit); // trả về form kèm thông tin sản phẩm cũ.

route.post('/edit', galleryController.postEdit); // update thông tin sản phẩm mới.

route.get('/delete', galleryController.getDelete);

route.post('/delete', galleryController.postDelete);
// trả về form
route.get('/create', galleryController.getCreate);
// xử lý khi submit form, lưu vào database và hiển thị thông báo
route.post('/create', galleryController.postCreate);



module.exports = route;
