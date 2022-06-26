const Gallery = require('../../models/gallery.js');
const Category = require('../../models/category.js');
const mongoose = require('mongoose');
require('mongoose-pagination');

exports.getlist = function (req,res) {
    var page = parseInt(req.query.page);
    var limit = 5;
    Gallery.find()
        .paginate(
            page,
            limit,
            async function (err, data, totalItem) {
        //render view kèm theo dữ liệu
        res.render('admin/gallery/list', {
            list: data,
            message: await req.consumeFlash('message'),// lấy message từ trong flash
            totalItem: totalItem,
            totalPage: Math.ceil(totalItem/limit),
            page: page,
            limit: limit
        });
    });
}

exports.detail = function (req,res) {
    Gallery.findById(req.query.id).then(function (data) {
        //render view kèm theo dữ liệu
        res.render('admin/gallery/detail', {
            item: data
        });
    });
}

exports.getEdit = function (req,res) {
    Gallery.findById(req.query.id).then(function (data) {
        //render view kèm theo dữ liệu
        res.render('admin/gallery/edit', {
            item: data
        });
    });
}

exports.postEdit = function (req,res) {
    Gallery.findByIdAndUpdate(req.query.id, req.body).then(function (data) {
        //render view kèm theo dữ liệu
        res.redirect('/admin/gallery');
    });
}

exports.getDelete = function (req,res) {
    Gallery.findById(req.query.id).then(function (data) {
        //render view kèm theo dữ liệu
        res.render('admin/gallery/delete', {
            item: data
        });
    });
}

exports.postDelete = function (req,res) {
    Gallery.findByIdAndDelete(req.query.id).then(function (data) {
        res.redirect('/admin/gallery');
    });
}

exports.getCreate = function (req,res) {
    res.render('admin/gallery/form')
}

// exports.postCreate = function (req,res) {
//     const newGallery = new Gallery (req.body);
//     newGallery.save().then(function () {
//         res.redirect('/admin/gallery')
//     })
// }

exports.postCreate = function (req, resp){
    const obj = new Gallery(req.body);
    const error = obj.validateSync(); // validate dữ liệu được gửi lên từ form.
    obj.createAt = Date.now();
    obj.updateAt = Date.now();
    if(error && error.errors){ // trong trường hợp có lỗi
        // thì trả về form kèm thông tin lỗi và thông tin dữ liệu vừa được gửi lên.
        resp.render('admin/gallery/form', {
            item: obj, // thông tin gửi lên.
            errors: error.errors // thông tin lỗi.
        });
    }else {
        // lưu thành công thì hiển thị message.
        obj.save().then(async function () {
            await req.flash('message', 'New successfully created!');
            resp.redirect('/admin/gallery'); // chuyển hướng người dùng về trang danh sách.
        })
    }
}
