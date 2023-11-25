const { Schema, model } = require("mongoose");

const PropertiesSchema = new Schema({
  "property": {
    "image": {
      type: String,
      required: true,
    },
    "title": {
      type: String,
      required: true,
    },
    "location": {
      type: String,
      required: true,
    },
    "details": {
      type: String,
      required: true,
    },
    "PriceRange": {
      type: String,
      required: true,
    },
  },
  "agent": {
    "name": {
      type: String,
      required: true,
    },
    "image": {
      type: String,
      required: true,
    },
    "email": {
      type: String,
      required: true,
    },
  },
  "status": {
    type: String,
    default: "pending",
  },
});


const Propertie = model('Propertie', PropertiesSchema)
module.exports = Propertie