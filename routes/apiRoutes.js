const User = require("../models/User");
const Restaurant = require("../models/Restaurant");
const Event = require("../models/Event");

module.exports = function(app) {
  
  // User Model Routes
  // Get Route to get user information (temporarily so that we can test)
  // and which restaurants they are saving
  app.get("/api/user", function(req, res) {
    User.find({})
      .populate("favorites")
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.post("/api/user", function(req, res) {
    let id = req.params.id;

    User.find(id)
      .populate("favorites")
      .then(function(userData) {
        res.json(userData);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Event Model Route
  // Get Route for viewing the Events
  app.get("/api/event", function(req, res) {
    Event.find()
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Restaurant Model Routes
  // Get Route for viewing the restaurants
  app.get("/api/restaurant", function(req, res) {
    Restaurant.find({})
      .then(function(dbRestaurant) {
        res.json(dbRestaurant);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

};
