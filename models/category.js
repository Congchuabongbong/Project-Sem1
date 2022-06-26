const mongoose = require('mongoose');

module.exports = mongoose.model('categories', {
    name: {
        type: String,
        required: [true, 'Please enter your article categories.'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please enter a description for the category.'],
        trim: true
    }
});