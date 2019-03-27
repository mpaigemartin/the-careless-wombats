const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nightOwl");

const restaurants = [
  {
    name: "Grindhouse Killer Burgers",
    neighborhood: "Decatur",
    address: "433 N McDonough St, Decatur, GA 30030",
    url: "http://www.grindhouseburgers.com/"
  },
  {
    name: "Victory Sandwich Bar",
    neighborhood: "Decatur",
    address: "340 Church St, Decatur, GA 30030",
    url: "http://www.vicsandwich.com/"
  },
  {
    name: "The Iberian Pig",
    neighborhood: "Decatur",
    address: "121 Sycamore St, Decatur, GA 30030",
    url: "https://www.theiberianpigatl.com/#contemporary-spanish-tapas"
  },
  {
    name: "My Parent's Basement",
    neighborhood: "Decatur",
    address: "22 N Avondale Rd, Avondale Estates, GA 30002",
    url: "www.myparentsbasementcbcb.com/"
  },
  {
    name: "Trackside Tavern",
    neighborhood: "Decatur",
    address: "313 E College Ave, Decatur, GA 30030",
    url: "https://www.facebook.com/Trackside-Tavern-229206620473232/"
  },
  {
    name: "Kimball House",
    neighborhood: "Decatur",
    address: "303 E Howard Ave, Decatur, GA 30030",
    url: "http://www.kimball-house.com/"
  },
  {
    name: "The Square Pub",
    neighborhood: "Decatur",
    address: "115 Sycamore St, Decatur, GA 30030",
    url: "http://www.squarepubdecatur.com/"
  },
  {
    name: "The Corner Pub",
    neighborhood: "Decatur",
    address: "627 E College Ave D, Decatur, GA 300330",
    url: "https://www.pubalicious.com/"
  },
  {
    name: "Mellow Mushroom",
    neighborhood: "Decatur",
    address: "340 W Ponce de Leon Ave, Decatur, GA 30030",
    url: "https://mellowmushroom.com/location/ga-decatur-340-west-ponce-de-leon-avenue-30030/"
  },
  {
    name: "Raging Burrito",
    neighborhood: "Decatur",
    address: "141 Sycamore St, Decatur, GA 30030",
    url: "http://ragingburrito.com/"
  },
  {
    name: "Twains Brewpub & Billiards",
    neighborhood: "Decatur",
    address: "211 E Trinity Pl, Decatur, GA 30030",
    url: "http://www.twains.net/"
  },
  {
    name: "The Pinewood",
    neighborhood: "Decatur",
    address: "254 W Ponce de Leon Ave, Decatur, GA 30030",
    url: "https://www.pinewoodtr.com/"
  },
  {
    name: "Taiyo Ramen",
    neighborhood: "Decatur",
    address: "130 Clairemont Ave Suite 100, Decatur, GA 30030",
    url: "https://www.koreanwives.com/taiyo-ramen/"
  },
  {
    name: "Calle Latina",
    neighborhood: "Decatur",
    address: "406 Church St, Decatur, GA 30030",
    url: "http://callelatinadecatur.com/"
  },
  {
    name: "Parkers on Ponce",
    neighborhood: "Decatur",
    address: "116 E Ponce de Leon Ave, Decatur, GA 30030",
    url: "https://www.parkersonponce.com/"
  },
  {
    name: "Thinking Man Tavern",
    neighborhood: "Decatur",
    address: "537 W Howard Ave, Decatur, GA 30030",
    url: "http://www.thinkingmantavern.com/"
  },
  {
    name: "Matador Mexican Cantina",
    neighborhood: "Decatur",
    address: "350 Mead Rd, Decatur, GA 30030"
  },
  {
    name: "Mojo Pizza N' Pub",
    neighborhood: "Decatur",
    address: "657 E Lake Dr A, Decatur, GA 30030"
  },
  {
    name: "The Imperial",
    neighborhood: "Decatur",
    address: "726 W College Ave, Decatur, GA 30030"
  },
  {
    name: "Atlanta Brewing Company",
    neighborhood: "West Midtown",
    address: "2323 Defoor Hills Rd NW, Atlanta, GA 30318",
    url: "https://atlantabrewing.com/"
  },
  {
    name: "Verde Taqueria",
    neighborhood: "West Midtown",
    address: "1193 Collier Rd NW, Atlanta, GA 30318",
    url: "https://www.verdetacos.com/"
  },

  {
    name: "O-Ku",
    neighborhood: "West Midtown",
    address: "1085 Howell Mill Rd NW A3, Atlanta, GA 30318",
    url: "https://www.o-kusushiatl.com/"
  },

  {
    name: "The Optimist",
    neighborhood: "West Midtown",
    address: "914 Howell Mill Rd, Atlanta, GA 30318",
    url: "http://theoptimistrestaurant.com/"
  },

  {
    name: "Pijiu Belly",
    neighborhood: "West Midtown",
    address: "678 10th St NW, Atlanta, GA 30318",
    url: "http://pijiubelly.com/"
  },

  {
    name: "Donetto",
    neighborhood: "West Midtown",
    address: "976 Brady Ave NW Suite 110, Atlanta, GA 30318",
    url: "https://www.donettoatlanta.com/"
  },
  {
    name: "Monday Night Brewing",
    neighborhood: "West Midtown",
    address: "670 Trabert Ave NW, Atlanta, GA 30318",
    url: "https://mondaynightbrewing.com/?gclid=CjwKCAjwm-fkBRBBEiwA966fZO4GrQwHyNQfKNIbq1mv2Yok9xt-27_cWfkY7_FSNP8lxzHlhTh30RoCtRQQAvD_BwE"
  },

  {
    name: "Barcelona Wine Bar",
    neighborhood: "West Midtown",
    address: "1085 Howell Mill Rd, Atlanta, GA 30318",
    url: "https://www.barcelonawinebar.com/location/westside-ironworks/?utm_source=yext&utm_medium=localsearch&utm_campaign=landing-page&utm_content=westside-ironworks"
  },

  {
    name: "Cooks & Soliders",
    neighborhood: "West Midtown",
    address: "691 14th St NW, Atlanta, GA 30318",
    url: "http://cooksandsoldiers.com/"
  },

  {
    name: "FLIP Burger Boutique",
    neighborhood: "West Midtown",
    address: "1587 Howell Mill Rd, Atlanta, GA 30318",
    url: "https://flipburgerboutique.com/"
  },

  {
    name: "Bocado",
    neighborhood: "West Midtown",
    address: "887 Howell Mill Rd NW, Atlanta, GA 30318",
    url: "https://www.bocadoatlanta.com/"
  },
  {
    name: "JCT Bar",
    neighborhood: "West Midtown",
    address: "1198 Howell Mill Rd #18, Atlanta, GA 30318",
    url: "http://www.jctkitchen.com/"
  },
  {
    name: "Bone Lick BBQ",
    neighborhood: "West Midtown",
    address: "1133 Huff Rd NW, Atlanta, GA 30318"
  },
  {
    name: "Twisted Soul Cookhouse & Pours",
    neighborhood: "West Midtown",
    address: "1133 Huff Rd NW #D, Atlanta, GA 30318",
    url: "https://www.twistedsoulcookhouseandpours.com/"
  },
  {
    name: "Little Trouble",
    neighborhood: "West Midtown",
    address: "1170 Howell Mill Rd NW Suite P-10C, Atlanta, GA 30318",
    url: "http://www.little-trouble.com/"
  },
  {
    name: "Marcel",
    neighborhood: "West Midtown",
    address: "1170 Howell Mill Rd, Atlanta, GA 30318",
    url: "http://marcelatl.com/"
  },
  {
    name: "Cypress Street Pint & Plate",
    neighborhood: "Midtown",
    address: "817 W Peachtree St Northwest E-125, Atlanta, GA 30308",
    url: "http://cypressbar.com/"
  },
  {
    name: "Eleventh Street Pub",
    neighborhood: "Midtown",
    address: "1041 West Peachtree St Northwest, Atlanta, GA 30309",
    url: "http://www.eleventhstreetpub.com/"
  },
  {
    name: "The Highlander",
    neighborhood: "Midtown",
    address: "931 Monroe Dr Ne ste c-101, Atlanta, GA 30308",
    url: "http://www.thehighlanderatlanta.com/"
  },
  {
    name: "MidCity Cafe",
    neighborhood: "Midtown",
    address: "845 Spring St NW D1, Atlanta, GA 30308",
    url: "https://www.facebook.com/midcitycafeatl/"
  },
  {
    name: "Senor Patron",
    neighborhood: "Midtown",
    address: "860 Peachtree St NE, Atlanta, GA 30308",
    url: "http://www.senorpatronatl.com/"
  },
  {
    name: "Torched Hop",
    neighborhood: "Midtown",
    address: "249 Ponce De Leon Ave NE, Atlanta, GA 30308",
    url: "http://www.torchedhopbrewing.com/"
  },
  {
    name: "Henry's Midtown Tavern",
    neighborhood: "Midtown",
    address: "132 10th St NE, Atlanta, GA, 30309",
    url: "http://www.henrysatl.com/"
  },
  {
    name: "The Nook on Piedmont Park",
    neighborhood: "Midtown",
    address: "1144 Piedmont Ave NE, Atlanta, GA 30309",
    url: "https://thenookatlanta.com/"
  },
  {
    name: "5Church Atlanta",
    neighborhood: "Midtown",
    address: "1197 Peachtree St NE #528, Atlanta, GA 30361",
    url: "http://5churchatlanta.com/"
  },
  {
    name: "Establishment",
    neighborhood: "Midtown",
    address: "1197 Peachtree St NE #517, Atlanta, GA 30305",
    url: "https://www.establishmentatlanta.com/"
  },
  {
    name: "Ri Ra Irish Pub",
    neighborhood: "Midtown",
    address: "1080 Peachtree St NE #1, Atlanta, GA 30309",
    url: "https://rira.com/atlanta/"
  },
  {
    name: "10th & Piedmont",
    neighborhood: "Midtown",
    address: "991 Piedmont Ave NE, Atlanta, GA 30309",
    url: "http://www.10thandpiedmont.com/"
  },
  {
    name: "Zocalo Mexican Kitchen & Cantina",
    neighborhood: "Midtown",
    address: "187 10th St NE, Atlanta, GA 30309",
    url: "https://www.eatzocalo.com/"
  },
  {
    name: "Park Tavern",
    neighborhood: "Midtown",
    address: "500 10th St NE, Atlanta, GA 30309",
    url: "http://www.parktavern.com/"
  },
  {
    name: "The Canteen",
    neighborhood: "Midtown",
    address: "75 5th St NW #170, Atlanta, GA 30308",
    url: "http://www.thecanteenatl.com/"
  },
  {
    name: "Fado Irish Pub",
    neighborhood: "Midtown",
    address: "933 Peachtree St NE, Atlanta, GA 30309",
    url: "https://fadoirishpub.com/atlanta-midtown/"
  },
  {
    name: "Hudson Grille",
    neighborhood: "Midtown",
    address: "942 Peachtree St NE, Atlanta, GA 30309",
    url: "https://hudsongrille.com/"
  },
  {
    name: "Smith's Olde Bar",
    neighborhood: "Midtown",
    address: "1578 Piedmont Ave NE, Atlanta, GA 303024",
    url: "https://www.smithsoldebar.com/"
  },
  {
    name: "Takorea",
    neighborhood: "Midtown",
    address: "818 Juniper St NE, Atlanta, GA 30308",
    url: "http://www.mytakorea.com/"
  },
  {
    name: "HobNob Neighborhood Tavern",
    neighborhood: "Midtown",
    address: "1551 Piedmont Ave NE, Atlanta, GA 30324",
    url: "https://www.hobnobatlanta.com/"
  },
  {
    name: "Publik Draft House",
    neighborhood: "Midtown",
    address: "654 Peachtree St NE, Atlanta, GA 30308",
    url: "https://www.publikatl.com/"
  },
  {
    name: "Deep End",
    neighborhood: "Midtown",
    address: "621 North Avenue NE B100, Atlanta, GA 30308",
    url: "https://www.deependatl.com/"
  },
  {
    name: "The Hideaway",
    neighborhood: "Midtown",
    address: "1544 Piedmont Ave NE, Atlanta, GA 30324",
    url: "http://atlantahideaway.com/"
  }
];

db.Restaurant.deleteMany({})
  .then(() => db.Restaurant.collection.insertMany(restaurants))
  .then(data => {
    console.log(data.insertedCount + " records inserted!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
    mongoose.connection.close();
  });
