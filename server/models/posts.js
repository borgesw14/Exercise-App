const {Schema, model } = require('mongoose');

const postSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    workoutType: {
        type: String,
        default: "Cardio"
    },
    description: {
        type: String,
        required: true
    }
})

const Posts = model('posts', postSchema);

module.exports = Posts