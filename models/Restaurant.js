const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  neighborhood: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    trim: true
  },
  tagline: {
    type: String,
    trim: true
  },
  lat: {
    type: Number
  },
  lng: {
    type: Number
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
  ]
});
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
