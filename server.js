const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect('mongodb://localhost/', { useNewUrlParser: true });

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);


app.listen(PORT, function() {
    console.log(`You are now listening to your favortie pirate radio station, Port ${PORT}! Sail away, mateys!`)
})