const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  propertyId: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  reviewStar: {
    type: Number,
    required: true,
  },
  reviewDescription: {
    type: String,
    required: true,
  },
  reviewTime: {
    type: Date,
    default: Date.now,
  },
  propertyTitle: {
    type: String,
    required: true,
  },
  reviewerName: {
    type: String,
    required: true,
  },
  reviewerImage: {
    type: String,
    required: true,
  },
  agentName: {
    type: String,
    required: true,
  },
});

const Review = model("Review", reviewSchema);
module.exports = Review;
