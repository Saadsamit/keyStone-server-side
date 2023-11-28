const { Schema, model } = require("mongoose");

const PropertyBoughtSchema = new Schema({
  wishlistId: {
    type: String,
    required: true,
  },
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
  offerAmount: {
    type: Number,
    required: true,
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
    default: "pending",
  },
  userEmail: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
    required: true,
  },
  transactionId:{
    type: String
  }
});

const PropertyBought = model("PropertyBought", PropertyBoughtSchema);

module.exports = PropertyBought;
