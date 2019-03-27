const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
<<<<<<< HEAD
  restaurant_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Restaurant"
    }
  ],
=======
>>>>>>> ac5fce32b13086b2128e144da8a83cd6958d165c
  category: [
    {
      type: Array,
      trim: true
    }
  ],
  describes: {
    type: String,
    trim: true
  },
  day: [
    {
      type: Array,
      trim: true
    }
  ],
  isRecurring: {
    type: Boolean
  },
  time: {
    type: String,
    trim: true
  }
});
const Event = mongoose.model("Events", EventSchema);

module.exports = Event;
