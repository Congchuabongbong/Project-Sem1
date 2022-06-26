const Category = require('../../models/category');

exports.getList = function (req, resp){
    Category.find().then(async function (data){
        resp.render('admin/category/list.ejs', {
            list: data,// dữ liệu từ db
            message: await req.consumeFlash('message')
        });
    });
}

exports.edit = function (req, resp){
    Category.findById(req.query.id).then(function (data){
        resp.render('admin/category/edit.ejs', {
            item: data
        });
    });
}

exports.update = function (req, resp){
    Category.findByIdAndUpdate(req.query.id, req.body).then(function (data){
        resp.redirect('/admin/categories');
    });
}

exports.delete = function (req, resp){
    Category.findById(req.query.id).then(function (data){
        resp.render('admin/category/delete.ejs', {
            item: data
        });
    });
}

exports.doDelete = function (req, resp){
    Category.findByIdAndDelete(req.query.id).then(function (data){
        resp.redirect('/admin/categories');
    });
}

exports.create = function (req, resp){
    resp.render('admin/category/form.ejs');
}

exports.store = function (req, resp){
    const obj = new Category(req.body);
    const error = obj.validateSync();
    if(error && error.errors){
        resp.render('admin/category/form.ejs', {
            item: obj,
            errors: error.errors
        });
    }else {
        obj.save().then(async function () {
            await req.flash('message', 'Create success.');
            resp.redirect('/admin/categories');
        })
    }
}
