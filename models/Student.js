const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('students', StudentSchema);