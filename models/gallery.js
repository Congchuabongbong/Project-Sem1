const mongoose = require('mongoose');
const gallerySchema = new mongoose.Schema({
    category: { // liên quan bảng nào thì lấy tên theo bảng đó
        // required: [true, 'Please enter your article categories.'],
        type: mongoose.Schema.Types.ObjectId, // dùng object id là khoá ngoại từ bảng category
        ref: 'categories' // liên quan đến tên bảng nằm trong khai báo model.
    },
    name: {
        type: String,
        required: [true, 'Please enter a title for the photo'],
    },
    description: {
        type: String,
        required: [true, 'Please enter a description for the photo'],
        trim: true
    },
    thumbnail: String,
    createAt: {
        type: Date
    },
    updateAt: {
        type: Date
    }
});

gallerySchema.index({name: 'text', description: 'text'});
module.exports = mongoose.model('gallery', gallerySchema);