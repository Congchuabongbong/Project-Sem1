const article = require('../../models/article');
const category = require('../../models/category');
const mongoose = require('mongoose');
require('mongoose-pagination');

//lay thong tin tat cac bai viet
exports.getList = function (req, res) {
    var keyword = req.query.keyword;
    var categoryId = req.query.categoryId;
    var fillterObject = {};
    var page = parseInt(req.query.page);
    var limit = 5;
    //fillter theo categoryID
    if (typeof categoryId !== "undefined" && categoryId.length > 0) {
        fillterObject["category"] = mongoose.Types.ObjectId(categoryId);
    }
    //fillter theo keyword
    if (typeof keyword !== "undefined" && keyword.length > 0) {
        fillterObject["$text"] = {
            $search: keyword
        }
    }

    article.find(fillterObject)
        .populate('category')
        .sort({ createAt : "desc"})
        .paginate(
            page,
            limit,
            async function (err, data, totalItem) {
        var cate = await category.find();
        res.render('admin/article/list', {
            message: await req.consumeFlash('message'),
            currentKeyword: keyword,
            list1: data,
            cate: cate,
            currentCategoryID: categoryId,
            totalItem: totalItem,
            totalPage: Math.ceil(totalItem/limit),
            page: page,
            limit: limit
        })
    })
}
//them moi bai viet
exports.create = function (req, res) {
    category.find().then(function (data) {
        res.render('admin/article/form', {
            cateList: data
        });
    })
}

exports.store = function (req, res) {
    const newArticle = new article(req.body);
    //tu dong fill gia tri date cho thoi diem req, truoc khi save and then
    newArticle.updateAtttt = Date.now();
    newArticle.createAt = Date.now();
    newArticle.category = mongoose.Types.ObjectId(req.body.categoryID)
    //tra ve thong tin loi
    const error = newArticle.validateSync();
    if (error && error.errors) {
        category.find().then(function (cateList) {
            res.render('admin/article/form', {
                item: newArticle,
                errors: error.errors,
                cateList: cateList
            })
        })
    } else {
        newArticle.save().then(async function () {
            await req.flash('message', 'Your article creation is complete!');
            res.redirect('/admin/article')
        })
    }
}
//xoa bai viet
exports.delete = function (req, res) {
    article.findById(req.query.id).populate('category').exec(async function (err, data) {
        res.render('admin/article/delete', {
            item: data,
        });
    })
}

exports.doDelete = function (req, res) {
    article.findByIdAndDelete(req.query.id).then(function (data) {
        res.redirect('/admin/article');
    })
}
//sua bai viet
exports.edit = function (req, res) {
    var categoryId1 = req.query.categoryId;
    article.findById(req.query.id).populate('category').exec(async function (err, data) {
        var cate = await category.find();
        res.render('admin/article/edit', {
            item: data,
            cate: cate,
            currentCategoryID: categoryId1
        });
    })
}

exports.update = function (req, res) {
    article.findByIdAndUpdate(req.query.id, req.body).then(function (data) {
        res.redirect('/admin/article');
    })
}
//lay thong tin chi tiet bai viet
exports.getDetail = function (req, res) {
    article.findById(req.query.id).populate('category').exec(async function (err, data) {
        res.render('admin/article/detail', {
            item: data
        });
    })
}
