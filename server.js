require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nightOwl", { useNewUrlParser: true });

require("./routes/apiRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.get("*", function (req, res) {
    res.sendFile(__dirname + './client/build/index.html');
  });
}

app.listen(PORT, function() {
  console.log(
    `You are now listening to your favorite pirate radio station, Port ${PORT}! Sail away, mateys!`
  );
});
