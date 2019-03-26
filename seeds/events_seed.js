const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nightOwl");

const events = [
  {
    name: "Dirty South Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes:
      "Our goal is to create a fun and competitive environment, not to stump you with ridiculously hard questions.",
    day: ["Monday"],
    isRecuring: true,
    time: "8:30"
  },
  {
    name: "TWOSDAY",
    restaurant_id: {},
    category: ["Unique"],
    describes:
      "Ride in on your motorcycle and 1/2 off the nightly food special!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Jamon Happy Hour",
    restaurant_id: {},
    category: ["Happy Hour", "Food Specials"],
    describes:
      "Custom meat and cheese boards: Three Meats $22, Three Cheese $10",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "Drunk Bingo",
    restaurant_id: {},
    category: ["Bingo"],
    describes:
      "Come in and play classic bingo but with a twist, with the chance to win great prizes.",
    day: ["Thursday"],
    isRecuring: true,
    time: "10"
  },
  {
    name: "Drink & Draw",
    restaurant_id: {},
    category: ["Unique"],
    describes:
      "Come join us the 1st Monday every month for a casual drink and draw hosted by our own JJ Allen.",
    day: ["Monday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Nerd Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes:
      "Join us. This is the trivia you've been looking for. It's not a trap. ",
    day: ["Tuesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Half Price Oysters",
    restaurant_id: {},
    category: ["Food Specials", "Happy Hour"],
    describes: "Enjoy 1/2 off oysters on the Raw Bar Menu",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "$2 Highlife",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Enjoy $2 16oz cans of Miller Highlife.",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$5 Tecate & Tequila",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "$5 for a combo of an El Jimador shot and a 16oz can of Tecate.",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$3 Drafts and Well Drinks",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Enjoy a selection of drafts and well cocktails for only $3!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$5 Local Draft Beers",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Get Georgia drafts for $5",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Half Price Apps",
    restaurant_id: {},
    category: ["Food Specials", "Happy Hour"],
    describes: "Get 1/2 off apps after six pm.",
    day: ["Thursday"],
    isRecuring: true,
    time: "6-11"
  },
  {
    name: "Trivia",
    restaurant_id: { cor },
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Sound Check Bingo ",
    restaurant_id: {},
    category: ["Bingo"],
    describes: "Decipher songs to fill out your bingo card!",
    day: ["Thursday"],
    isRecuring: true,
    time: "7:30"
  },
  {
    name: "Trivia",
    restaurant_id: { mel },
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "7:30"
  },
  {
    name: "Trivia",
    restaurant_id: { bur },
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Thursday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Monday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Wings + Beer $10",
    restaurant_id: {},
    category: ["Food Specials", "Drink Specials"],
    describes:
      "Join us every Tuesday and get 8 Springer Mountain Chicken Wings and a 12oz house beer for $10",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Burger + Beer $11",
    restaurant_id: {},
    category: ["Food Specials", "Drink Specials"],
    describes:
      "Enjoy a juicy Brasstown Farm huckburger, Springer Mountain Chicken burger, or our home-made smoked beet burger – add cheese if you’d like – along with a regular side, and choose a 12 oz. Twain’s ale to help wash it down.",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Whiskey Wednesday",
    restaurant_id: {},
    category: ["Drink Specials", "Happy Hour"],
    describes: "All whiskey cocktails are only $5",
    day: ["Wednesday"],
    isRecuring: true,
    time: "5"
  },

  {
    name: "Bottomless Mimosas",
    restaurant_id: {},
    category: ["Brunch", "Drink Specials"],
    describes:
      "Brunch wouldn’t be the same without Bottomless Mimosas. Luckily, the brunch menu has you covered with both Bottomless Mimosas and Bloody Marys available for $15.",
    day: ["Sunday"],
    isRecuring: true,
    time: "11-2:30"
  },
  {
    name: "BOGO Ramen",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "Buy one Ramen bowl and get another free!",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$5 Cocktails",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Get all classic cocktails for only $5",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Half Price Wine",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Select glasses of wine are half priced all day long",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$3 Sangria",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Enjoy yourself a glass of sangria from only $3!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },

  {
    name: "$3 Draft Beers",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "16oz draft beers are only $3 all day.",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Bottomless Sangria",
    restaurant_id: {},
    category: ["Drink Specials", "Brunch"],
    describes: "Bottomless Sangria is $12 for Saturday brunch.",
    day: ["Saturday"],
    isRecuring: true,
    time: "12-5"
  },
  {
    name: "Bottomless Mimosas",
    restaurant_id: {},
    category: ["Drink Specials", "Brunch"],
    describes: "Bottomless Mimosas are $12 for Sunday brunch.",
    day: ["Sunday"],
    isRecuring: true,
    time: "12-5"
  },
  {
    name: "Half Price Wine",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "All bottles of wine are half off for parties of five or fewer",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "7:30"
  },
  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Thursday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "$10 Pitchers",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Get $10 Dos XX Pitchers all day long!",
    day: ["Saturday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$2.50 Sangrias and Bloody Marys",
    restaurant_id: {},
    category: ["Drink Specials", "Brunch"],
    describes: "$2.50 Sangrias and Bloody Marys",
    day: ["Sunday"],
    isRecuring: true,
    time: "12-3"
  },
  {
    name: "Sound Check Bingo",
    restaurant_id: { mojo },
    category: ["Bingo"],
    describes: "Decipher songs to fill out your bingo card!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "7"
  },
  {
    name: "Trivia",
    restaurant_id: { imp },
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Monday"],
    isRecuring: true,
    time: "8:30"
  },
  {
    name: "Wayback Wednesday",
    restaurant_id: {},
    category: ["Unique"],
    describes: "Enjoy a free retro movie while you sip on your beer.",
    day: ["Wednesday"],
    isRecuring: true,
    time: "6:15"
  },
  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Thursday"],
    isRecuring: true,
    time: "6:30"
  },

  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Thursday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Half Price Sake",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Enjoy half priced sake bottles!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },

  {
    name: "Half Price Wine",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Enjoy half priced wine bottles!",
    day: ["Sunday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Half Price Sushi",
    restaurant_id: {},
    category: ["Happy Hour", "Food Specials"],
    describes: "Sushi rolls are 1/2 off",
    day: ["Monday", "Wednesday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "Late Night Sushi",
    restaurant_id: {},
    category: ["Food Specials", "Late Night"],
    describes: "Enjoy half priced sushi rolls after 11pm",
    day: ["Friday", "Saturday"],
    isRecuring: true,
    time: "11-1"
  },
  {
    name: "$1 oysters",
    restaurant_id: {},
    category: ["Happy Hour", "Food Specials"],
    describes: "Enjoy a selection of $1 oysters in the Oyster Bar",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-6"
  },
  {
    name: "$1 oysters",
    restaurant_id: {},
    category: ["Happy Hour", "Food Specials"],
    describes: "Enjoy a selection of $1 oysters in the Oyster Bar",
    day: ["Saturday", "Sunday"],
    isRecuring: true,
    time: "3-5"
  },
  {
    name: "Trivia",
    restaurant_id: [],
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "7:30"
  },
  {
    name: "Bottomless Belinis",
    restaurant_id: {},
    category: ["Drink Specials", "Brunch"],
    describes: "Bottomless Belinis are only $10 for brunch!",
    day: ["Sunday"],
    isRecuring: true,
    time: "12:30-2:30"
  },
  {
    name: "Half Price Wine",
    restaurant_id: {},
    category: ["Drink Specials", "Happy Hour"],
    describes: "Half priced wine bottles available all day",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "$4 Pint Night",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "$4 pint is for our core and rotator beers",
    day: ["Tuesday", "Wednesday"],
    isRecuring: true,
    time: "4"
  },
  {
    name: "Boards and Brews",
    restaurant_id: {},
    category: ["Unique"],
    describes:
      "Every Tuesday night, come join us and your board gaming friends.",
    day: ["Tuesday"],
    isRecuring: true,
    time: "4"
  },
  {
    name: "Throwback Thursday",
    restaurant_id: {},
    category: ["Unique"],
    describes: "$12 gets you a brewery tour, a pint glass and 6 tastings.",
    day: ["Thursday"],
    isRecuring: true,
    time: "4"
  },
  {
    name: "Half Price Wine",
    restaurant_id: {},
    category: ["Drink Specials", "Happy Hour"],
    describes: "Enjoy half priced wine bottles for happy hour!",
    day: ["Monday"],
    isRecuring: true,
    time: "4-12"
  },
  {
    name: "$5 Small Plates",
    restaurant_id: {},
    category: ["Food Specials", "Happy Hour"],
    describes: "Select small plates are onyl $5",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "$4 Mojitos",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Enjoy $4 mojitos all day!",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "7:30"
  },
  {
    name: "$4 Martinis",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Martinis are just $4 all day long",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },

  {
    name: "$4 Margaritas",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Margaritas are only $4 all day long",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$4 Drafts & $3 Cans",
    restaurant_id: [],
    category: ["Drink Specials"],
    describes:
      "Help FLIP clean out the beer basement! Drafts are $4, and craft cans are $3.",
    day: ["Sunday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Burger + Beer $13",
    restaurant_id: {},
    category: ["Food Specials", "Drink Specials"],
    describes:
      "Grab a double-stack burger, fries and beer for $13 on Tuesday nights.",
    day: ["Tuesday"],
    isRecuring: true,
    time: "6"
  },
  {
    name: "Live Music",
    restaurant_id: {},
    category: ["Live Music"],
    describes: "Live Music at the upstairs bar",
    day: ["Thursday"],
    isRecuring: true,
    time: "6"
  },
  {
    name: "Live Music",
    restaurant_id: {},
    category: ["Live Music"],
    describes: "Live Music at the upstairs bar",
    day: ["Friday"],
    isRecuring: true,
    time: "9"
  },
  {
    name: "Live DJ",
    restaurant_id: {},
    category: ["Live Music"],
    describes: "Live Music at the upstairs bar",
    day: ["Saturday"],
    isRecuring: true,
    time: "9"
  },
  {
    name: "Thirsty Thursdays",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes:
      "On Thursdays, get a $6 punch or cocktail of the day, $2.50 beers, or $6 glasses of wine ($24 for the entire bottle) at the upstairs bar at JCT.",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$2 Tuesdays",
    restaurant_id: {},
    category: ["Drink Specials", "Food Specials"],
    describes:
      "On $2 Tuesdays, get $2 Tecates and select shots, along with $2 sliders, boiled peanuts, and pork rinds.",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$5 Small Plates",
    restaurant_id: {},
    category: ["Food Specials", "Happy Hour"],
    describes:
      "$5 for wings of the day, sliders, seafood cocktail, or fried green tomatoes",
    day: ["Tuesday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "Wine Down Wednesday",
    restaurant_id: {},
    category: ["Food Specials", "Drink Specials"],
    describes: "1/2 price on select bottles and get a free charcuerie board!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Live Music",
    restaurant_id: {},
    category: ["Live Music"],
    describes: "Enjoy local musicians every 1st and 3rd thursday",
    day: ["Thursday"],
    isRecuring: true,
    time: "7"
  },
  {
    name: "$5 Happy Hour",
    restaurant_id: {},
    category: ["Happy Hour", "Drink Specials", "Food Specials"],
    describes: "$5 Asian street bites and high-octane house drinks",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "Late Night Deals",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "Get a special menu of $10 plates after 11:30pm",
    day: ["Friday", "Saturday"],
    isRecuring: true,
    time: "11:30-2"
  },
  {
    name: "$2 Tacos",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "Rotating $2 tacos all day",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Beer Geek Tuesdays",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes:
      "Every tuesday, themed beer flights are hand curated to showcase specialty beers",
    day: ["Tuesday"],
    isRecuring: true,
    time: "6"
  },
  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Half Price Wine",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Get all wine bottles half off",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Half Price Apps",
    restaurant_id: {},
    category: ["Happy Hour", "Food Specials"],
    describes:
      "Pub Fries, Hummus, Fried Mushrooms, and Chicken Quesdilla are 1/2 off 5-7",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "Brunch",
    restaurant_id: {},
    category: ["Brunch"],
    describes: "$3 mimosas and special brunch menu",
    day: ["Saturday", "Sunday"],
    isRecuring: true,
    time: "10-2"
  },
  {
    name: "Rock Paper Scissors Tournament",
    restaurant_id: {},
    category: ["Unique"],
    describes: "FREE TO PLAY! Winner recieves $100 CASH!",
    day: ["Thursday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "$2 Tacos",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "Enjoy $2 tacos after 8pm",
    day: ["Thursday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Drunk Bingo",
    restaurant_id: {},
    category: ["Trivia"],
    describes:
      "Come in and play classic bingo but with a twist, with the chance to win great prizes.",
    day: ["Monday"],
    isRecuring: true,
    time: "10"
  },
  {
    name: "All you can eat crab legs",
    restaurant_id: {},
    category: ["Food Specials"],
    describes:
      "Tuesday means crab legs - all you can eat (until they run out) for $39.95 PER PERSON!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Punk & Metal Karaoke",
    restaurant_id: {},
    category: ["Karaoke"],
    describes:
      "A large selection of PUNK ROCK, HEAVY METAL, & NEW WAVE 80's songs to choose from.",
    day: ["Wednesday"],
    isRecuring: true,
    time: "10"
  },
  {
    name: "$6.66 Burgers",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "$6.66 for any burger all day long",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },

  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes:
      "Come play trivia on Sunday nights and walk away with valuable prizes and elevated self-esteem!",
    day: ["Sunday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Live Music",
    restaurant_id: {},
    category: ["Live Music", "Drink Specials"],
    describes: "Live Music and $7 glasses of wine",
    day: ["Wednesday"],
    isRecuring: true,
    time: "7"
  },
  {
    name: "Ladies Night",
    restaurant_id: {},
    category: ["Drink Specials", "Live Music"],
    describes: "Half off craft cocktails and live DJ",
    day: ["Thursday"],
    isRecuring: true,
    time: "7"
  },
  {
    name: "$3 Margaritas",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes:
      "House margaritas are $3 for a 12oz, $7 for a 32oz, and only $15 for a whopping 60oz all day!",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$3 Draft Beer",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes:
      "Draft Beers are on special all day long. A 16oz is $3, a 32oz draft is $5, and a 60oz pitcher is only $11.",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$2 Bottled Beer",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Enjoy $2 bottled beer all day",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$5 Texas Margaritas",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Senor Patron’s signature Texas margaritas are only $5.",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Sunday Funday",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "$4 mojitos all day long",
    day: ["Sunday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Happy Hour",
    restaurant_id: {},
    category: ["Happy Hour", "Drink Specials"],
    describes: "House margaritas and draft beers are $3.50 for happy hour",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "4-6"
  },
  {
    name: "Burger Monday",
    restaurant_id: {},
    category: ["Food Specials", "Drink Specials"],
    describes:
      "Classic Double, fries and house draft for $10 plus Bocce Ball downstairs",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Taco Tuesday",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "$3 tacos and Bocce Ball downstairs",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Wing Wednesday",
    restaurant_id: {},
    category: ["Food Specials", "Drink Specials"],
    describes: "12 wings and a house draft for $12, plus Bocce Ball downstairs",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$3 Miller Lite",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "$3 Miller lite tallboys",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Wing Wednesday",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "Get a pound of wings for $6 every hump day!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Half Price Apps",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "Enjoy half price apps at the back bar only",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    isRecuring: true,
    time: "4"
  },
  {
    name: "Half Price Wine",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Enjoy 1/2 off wine GLASSES all day",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Fried Chicken",
    restaurant_id: {},
    category: ["Drink Specials", "Food Specials", "Happy Hour"],
    describes:
      "George’s Famous Fried Chicken with two sides and a craft beer for $18.",
    day: ["Tuesday"],
    isRecuring: true,
    time: "4"
  },
  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "BOGO Tachos",
    restaurant_id: {},
    category: ["Happy Hour", "Food Specials"],
    describes: "All tachos are buy one get one 5-7pm",
    day: ["Thursday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "$3 Mimosas",
    restaurant_id: {},
    category: ["Brunch", "Drink Specials"],
    describes: "Sunday Brunch means $3 mimosas and $15 carafes.",
    day: ["Sunday"],
    isRecuring: true,
    time: "12-3"
  },
  {
    name: "Live Music",
    restaurant_id: {},
    category: ["Live Music", "Drink Specials"],
    describes:
      "There is live music, $3 Fireball shots, $2 Hamm’s Tallboys, and $4 Miller Tallboys to finish off the weekend.",
    day: ["Sunday"],
    isRecuring: true,
    time: "5"
  },

  {
    name: "Happy Hour",
    restaurant_id: {},
    category: ["Happy Hour", "Drink Specials", "Food Specials"],
    describes: "Apps are $8, wins is $6, and beer is $4",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    isRecuring: true,
    time: "4:30-6:30"
  },
  {
    name: "$6 Cocktails",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Classic cocktails are only $6 from noon to close.",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Whiskey Wednesday",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "$8 Woodford reserve cocktails",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$4.50 Terrapin",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Rotating Terrapin cans are only $4.50",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$5 Appetizers",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "Apps are $5",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "4:30-7"
  },
  {
    name: "Half Price Apps",
    restaurant_id: {},
    category: ["Food Specials", "Happy Hour"],
    describes: "Enjoy 1/2 price apps for Happy Hour",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "4-7"
  },
  {
    name: "$4 Beers",
    restaurant_id: {},
    category: ["Drink Specials", "Happy Hour"],
    describes: "Select rotating beers are $4",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "4-7"
  },
  {
    name: "Half Price Cocktails",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "1/2 off any signature cocktails",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$3 Moonshine",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "$3 for any cocktail with moonshine!",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Bottomless Mimosas",
    restaurant_id: {},
    category: ["Brunch", "Drink Specials"],
    describes: "Enjoy bottomless mimosas for brunch",
    day: ["Sunday"],
    isRecuring: true,
    time: "11-3"
  },
  {
    name: "$4 Well Drinks",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "$4 well drinks and shots all day",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$2 Tuesdays",
    restaurant_id: {},
    category: ["Food Specials", "Drink Specials"],
    describes: "All tacos are $2, as well as $2 Tecates and $4 moonshine",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$4 Mojitos",
    restaurant_id: {},
    category: ["Drink SPecials"],
    describes: "$4 Mojitos all day",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$5 Sangria",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "On Thursday only, sangria is $5 or $19 for a pitcher.",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },

  {
    name: "$4 Margaritas",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "$4 house margaritas on the rocks",
    day: ["Friday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Bottomless Drinks",
    restaurant_id: {},
    category: ["Drink Specials", "Brunch"],
    describes: "2 time limit on bottomless margs, bloodys, and mimosas",
    day: ["Sunday"],
    isRecuring: true,
    time: "11-6"
  },
  {
    name: "Half Price Wine",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Half off wine bottles",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Beer Flights",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Selected beer flights are $5 everyday",
    day: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$10 Cheesesteaks",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "Fred's Cheesesteaks are $10 after 3pm",
    day: ["Tuesday"],
    isRecuring: true,
    time: "3"
  },
  {
    name: "Burger + Fries + Coke",
    restaurant_id: {},
    category: ["Food Specials"],
    describes:
      "Burger Stack + Small Fries + Canned Coke or Diet Coke from Fred's Meat & Bread, just $9.95, plus tax",
    day: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    isRecuring: true,
    time: "3"
  },
  {
    name: "Pita + Soda",
    restaurant_id: {},
    category: ["Food Specials"],
    describes:
      "Falafel Pita + Pickles + All Natural Housemade Soda from Yalla, just $8.95, plus tax",
    day: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    isRecuring: true,
    time: "3"
  },
  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes: "Usually Harry Potter themed!",
    day: ["Thursday"],
    isRecuring: true,
    time: "6:30"
  },
  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Bottomless Mules",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Bottomless Mules from 7-9 p.m. – $21 per person",
    day: ["Friday"],
    isRecuring: true,
    time: "7-9"
  },
  {
    name: "Happy Hour",
    restaurant_id: {},
    category: ["Happy Hour", "Drink Specials", "Food Specials"],
    describes:
      "Bar snacks are $6, select beer is $5, select wine and cocktails are $7.",
    day: ["Friday"],
    isRecuring: true,
    time: "4-7"
  },
  {
    name: "BOGO Tacos",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "Buy one get one tacos",
    day: ["Friday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "$5 Off",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "$5 off big plates after 5pm",
    day: ["Sunday"],
    isRecuring: true,
    time: "5"
  },
  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Thursday"],
    isRecuring: true,
    time: "8"
  },

  {
    name: "$5 Burritos",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "Burritos are only avaiable on Mondays and they're $5!",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$4 Mojitos",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "Enjoy $4 mojitos all day",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Tako Tuesday",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "$2 classic tacos, $3 premium tacos",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Wine Wednesday",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "1/2 off bottles of wine",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes: "Team Trivia and $10 buckets of beer",
    day: ["Thursday"],
    isRecuring: true,
    time: "8"
  },

  {
    name: "$3 Drinks",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "$3 Hite and Miller Draft, $3 Shots",
    day: ["Friday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Burger + Beer $10",
    restaurant_id: {},
    category: ["Food Specials", "Drink Specials"],
    describes: "Burger and 12oz pour = $10",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes: "Team Trivia 8pm Play for $6000 Grand Prize",
    day: ["Tuesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Slider Night",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "$3.50 Sliders 5-10pm",
    day: ["Wednesday"],
    isRecuring: true,
    time: "5-10"
  },
  {
    name: "Whiskey Flights",
    restaurant_id: {},
    category: ["Drink Specials"],
    describes: "$15 Whiskey Flights",
    day: ["Thursday"],
    isRecuring: true,
    time: "5-10"
  },
  {
    name: "Live Music",
    restaurant_id: {},
    category: ["Live Music"],
    describes: "Live Music",
    day: ["Sunday"],
    isRecuring: true,
    time: "1-4"
  },
  {
    name: "Bottomless Mimosas",
    restaurant_id: {},
    category: ["Brunch", "Drink Specials"],
    describes: "Bottomless mimosas at brunch are only $17",
    day: ["Saturday", "Sunday"],
    isRecuring: true,
    time: "11-4"
  },
  {
    name: "Fried Chicken Night",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "100% All Natural Springer Mountain Chicken",
    day: ["Sunday"],
    isRecuring: true,
    time: "5-9"
  },
  {
    name: "$2 Tacos",
    restaurant_id: {},
    category: ["Food Specials"],
    describes: "$2 tacos after 6pm",
    day: ["Tuesday"],
    isRecuring: true,
    time: "6"
  },
  {
    name: "Free Apps",
    restaurant_id: {},
    category: ["Food Specials", "Happy Hour"],
    describes: "Free app with the purchase of a drink from 4-6",
    day: ["Friday"],
    isRecuring: true,
    time: "4-6"
  },
  {
    name: "Press Start",
    restaurant_id: {},
    category: ["Unique"],
    describes:
      "Lofi beats, video games from wall to wall, giveaways and awesome food.",
    day: ["Monday"],
    isRecuring: true,
    time: "9"
  },
  {
    name: "Drag Queen Bingo",
    restaurant_id: {},
    category: ["Unique", "Bingo"],
    describes:
      "Leave your filters at the door because Tuesday nights at Deep End are now Drag Bingo hosted by Brent Star!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "8"
  },

  {
    name: "$1 Tacos",
    restaurant_id: {},
    category: [""],
    describes: "$1 tacos after 5pm as well as Dickel Tennesee Whiskey for $5",
    day: ["Tuesday"],
    isRecuring: true,
    time: "5"
  },
  {
    name: "ATL D&D",
    restaurant_id: {},
    category: ["Unique"],
    describes:
      "Join Atlanta Drunks & Dragons for a foray in the Dungeons and Dragons universe. ",
    day: ["Thursday"],
    isRecuring: true,
    time: "7-10"
  },
  {
    name: "Bottomless Drinks",
    restaurant_id: {},
    category: ["Brunch", "Drink Specials"],
    describes:
      "We're doing bottomless mimosas and bloody mary's every weekend from noon until 3pm.",
    day: ["Saturday", "Sunday"],
    isRecuring: true,
    time: "12-3"
  },
  {
    name: "Happiest Hours",
    restaurant_id: {},
    category: ["Happy Hour", "Drink Specials", "Food Specials"],
    describes: "$6 cocktails and buy one get one of your favorite appetizers!",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "Trivia",
    restaurant_id: {},
    category: ["Trivia"],
    describes:
      "Fire up those brain cells, it’s time for Trivia Tuesdays with DeWayne Morgan. ",
    day: ["Tuesday"],
    isRecuring: true,
    time: "8:30"
  },
  {
    name: "Drag Queen Bingo",
    restaurant_id: {},
    category: ["Bingo", "Unique"],
    describes:
      "The Hideaway is proud to present Birdcage Bingo, hosted by drag queen extraordinaire Ruby Redd.",
    day: ["Wednesday"],
    isRecuring: true,
    time: "8:30"
  }
];

db.Events.deleteMany({})
  .then(() => db.Events.collection.insertMany(events))
  .then(data => {
    console.log(data.insertedCount + " records inserted!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
    mongoose.connection.close();
  });
