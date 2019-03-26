const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Events"
    }
  ]
});

module.exports = User = mongoose.model("user", UserSchema);

