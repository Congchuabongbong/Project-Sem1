const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter your article name.'],
            trim: true
        },
        author: {
            type: String, default: 'Our Team',
            required: true
        },
        category: {
            required: [true, 'Please select your article categories.'],
            type: mongoose.Schema.Types.ObjectId,
            ref: 'categories'
        },
        thumnail: {
            type: String,
            trim: true
        },
        articleDescription: {
            type: String,
            required: true,
            maxlength: 1000
        },
        articleDetail: {
            type: String,
            trim: [true, 'Please enter your article content.'],
            required: [true, 'Article detail can not be blank.']
        },
        createAt: {
            type: Date
        },
        updateAtttt: {
            type: Date
        }
    }
)
//index cac truong muon chuan bi cho viec tim kiem thong tin, trong th nay la name va description
articleSchema.index({name: 'text', category: 'text'});
module.exports = mongoose.model('article', articleSchema);