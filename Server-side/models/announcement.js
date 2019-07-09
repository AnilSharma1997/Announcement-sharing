const mongoose = require('mongoose');

const Announcement = mongoose.model('Announcement', {
    announcement: { type: String, required: true },
    created_date: { type: Date },
    modified_date: { type: Date }
});

module.exports = { Announcement };