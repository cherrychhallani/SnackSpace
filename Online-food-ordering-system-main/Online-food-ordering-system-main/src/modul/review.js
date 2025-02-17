const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    dishId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish',
        required: false // Optional: If reviews are tied to specific dishes
    },
    reviewText: {
        type: String,
        required: true,
        maxlength: 50 // Enforce 50-word limit
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
