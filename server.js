require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect("mongodb://localhost/nightOwl", { useNewUrlParser: true });

require("./routes/apiRoutes")(app);

app.listen(PORT, function() {
  console.log(
    `You are now listening to your favorite pirate radio station, Port ${PORT}! Sail away, mateys!`
  );
});
