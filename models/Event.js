const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
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
