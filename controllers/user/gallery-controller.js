const Gallery = require('../../models/gallery.js');
require('mongoose-pagination');

exports.getlist_gallery = function (req,res) {
    var page = parseInt(req.query.page);
    var limit = 9;
    Gallery.find()
        .paginate(
            page,
            limit,
            async function (err, data, totalItem) {
        //render view kèm theo dữ liệu
        res.render('user/page/gallery', {
            list: data,
            totalItem: totalItem,
            totalPage: Math.ceil(totalItem/limit),
            page: page,
            limit: limit
        });
    });
}
