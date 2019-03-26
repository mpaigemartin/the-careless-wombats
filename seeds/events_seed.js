const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nightOwl");


const events = [
    {
        name:"Dirty South Trivia",
        restaurant_id:,
        category: ["Trivia"],
        describes: "Our goal is to create a fun and competitive environment, not to stump you with ridiculously hard questions.",
        day: ["Monday"],
        isRecuring: true,
        time: "8:30"
    },
    {
        name:"TWOSDAY",
        restaurant_id:,
        category: ["Unique"],
        describes: "Ride in on your motorcycle and 1/2 off the nightly food special!",
        day: ["Tuesday"],
        isRecuring: true,
        time: "All Day"
    },
    {
        name:"",
        restaurant_id:,
        category: [""],
        describes: "",
        day: "",
        isRecuring:,
        time: ""
    },
    {
        name:"Drunk Bingo",
        restaurant_id:,
        category: ["Bingo"],
        describes: "Come in and play classic bingo but with a twist, with the chance to win great prizes.",
        day: ["Thursday"],
        isRecuring: true, 
        time: "10"
    },
    {
        name:"Drink & Draw",
        restaurant_id:,
        category: ["Unique"],
        describes: "Come join us the 1st Monday every month for a casual drink and draw hosted by our own JJ Allen.",
        day: ["Monday"],
        isRecuring: true,
        time: "8"
    },
    {
        name:"Nerd Trivia",
        restaurant_id:,
        category: ["Trivia"],
        describes: "Join us. This is the trivia you've been looking for. It's not a trap. ",
        day: ["Tuesday"],
        isRecuring: true,
        time: "8"
    },
    {
        name:"Half Price Oysters",
        restaurant_id:,
        category: ["Food Specials", "Happy Hour"],
        describes: "Enjoy 1/2 off oysters on the Raw Bar Menu",
        day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        isRecuring: true,
        time: "5-7"
    },
    {
        name:"$2 Highlife",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "Enjoy $2 16oz cans of Miller Highlife.",
        day: "Monday",
        isRecuring: true,
        time: "All Day"
    },
    {
        name:"$5 Tecate & Tequila",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "$5 for a combo of an El Jimador shot and a 16oz can of Tecate.",
        day: "Tuesday",
        isRecuring: true,
        time: "All Day"
    },
    {
        name:"$3 Drafts and Well Drinks",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "Enjoy a selection of drafts and well cocktails for only $3!",
        day: "Wednesday",
        isRecuring: true,
        time: "All Day"
    },
    {
        name:"$5 Local Draft Beers",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "Get Georgia drafts for $5",
        day: "Thursday",
        isRecuring:true,
        time: "All Day"
    },
    {
        name:"Half Price Apps",
        restaurant_id:,
        category: ["Food Specials", "Happy Hour"],
        describes: "Get 1/2 off apps after six pm.",
        day: "Thursday",
        isRecuring:true,
        time: "6-11"
    },
    {
        name:"Trivia",
        restaurant_id:(cor),
        category: ["Trivia"],
        describes: "Get your team together for a chance to win house cash!",
        day: "Wednesday",
        isRecuring: true,
        time: "8"
    },
    {
        name:"Sound Check Bingo ",
        restaurant_id:,
        category: ["Bingo"],
        describes: "Decipher songas to fill out your bingo card!",
        day: "Thursday",
        isRecuring:true,
        time: "7:30"
    },
    {
        name:"Trivia",
        restaurant_id:(mel),
        category: ["Trivia"],
        describes: "Get your team together for a chance to win house cash!",
        day: "Tuesday",
        isRecuring:true,
        time: "7:30"
    },
    {
        name:"Trivia",
        restaurant_id:(bur),
        category: ["Trivia"],
        describes: "Get your team together for a chance to win house cash!",
        day: "Thursday",
        isRecuring:true,
        time: "8"
    },
    {
        name:"Trivia",
        restaurant_id:,
        category: ["Trivia"],
        describes: "Get your team together for a chance to win house cash!",
        day: "Monday",
        isRecuring:true,
        time: "8"
    },
    {
        name:"Wings + Beer $10",
        restaurant_id:,
        category: ["Food Specials", "Drink Specials"],
        describes: "Join us every Tuesday and get 8 Springer Mountain Chicken Wings and a 12oz house beer for $10",
        day: "Tuesday",
        isRecuring:true,
        time: "All Day"
    },
    {
        name:"Burger + Beer $11",
        restaurant_id:,
        category: ["Food Specials", "Drink Specials"],
        describes: "Enjoy a juicy Brasstown Farm huckburger, Springer Mountain Chicken burger, or our home-made smoked beet burger – add cheese if you’d like – along with a regular side, and choose a 12 oz. Twain’s ale to help wash it down.",
        day: "Wednesday",
        isRecuring:true,
        time: "All Day"
    },
    {
        name:"Whiskey Wednesday",
        restaurant_id:,
        category: ["Drink Specials", "Happy Hour"],
        describes: "All whiskey cocktails are only $5",
        day: "Wednesday",
        isRecuring: true,
        time: "5"
    },

    {
        name:"Bottomless Mimosas",
        restaurant_id:,
        category: ["Brunch", "Drink Specials"],
        describes: "Brunch wouldn’t be the same without Bottomless Mimosas. Luckily, the brunch menu has you covered with both Bottomless Mimosas and Bloody Marys available for $15.",
        day: "Sunday",
        isRecuring:true,
        time: "11-2:30"
    },
    {
        name:"BOGO Ramen",
        restaurant_id:,
        category: ["Food Specials"],
        describes: "Buy one Ramen bowl and get another free!",
        day: "Monday",
        isRecuring:true,
        time: "All Day"
    },
    {
        name:"$5 Cocktails",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "Get all classic cocktails for only $5",
        day: "Thursday",
        isRecuring:true,
        time: "All Day"
    },
    {
        name:"Half Price Wine",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "Select glasses of wine are half priced all day long",
        day: "Monday",
        isRecuring:true,
        time: "All Day"
    },
    {
        name:"$3 Sangria",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "Enjoy yourself a glass of sangria from only $3!",
        day: "Tuesday",
        isRecuring:true,
        time: "All Day"
    },

    {
        name:"$3 Draft Beers",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "16oz draft beers are only $3 all day.",
        day: "Wednesday",
        isRecuring:true,
        time: "All Day"
    },
    {
        name:"Bottomless Sangria",
        restaurant_id:,
        category: ["Drink Specials", "Brunch"],
        describes: "Bottomless Sangria is $12 for Saturday brunch.",
        day: "Saturday",
        isRecuring:true,
        time: "12-5"
    },
    {
        name:"Bottomless Mimosas",
        restaurant_id:,
        category: ["Drink Specials", "Brunch"],
        describes: "Bottomless Mimosas are $12 for Sunday brunch.",
        day: "Sunday",
        isRecuring:true,
        time: "12-5"
    },
    {
        name:"Half Price Wine",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "All bottles of wine are half off for parties of five or fewer",
        day: "Monday",
        isRecuring:true,
        time: "All Day"
    },
    {
        name:"Trivia",
        restaurant_id:,
        category: ["Trivia"],
        describes: "Get your team together for a chance to win house cash!",
        day: "Tuesday",
        isRecuring:true,
        time: "7:30"
    },
    {
        name:"Wayback Wednesday",
        restaurant_id:,
        category: ["Unique"],
        describes: "Enjoy a free retro movie while you sip on your beer.",
        day: "Wednesday",
        isRecuring:true,
        time: "6:15"
    },
    {
        name:"Trivia",
        restaurant_id:,
        category: ["Trivia"],
        describes: "Get your team together for a chance to win house cash!",
        day: "Thursday",
        isRecuring:true,
        time: "6:30"
    },

    {
        name:"Trivia",
        restaurant_id:,
        category: ["Trivia"],
        describes: "Get your team together for a chance to win house cash!",
        day: "Thursday",
        isRecuring:true,
        time: "8"
    },
    {
        name:"Half Price Sake",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "Enjoy half priced sake bottles!",
        day: "Tuesday",
        isRecuring:true,
        time: "All Day"
    },

     {
        name:"Half Price Wine",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "Enjoy half priced wine bottles!",
        day: "Sunday",
        isRecuring:true,
        time: "All Day"
    }, {
        name:"Half Price Sushi",
        restaurant_id:,
        category: ["Happy Hour", "Food Specials"],
        describes: "Sushi rolls are 1/2 off",
        day: ["Monday","Wednesday"],
        isRecuring:true,
        time: "5-7"
    },
    {
        name:"Late Night Sushi",
        restaurant_id:,
        category: ["Food Specials", "Late Night"],
        describes: "Enjoy half priced sushi rolls after 11pm",
        day: ["Friday","Saturday"],
        isRecuring:true,
        time: "11-1"
    },
    {
        name:"$1 oysters",
        restaurant_id:,
        category: ["Happy Hour", "Food Specials"],
        describes: "Enjoy a selection of $1 oysters in the Oyster Bar",
        day: ["Monday","Tuesday", "Wednesday","Thursday","Friday"],
        isRecuring:true,
        time: "5-6"
    },
    {
        name:"$1 oysters",
        restaurant_id:,
        category: ["Happy Hour", "Food Specials"],
        describes: "Enjoy a selection of $1 oysters in the Oyster Bar",
        day: ["Saturday","Sunday"],
        isRecuring:true,
        time: "3-5"
    },
    {
        name:"Trivia",
        restaurant_id:,
        category: ["Trivia"],
        describes: "Get your team together for a chance to win house cash!",
        day: "Wednesday",
        isRecuring:true,
        time: "7:30"
    },
    {
        name:"Bottomless Belinis",
        restaurant_id:,
        category: ["Drink Specials", "Brunch"],
        describes: "Bottomless Belinis are only $10 for brunch!",
        day: "Sunday",
        isRecuring:true,
        time: "12:30-2:30"
    },
    {
        name:"Half Price Wine",
        restaurant_id:,
        category: ["Drink Specials", "Happy Hour"],
        describes: "Half priced wine bottles available all day",
        day: ["Monday", "Tuesday", "Wednesday","Thursday", "Friday"],
        isRecuring:true,
        time: "5-7"
    },
    {
        name:"$4 Pint Night",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "$4 pint is for our core and rotator beers",
        day: ["Tuesday", "Wednesday"],
        isRecuring:true,
        time: "4"
    },
    {
        name:"Boards and Brews",
        restaurant_id:,
        category: ["Unique"],
        describes: "Every Tuesday night, come join us and your board gaming friends.",
        day: "Tuesday",
        isRecuring:true,
        time: "4"
    },
    {
        name:"Throwback Thursday",
        restaurant_id:,
        category: ["Unique"],
        describes: "$12 gets you a brewery tour, a pint glass and 6 tastings.",
        day: "Thursday",
        isRecuring:true,
        time: "4"
    },
    {
        name:"Half Price Wine",
        restaurant_id:,
        category: ["Drink Specials", "Happy Hour"],
        describes: "Enjoy half priced wine bottles for happy hour!",
        day: "Monday",
        isRecuring:true,
        time: "4-12"
    },
    {
        name:"$5 Small Plates",
        restaurant_id:,
        category: ["Food Specials", "Happy Hour"],
        describes: "Select small plates are onyl $5",
        day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        isRecuring:true,
        time: "5-7"
    },
    {
        name:"$4 Mojitos",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "Enjoy $4 mojitos all day!",
        day: "Monday",
        isRecuring:true,
        time: "All Day"
    },
    {
        name:"Trivia",
        restaurant_id:,
        category: ["Trivia"],
        describes: "Get your team together for a chance to win house cash!",
        day: "Tuesday",
        isRecuring:true,
        time: "7:30"
    },
    {
        name:"$4 Martinis",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "Martinis are just $4 all day long",
        day: "Wednesday",
        isRecuring:true,
        time: "All Day"
    },

    {
        name:"$4 Margaritas",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "Margaritas are only $4 all day long",
        day: "Thursday",
        isRecuring:true,
        time: "All Day"
    },{
        name:"$4 Drafts & $3 Cans",
        restaurant_id:,
        category: ["Drink Specials"],
        describes: "Help FLIP clean out the beer basement! Drafts are $4, and craft cans are $3.",
        day: "Sunday",
        isRecuring:true,
        time: "All Day"
    },
    {
        name:"Burger + Beer $13",
        restaurant_id:,
        category: ["Food Specials", "Drink Specials"],
        describes: "Grab a double-stack burger, fries and beer for $13 on Tuesday nights.",
        day: "Tuesday",
        isRecuring:true,
        time: "6"
    },
    {
        name:"",
        restaurant_id:,
        category: [""],
        describes: "",
        day: "",
        isRecuring:true,
        time: ""
    },
    {
        name:"",
        restaurant_id:,
        category: [""],
        describes: "",
        day: "",
        isRecuring:true,
        time: ""
    },



]

db.Bars.deleteMany({})
  .then(() => db.Bars.collection.insertMany(bars))
  .then(data => {
    console.log(data.insertedCount + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
