const User = require("../models/User");
const Restaurant = require("../models/Restaurant");
const Event = require("../models/Event");
const jwt = require("jsonwebtoken");

module.exports = function(app) {
  // Restaurant Model Routes
  // Get Route for viewing the restaurants

  app.get("/test", function(req, req) {
    console.log("test");
  });

  app.get("/api/restaurant", function(req, res) {
    Restaurant.find({})
      .populate("events")
      .then(function(dbRestaurant) {
        res.json(dbRestaurant);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.get("/api/restaurant/:name", function(req, res) {
    Restaurant.find(
      { name: req.params.name })
      .populate("events")
      .then(function(dbRestaurant) {
        res.send(dbRestaurant);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.get("/api/restaurant/area/:neighborhood", function(req, res) {
    Restaurant.find({ neighborhood: req.params.neighborhood })
      .populate("Event")
      .then(function(dbRestaurant) {
        res.send(dbRestaurant);
      })
      .catch(function(err) {
        res.json(err);
      });
  });


  app.post('/api/restaurant/:id', function(req, res) {
    Restaurant.create(req.body)
      .then(function(dbRestaurant) {
        res.json(dbRestaurant);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Event Model Route
  // Get Route for viewing the Events

  app.get("/api/event", function(req, res) {
    Event.find({})
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.post("/api/restaurant/:restaurantId/events", function(req, res) {
    Event.create(req.body)
      .then(function(dbEvent) {
        console.log(dbEvent);
        return Restaurant.findOneAndUpdate({ _id: req.params.restaurantId }, { $push: { events: dbEvent._id } }, { new: true });
      })
      .then(function (restaurant) {
        console.log("test restaurant", restaurant);
        res.json({ success: true });
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // User Model Routes
  // Get Route to get user information (temporarily so that we can test)
  // and which restaurants they are saving

  app.get("/api/user", function(req, res) {
    User.find({})
      .populate("Event")
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.get("/api/user/:id", function(req, res) {
    User.find(req.body.id)
      .populate("Event")
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.post("/api/user/:id", function(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { favorites: req.body } },
      { new: true }
    )
      .then(function(userData) {
        res.json(userData);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Protected Routes

  app.post("/api/authenticate", function(req, res) {
    const { username, password } = req.body;
    User.findOne({ username: username })
      .then(function(user) {
        const isValidPass = user.comparePassword(password);
        console.log(isValidPass);
        if (isValidPass) {
          console.log("isvalid");
          console.log(user.id);
          console.log(user);
          const token = jwt.sign({ data: user._id }, process.env.SECRET_KEY);
          console.log(token);
          res.json({
            id: user._id,
            username: user.username,
            token: token
          });
        } else {
          res.status(401).json({ message: "Incorrect username or password." });
        }
      })
      .catch(function(err) {
        res.status(401).json({ err: err });
      });
  });

  app.post("/api/signup", function(req, res) {
    const userData = {
      username: req.body.username,
      password: req.body.password
    };

    User.create(userData).then(function(dbUser) {
      console.log(dbUser);
      res.json({ success: true });
    });
  });

  app.post("/api/user", function(req, res) {
    const newUser = {
      email: req.body.email,
      password: req.body.password
    };
    User.create(newUser)
      .then(function(userData) {
        res.json(userData);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
