const article = require('../../models/article');
const category = require('../../models/category');
const mongoose = require('mongoose');
require('mongoose-pagination');

exports.getListBlog = function (req, res) {
    var keyword = req.query.keyword;
    var categoryId = req.query.categoryId;
    var fillterObject = {};
    var page = parseInt(req.query.page);
    var limit = 9;

    //fillter theo categoryID
    // if (typeof categoryId !== "undefined" && categoryId.length > 0) {
    //     fillterObject["category"] = mongoose.Types.ObjectId(categoryId);
    // }
    //fillter theo keyword
    if (typeof keyword !== "undefined" && keyword.length > 0) {
        fillterObject["$text"] = {
            $search: keyword
        }
    }

    article.find(fillterObject)
        .sort({ createAt : "desc"})
        .populate('category')
        .paginate(
            page,
            limit,
            async function (err, data, totalItem) {
        var cate = await category.find();
        res.render('user/page/blog', {
            list1: data,
            cate: cate,
            currentCategoryID: categoryId,
            totalItem: totalItem,
            totalPage: Math.ceil(totalItem/limit),
            page: page,
            limit: limit,
            currentKeyword: keyword
        })
    })
}