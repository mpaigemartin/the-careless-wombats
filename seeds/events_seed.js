const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/");

const bars = [
  {
    name: "Grindhouse Killer Burgers",
    neighborhood: "Decatur",
    address: "433 N McDonough St, Decatur, GA 30030"
  },
  {
    name: "Victory Sandwich Bar",
    neighborhood: "Decatur",
    address: "340 Church St, Decatur, GA 30030"
  },
  {
    name: "The Iberian Pig",
    neighborhood: "Decatur",
    address: "121 Sycamore St, Decatur, GA 30030"
  },
  {
    name: "My Parent's Basement",
    neighborhood: "Decatur",
    address: "22 N Avondale Rd, Avondale Estates, GA 30002"
  },
  {
    name: "Trackside Tavern",
    neighborhood: "Decatur",
    address: "313 E College Ave, Decatur, GA 30030"
  },
  {
    name: "Kimball House",
    neighborhood: "Decatur",
    address: "303 E Howard Ave, Decatur, GA 30030"
  },
  {
    name: "The Square Pub",
    neighborhood: "Decatur",
    address: "115 Sycamore St, Decatur, GA 30030"
  },
  {
    name: "The Corner Pub",
    neighborhood: "Decatur",
    address: "627 E College Ave D, Decatur, GA 300330"
  },
  {
    name: "Mellow Mushroom",
    neighborhood: "Decatur",
    address: "340 W Ponce de Leon Ave, Decatur, GA 30030"
  },
  {
    name: "Raging Burrito",
    neighborhood: "Decatur",
    address: "141 Sycamore St, Decatur, GA 30030"
  },
  {
    name: "Twains Brewpub & Billiards",
    neighborhood: "Decatur",
    address: "211 E Trinity Pl, Decatur, GA 30030"
  },
  {
    name: "The Pinewood",
    neighborhood: "Decatur",
    address: "254 W Ponce de Leon Ave, Decatur, GA 30030"
  },
  {
    name: "Taiyo Ramen",
    neighborhood: "Decatur",
    address: "130 Clairemont Ave Suite 100, Decatur, GA 30030"
  },
  {
    name: "Calle Latina",
    neighborhood: "Decatur",
    address: "406 Church St, Decatur, GA 30030"
  },
  {
    name: "Parkers on Ponce",
    neighborhood: "Decatur",
    address: "116 E Ponce de Leon Ave, Decatur, GA 30030"
  },
  {
    name: "Thinking Man Tavern",
    neighborhood: "Decatur",
    address: "537 W Howard Ave, Decatur, GA 30030"
  },
  {
    name: "Atlanta Brewing Company",
    neighborhood: "West Midtown",
    address: "2207 Defoor Hills Rd NW, Atlanta, GA 30318"
  },
  {
    name: "Verde Taqueria",
    neighborhood: "West Midtown",
    address: "1193 Collier Rd NW, Atlanta, GA 30318"
  },

  {
    name: "O-Ku",
    neighborhood: "West Midtown",
    address: "1085 Howell Mill Rd NW A3, Atlanta, GA 30318"
  },

  {
    name: "The Optimist",
    neighborhood: "West Midtown",
    address: "914 Howell Mill Rd, Atlanta, GA 30318"
  },

  {
    name: "Pijiu Belly",
    neighborhood: "West Midtown",
    address: "678 10th St NW, Atlanta, GA 30318"
  },

  {
    name: "Donetto",
    neighborhood: "West Midtown",
    address: "976 Brady Ave NW Suite 110, Atlanta, GA 30318"
  },
  {
    name: "Monday Night Brewing",
    neighborhood: "West Midtown",
    address: "670 Trabert Ave NW, Atlanta, GA 30318"
  },

  {
    name: "Barcelona Wine Bar",
    neighborhood: "West Midtown",
    address: "1085 Howell Mill Rd, Atlanta, GA 30318"
  },

  {
    name: "Cooks & Soliders",
    neighborhood: "West Midtown",
    address: "691 14th St NW, Atlanta, GA 30318"
  },

  {
    name: "FLIP Burger Boutique",
    neighborhood: "West Midtown",
    address: "1587 Howell Mill Rd, Atlanta, GA 30318"
  },

  {
    name: "Bocado",
    neighborhood: "West Midtown",
    address: "887 Howell Mill Rd NW, Atlanta, GA 30318"
  },
  {
    name: "JCT Bar",
    neighborhood: "West Midtown",
    address: "1198 Howell Mill Rd #18, Atlanta, GA 30318"
  },
  {
    name: "Twisted Soul Cookhouse & Pours",
    neighborhood: "West Midtown",
    address: "1133 Huff Rd NW #D, Atlanta, GA 30318"
  },
  {
    name: "Little Trouble",
    neighborhood: "1170 Howell Mill Rd NW Suite P-10C, Atlanta, GA 30318",
    address: ""
  },
  {
    name: "Marcel",
    neighborhood: "West Midtown",
    address: "1170 Howell Mill Rd, Atlanta, GA 30318"
  },
  {
    name: "Cypress Street Pint & Plate",
    neighborhood: "Midtown",
    address: "817 W Peachtree St Northwest E-125, Atlanta, GA 30308"
  },
  {
    name: "Eleventh Street Pub",
    neighborhood: "Midtown",
    address: "1041 West Peachtree St Northwest, Atlanta, GA 30309"
  },
  {
    name: "The Highlander",
    neighborhood: "Midtown",
    address: "931 Monroe Dr Ne ste c-101, Atlanta, GA 30308"
  },
  {
    name: "MidCity Cafe",
    neighborhood: "Midtown",
    address: "845 Spring St NW D1, Atlanta, GA 30308"
  },
  {
    name: "Senor Patron",
    neighborhood: "Midtown",
    address: "860 Peachtree St NE, Atlanta, GA 30308"
  },
  {
    name: "Torched Hop",
    neighborhood: "Midtown",
    address: "249 Ponce De Leon Ave NE, Atlanta, GA 30308"
  },
  {
    name: "Henry's Midtown Tavern",
    neighborhood: "Midtown",
    address: "132 10th St NE, Atlanta, GA, 30309"
  },
  {
    name: "The Nook on Piedmont Park",
    neighborhood: "Midtown",
    address: "1144 Piedmont Ave NE, Atlanta, GA 30309"
  },
  {
    name: "5Church Atlanta",
    neighborhood: "Midtown",
    address: "1197 Peachtree St NE #528, Atlanta, GA 30361"
  },
  {
    name: "Establishment",
    neighborhood: "Midtown",
    address: "1197 Peachtree St NE #517, Atlanta, GA 30305"
  },
  {
    name: "Ri Ra Irish Pub",
    neighborhood: "Midtown",
    address: "1080 Peachtree St NE #1, Atlanta, GA 30309"
  },
  {
    name: "10th & Piedmont",
    neighborhood: "Midtown",
    address: "991 Piedmont Ave NE, Atlanta, GA 30309"
  },
  {
    name: "Zocalo Mexican Kitchen & Cantina",
    neighborhood: "Midtown",
    address: "187 10th St NE, Atlanta, GA 30309"
  },
  {
    name: "Park Tavern",
    neighborhood: "Midtown",
    address: "500 10th St NE, Atlanta, GA 30309"
  },
  {
    name: "The Canteen",
    neighborhood: "Midtown",
    address: "75 5th St NW #170, Atlanta, GA 30308"
  },
  {
    name: "Fado Irish Pub",
    neighborhood: "Midtown",
    address: "933 Peachtree St NE, Atlanta, GA 30309"
  },
  {
    name: "Hudson Grille",
    neighborhood: "Midtown",
    address: "942 Peachtree St NE, Atlanta, GA 30309"
  },

  {
    name: "Smith's Olde Bar",
    neighborhood: "Midtown",
    address: "1578 Piedmont Ave NE, Atlanta, GA 303024"
  },
  {
    name: "Takorea",
    neighborhood: "Midtown",
    address: "818 Juniper St NE, Atlanta, GA 30308"
  },
  {
    name: "HobNob Neighborhood Tavern",
    neighborhood: "Midtown",
    address: "1551 Piedmont Ave NE, Atlanta, GA 30324"
  },
  {
    name: "Publik Draft House",
    neighborhood: "Midtown",
    address: "654 Peachtree St NE, Atlanta, GA 30308"
  },
  {
    name: "Deep End",
    neighborhood: "Midtown",
    address: "621 North Avenue NE B100, Atlanta, GA 30308"
  },
  {
    name: "The Hideaway",
    neighborhood: "Midtown",
    address: "1544 Piedmont Ave NE, Atlanta, GA 30324"
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
