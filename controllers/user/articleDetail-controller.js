const article = require('../../models/article');
const category = require('../../models/category');
const mongoose = require('mongoose');


exports.article_detail = function (req, res) {
    var categoryID = req.query.categoryID;
    article.findById(req.query.id).populate('category').exec(async function (err, data) {
        article.find({'category': categoryID})
            .sort({createAt: "desc"})
            .populate('category')
            .exec(async function (err, list) {
                var array = [];
                if (req.session.recentView) {
                    array = req.session.recentView;
                }
                var flag = false;
                for (let i = 0; i < array.length; i++) {
                    if (array[i]._id == data._id){
                        flag = true;
                    }
                }
                if (!flag) {
                    array.push(data);
                }
                req.session.recentView = array;
                res.render('user/article-userdisplay/articles_detail', {
                    item: data,
                    list: list,
                    recentView: array
                });
            });
    })
}