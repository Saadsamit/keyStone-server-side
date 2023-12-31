const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "client",
  },
  status: {
    type: String,
    required: true,
    default: "none",
  },
});
const User = model("User", userSchema);
module.exports = User;
