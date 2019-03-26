const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
<<<<<<< HEAD:models/Events.js
  restaurant_id: {
    type: Schema.Type.ObjectId,
    ref: "Restaurant"
  },
=======
  restaurant_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Restaurant"
    }
  ],
>>>>>>> 6cc742cfbece2cd6bbb6fe14f88a26a45b032eef:models/Event.js
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
