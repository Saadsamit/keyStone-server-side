const { Schema, model } = require("mongoose");

const wishlistSchema = new Schema({
  propertyId: {
    type: String,
    required: true,
  },
  property: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    PriceRange: {
      type: String,
      required: true,
    },
  },
  agent: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  status: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userName:  {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
    required: true,
  },
});

const Wishlist = model("Wishlist", wishlistSchema);
module.exports = Wishlist;
