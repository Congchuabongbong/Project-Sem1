const article = require('../../models/article');
const category = require('../../models/category');
const mongoose = require('mongoose');


exports.getList_Aticles = function (req, res) {
    var curentCategoryID = req.query.categoryID;
    article.find().populate('category').sort({createAt: 'desc'}).exec(async function (err, data) {
        res.render('user/article-userdisplay/articles_list', {
            list: data,
            curentCategoryID:curentCategoryID
        });
    })
}
