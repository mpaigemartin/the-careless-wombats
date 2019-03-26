const User = require("../models/User.js");
const Restaurant = require("../models/Restaurant");

module.exports = function(app) {
  
  // User Model Routes
  // Get Route to get user information (temporarily so that we can test)
  // and which restaurants they are saving
  app.get("/api/user", function(req, res) {
    User.find({_id: req.id})
      .populate("Event")
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.post("/api/user", function(req, res) {
    // const events = {
    //     name: req.name,
    //     neighborhood: req.neighborhood,
    //     address: req.address
    // };

    User.find({_id: req.id})
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
    Restaurant.find()
      .populate("Event")
      .then(function(dbRestaurant) {
        res.json(dbRestaurant);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Post Route for saving a restaurant
//   app.post("/api/restaurant", function(req, res) {
//     const restaurant = {
//         name: req.name,
//         neighborhood: req.neighborhood,
//         address: req.address
//     };

//     Restaurant.create(restaurant)
//       .then(function(userData) {
//         res.json(userData);
//       })
//       .catch(function(err) {
//         res.json(err);
//       });
//   });
};
