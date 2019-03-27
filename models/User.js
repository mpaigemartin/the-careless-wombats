const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  username: {
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
      ref: "Event"
    }
  ]
});

UserSchema.methods.comparePassword = function comparePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', function saveHook(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  user.password = bcrypt.hashSync(user.password, parseInt(process.env.SALT))

  return next();
});

module.exports = User = mongoose.model("user", UserSchema);

