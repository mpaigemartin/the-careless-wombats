const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nightOwl", {
  useNewUrlParser: true
});

const restaurants = [
  {
    name: 'Grindhouse Killer Burgers',
    neighborhood: 'Decatur',
    address: '433 N McDonough St, Decatur, GA 30030',
    url: 'http://www.grindhouseburgers.com/',
    tagline: 'Local chain serving burgers, chili & shakes in a hip space with B-movies projected on the walls'
  },
  {
    name: 'Victory Sandwich Bar',
    neighborhood: 'Decatur',
    address: '340 Church St, Decatur, GA 30030',
    url: 'http://www.vicsandwich.com/',
    tagline: 'Buzzy, industrial-chic tavern featuring inventive sandwiches & cocktails, plus a patio.'
  },
  {
    name: 'The Iberian Pig',
    neighborhood: 'Decatur',
    address: '121 Sycamore St, Decatur, GA 30030',
    url: 'https://www.theiberianpigatl.com/#contemporary-spanish-tapas',
    tagline: 'Eatery serves all things pig via tapas & entrees, plus cocktails & wine in a modern setting.'
  },
  {
    name: "My Parent's Basement",
    neighborhood: 'Decatur',
    address: '22 N Avondale Rd, Avondale Estates, GA 30002',
    url: 'www.myparentsbasementcbcb.com/',
    tagline: 'Combination comic-book store & taproom serving up local craft beer & creative bar food.'
  },
  {
    name: 'Trackside Tavern',
    neighborhood: 'Decatur',
    address: '313 E College Ave, Decatur, GA 30030',
    url: 'https://www.facebook.com/Trackside-Tavern-229206620473232/',
    tagline: 'A longtime neighborhood joint serving up drink specials & pub grub, with billiards & darts.'
  },
  {
    name: 'Kimball House',
    neighborhood: 'Decatur',
    address: '303 E Howard Ave, Decatur, GA 30030',
    url: 'http://www.kimball-house.com/',
    tagline: 'Once a railroad station, this sleek eatery & raw bar serves farm-to-table entrees with French flair.'
  },
  {
    name: 'The Square Pub',
    neighborhood: 'Decatur',
    address: '115 Sycamore St, Decatur, GA 30030',
    url: 'http://www.squarepubdecatur.com/',
    tagline: 'Southwest-inspired dishes, plus cocktails & brews in a large, laid-back environment.'
  },
  {
    name: 'The Corner Pub',
    neighborhood: 'Decatur',
    address: '627 E College Ave D, Decatur, GA 300330',
    url: 'https://www.pubalicious.com/',
    tagline: 'Neighborhood watering hole serving specialty beers & updated pub fare in a cozy, wood-filled space.'
  },
  {
    name: 'Mellow Mushroom',
    neighborhood: 'Decatur',
    address: '340 W Ponce de Leon Ave, Decatur, GA 30030',
    url:'https://mellowmushroom.com/location/ga-decatur-340-west-ponce-de-leon-avenue-30030/',
    tagline: 'Funky, art-filled chain pizzeria featuring craft beer, calzones & creative stone-baked pizzas.'
  },
  {
    name: 'Raging Burrito',
    neighborhood: 'Decatur',
    address: '141 Sycamore St, Decatur, GA 30030',
    url: 'http://ragingburrito.com/',
    tagline: 'Laid-back eatery offers updated Tex-Mex classics, a full lineup of craft beers & 50+ tequilas.'
  },
  {
    name: 'Twains Brewpub & Billiards',
    neighborhood: 'Decatur',
    address: '211 E Trinity Pl, Decatur, GA 30030',
    url: 'http://www.twains.net/',
    tagline: 'Gastropub with house-brewed tap beers, shuffleboard, pool & darts, plus trivia on Mondays.'
  },
  {
    name: 'The Pinewood',
    neighborhood: 'Decatur',
    address: '254 W Ponce de Leon Ave, Decatur, GA 30030',
    url: 'https://www.pinewoodtr.com/',
    tagline: 'Hip, urban-rustic gastropub featuring elevated comfort food, modern cocktails & liquor flights.'
  },
  {
    name: 'Taiyo Ramen',
    neighborhood: 'Decatur',
    address: '130 Clairemont Ave Suite 100, Decatur, GA 30030',
    url: 'https://www.koreanwives.com/taiyo-ramen/',
    tagline: 'Contemporary Japanese noodle soups & Asian small plates plus cocktails served in a hotel setting.'
  },
  {
    name: 'Calle Latina',
    neighborhood: 'Decatur',
    address: '406 Church St, Decatur, GA 30030',
    url: 'http://callelatinadecatur.com/',
    tagline: 'Brightly painted venue with patio seating offering typical Latin American street-food eats.'
  },
  {
    name: 'Parkers on Ponce',
    neighborhood: 'Decatur',
    address: '116 E Ponce de Leon Ave, Decatur, GA 30030',
    url: 'https://www.parkersonponce.com/',
    tagline: 'Pub fare & craft beers provide fuel for board games, trivia, darts & more in a low-key hangout.'
  },
  {
    name: 'Thinking Man Tavern',
    neighborhood: 'Decatur',
    address: '537 W Howard Ave, Decatur, GA 30030',
    url: 'http://www.thinkingmantavern.com/',
    tagline: ''
  },
  {
    name: 'Matador Mexican Cantina',
    neighborhood: 'Decatur',
    address: '350 Mead Rd, Decatur, GA 30030',
    tagline: 'Funky, industrial cantina with patio seating fixing up Mexican favorites including creative tacos.'
  },
  {
    name: "Mojo Pizza N' Pub",
    neighborhood: 'Decatur',
    address: '657 E Lake Dr A, Decatur, GA 30030',
    tagline: 'Pie joint is known for its lineup of craft beers & New York-style pizza with sesame-seed crust.'
  },
  {
    name: 'The Imperial',
    neighborhood: 'Decatur',
    address: '726 W College Ave, Decatur, GA 30030',
    tagline: 'Buzzing bar offering beer, pub grub & other refreshments in a casual, patio-equipped setting.'
  },
  {
    name: 'Wild Heaven Beer',
    neighborhood: 'Decatur',
    address: '135 Maple St B, Avondale Estates, GA 30002',
    tagline: 'Wild Heaven, created by lifelong Georgians Nick Purdy and Eric Johnson, is focused on world-class beers designed to offer something new to the beer landscape—not simply our version of what everyone else is doing.'
  },
  {
    name: 'Atlanta Brewing Company',
    neighborhood: 'West Midtown',
    address: '2323 Defoor Hills Rd NW, Atlanta, GA 30318',
    url: 'https://atlantabrewing.com/',
    tagline: 'Established in 1993, Atlanta Brewing Co was Georgia’s first craft brewery. For 25 years we have been committed to brewing quality, innovative beers for the city we love.'
  },
  {
    name: 'Verde Taqueria',
    neighborhood: 'West Midtown',
    address: '1193 Collier Rd NW, Atlanta, GA 30318',
    url: 'https://www.verdetacos.com/',
    tagline: 'Fried chicken tacos & other Mexican fusion fare, in hip, vibrant decor with an outdoor patio.'
  },

  {
    name: 'O-Ku',
    neighborhood: 'West Midtown',
    address: '1085 Howell Mill Rd NW A3, Atlanta, GA 30318',
    url: 'https://www.o-kusushiatl.com/',
    tagline: 'Industrial-chic haunt featuring sushi & other Japanese fare, plus a roof deck with skyline views.'
  },

  {
    name: 'The Optimist',
    neighborhood: 'West Midtown',
    address: '914 Howell Mill Rd, Atlanta, GA 30318',
    url: 'http://theoptimistrestaurant.com/',
    tagline: 'Lobster rolls, gumbo, wood-fired oysters & more in a lofty, country-modern space with a raw bar.'
  },

  {
    name: 'Pijiu Belly',
    neighborhood: 'West Midtown',
    address: '678 10th St NW, Atlanta, GA 30318',
    url: 'http://pijiubelly.com/',
    tagline: 'Small hip option for Southern/American-meets-Asian dishes, like Korean roast chicken, plus beer.'
  },

  {
    name: 'Donetto',
    neighborhood: 'West Midtown',
    address: '976 Brady Ave NW Suite 110, Atlanta, GA 30318',
    url: 'https://www.donettoatlanta.com/',
    tagline: 'Modern Tuscan dishes, wines & cocktails in a former warehouse with a contemporary vibe.'
  },
  {
    name: 'Monday Night Brewing',
    neighborhood: 'West Midtown',
    address: '670 Trabert Ave NW, Atlanta, GA 30318',
    url:'https://mondaynightbrewing.com/?gclid=CjwKCAjwm-fkBRBBEiwA966fZO4GrQwHyNQfKNIbq1mv2Yok9xt-27_cWfkY7_FSNP8lxzHlhTh30RoCtRQQAvD_BwE',
    tagline: 'Casual craft brewery featuring a spacious, high-ceilinged tasting room & regular tours.'
  },

  {
    name: 'Barcelona Wine Bar',
    neighborhood: 'West Midtown',
    address: '1085 Howell Mill Rd, Atlanta, GA 30318',
    url:'https://www.barcelonawinebar.com/location/westside-ironworks/?utm_source=yext&utm_medium=localsearch&utm_campaign=landing-page&utm_content=westside-ironworks',
    tagline: 'Spanish small plates served in industrial surrounds with a large patio & an extensive wine list.'
  },

  {
    name: 'Cooks & Soliders',
    neighborhood: 'West Midtown',
    address: '691 14th St NW, Atlanta, GA 30318',
    url: 'http://cooksandsoldiers.com/',
    tagline: 'Upscale restaurant serving Basque tapas & larger shareable portions cooked on a wood-burning grill.'
  },

  {
    name: 'FLIP Burger Boutique',
    neighborhood: 'West Midtown',
    address: '1587 Howell Mill Rd, Atlanta, GA 30318',
    url: 'https://flipburgerboutique.com/',
    tagline: 'Burgers of many meat & veggie varieties with liquid nitrogen shakes & cocktails in modern digs.'
  },

  {
    name: 'Bocado',
    neighborhood: 'West Midtown',
    address: '887 Howell Mill Rd NW, Atlanta, GA 30318',
    url: 'https://www.bocadoatlanta.com/',
    tagline: 'Eclectic American eatery known for its burger & craft cocktails boasts a lofty, modern space.'
  },
  {
    name: 'JCT Bar',
    neighborhood: 'West Midtown',
    address: '1198 Howell Mill Rd #18, Atlanta, GA 30318',
    url: 'http://www.jctkitchen.com/',
    tagline: 'Updated Southern fare in hip space with late-night live music, plus upstairs bar with skyline view.'
  },
  {
    name: 'Bone Lick BBQ',
    neighborhood: 'West Midtown',
    address: '1133 Huff Rd NW, Atlanta, GA 30318',
    tagline: 'Funky spot with a no-nonsense vibe serving smoked pork, wings & other BBQ classics, plus cocktails'
  },
  {
    name: 'Twisted Soul Cookhouse & Pours',
    neighborhood: 'West Midtown',
    address: '1133 Huff Rd NW #D, Atlanta, GA 30318',
    url: 'https://www.twistedsoulcookhouseandpours.com/',
    tagline: 'Comfortable, modern soul food restaurant giving Southern classics & brunch a creative approach.'
  },
  {
    name: 'Little Trouble',
    neighborhood: 'West Midtown',
    address: '1170 Howell Mill Rd NW Suite P-10C, Atlanta, GA 30318',
    tagline: 'Futuristic drinks den with a moody, industrial look serving creative cocktails & Asian street food.'
  },
  {
    name: 'Marcel',
    neighborhood: 'West Midtown',
    address: '1170 Howell Mill Rd, Atlanta, GA 30318',
    url: 'http://marcelatl.com/',
    tagline: 'Ornate venue serving throwback American steakhouse food amid custom china & fancy chandeliers.'
  },
  {
    name: 'Tin Tin',
    neighborhood: 'West Midtown',
    address: '956 Brady Ave, Atlanta, 30318',
    url: 'https://tintinatl.com/',
    tagline: "Not your grandma's wine bar."
  },
  {
    name: 'Second Self Beer Company',
    neighborhood: 'West Midtown',
    address: '1317 Logan Cir NW, Atlanta, GA 30318',
    url: 'https://www.secondselfbeer.com/',
    tagline: 'Second Self is about fulfilling a dream. We are lucky enough to do that daily in our Upper Westside Atlanta brewery. We all have our passion projects or side hustles that we do because we love it. We hope you embrace YOUR Second Self and live YOUR dream. We’ll provide the beer and the event space to help make these dreams reality.'
  },
  {
    name: 'Cypress Street Pint & Plate',
    neighborhood: 'Midtown',
    address: '817 W Peachtree St Northwest E-125, Atlanta, GA 30308',
    url: 'http://cypressbar.com/',
    tagline: 'A rotating lineup of beers on tap pairs with hearty American grub at a relaxed tavern with a patio.'
  },
  {
    name: 'Eleventh Street Pub',
    neighborhood: 'Midtown',
    address: '1041 West Peachtree St Northwest, Atlanta, GA 30309',
    url: 'http://www.eleventhstreetpub.com/',
    tagline: 'Casual watering hole with sports on TV, trivia nights & a menu of wings, burgers & sandwiches.'
  },
  {
    name: 'The Highlander',
    neighborhood: 'Midtown',
    address: '931 Monroe Dr Ne ste c-101, Atlanta, GA 30308',
    url: 'http://www.thehighlanderatlanta.com/',
    tagline: 'Classic pub grub in a 21-and-over bar featuring an outdoor patio, pool tables, air hockey & pinball.'
  },
  {
    name: 'MidCity Cafe',
    neighborhood: 'Midtown',
    address: '845 Spring St NW D1, Atlanta, GA 30308',
    url: 'https://www.facebook.com/midcitycafeatl/',
    tagline: 'Bar located in Midtown Atlanta specialized in craft cocktails, tasty bites and sexy vibes'
  },
  {
    name: 'Senor Patron',
    neighborhood: 'Midtown',
    address: '860 Peachtree St NE, Atlanta, GA 30308',
    url: 'http://www.senorpatronatl.com/',
    tagline: 'Modern, airy Mexican joint offering a familiar lineup of tacos & margaritas in lively surrounds.'
  },
  {
    name: 'Torched Hop',
    neighborhood: 'Midtown',
    address: '249 Ponce De Leon Ave NE, Atlanta, GA 30308',
    url: 'http://www.torchedhopbrewing.com/',
    tagline: 'Roomy taproom offering housemade beers & creative New American pub fare in lofty digs with bocce.'
  },
  {
    name: "Henry's Midtown Tavern",
    neighborhood: 'Midtown',
    address: '132 10th St NE, Atlanta, GA, 30309',
    url: 'http://www.henrysatl.com/',
    tagline: 'Upscale pub grub & cocktails presented in a modern eatery & bar amid reclaimed woods & a large deck.'
  },
  {
    name: 'The Nook on Piedmont Park',
    neighborhood: 'Midtown',
    address: '1144 Piedmont Ave NE, Atlanta, GA 30309',
    url: 'https://thenookatlanta.com/',
    tagline: 'Tater tots with toppings are on the menu at popular neighborhood bar with park views.'
  },
  {
    name: '5Church Atlanta',
    neighborhood: 'Midtown',
    address: '1197 Peachtree St NE #528, Atlanta, GA 30361',
    url: 'http://5churchatlanta.com/',
    tagline: 'Hip locale for steaks & New American fare in an upscale space, plus cocktails & weekend brunch.'
  },
  {
    name: 'Establishment',
    neighborhood: 'Midtown',
    address: '1197 Peachtree St NE #517, Atlanta, GA 30305',
    url: 'https://www.establishmentatlanta.com/',
    tagline: 'Upscale lounge serving craft cocktails & small plates amid rustic-chic, antebellum-influenced decor.'
  },
  {
    name: 'Ri Ra Irish Pub',
    neighborhood: 'Midtown',
    address: '1080 Peachtree St NE #1, Atlanta, GA 30309',
    url: 'https://rira.com/atlanta/',
    tagline: 'A REAL IRISH LOCAL PUB IN ATLANTA'
  },
  {
    name: '10th & Piedmont',
    neighborhood: 'Midtown',
    address: '991 Piedmont Ave NE, Atlanta, GA 30309',
    url: 'http://www.10thandpiedmont.com/',
    tagline: 'Small plates mix global cuisine with Southern accents in a modern space with late-night DJs.'
  },
  {
    name: 'Zocalo Mexican Kitchen & Cantina',
    neighborhood: 'Midtown',
    address: '187 10th St NE, Atlanta, GA 30309',
    url: 'https://www.eatzocalo.com/',
    tagline: 'Chef Richard Sandoval offers upscale Mexican comfort food & many tequilas in casual, stylish space.'
  },
  {
    name: 'Park Tavern',
    neighborhood: 'Midtown',
    address: '500 10th St NE, Atlanta, GA 30309',
    url: 'http://www.parktavern.com/',
    tagline: 'Set in a stone house, this eclectic bar/restaurant offers burgers, sushi & a patio with park views.'
  },
  {
    name: 'The Canteen',
    neighborhood: 'Midtown',
    address: '75 5th St NW #170, Atlanta, GA 30308',
    url: 'http://www.thecanteenatl.com/',
    tagline: 'All-day food hall with stalls serving burgers, sandwiches, bagels, Israeli fare, cocktails & coffee.'
  },
  {
    name: 'Fado Irish Pub',
    neighborhood: 'Midtown',
    address: '933 Peachtree St NE, Atlanta, GA 30309',
    url: 'https://fadoirishpub.com/atlanta-midtown/',
    tagline: 'Upscale tavern fare is served in an ornate, traditional pub setting with quiz nights & TV soccer.'
  },
  {
    name: 'Hudson Grille',
    neighborhood: 'Midtown',
    address: '942 Peachtree St NE, Atlanta, GA 30309',
    url: 'https://hudsongrille.com/',
    tagline: 'Local sports-bar chain serving a menu of burgers, wings, steaks & seafood in a stylish setting.'
  },
  {
    name: "Smith's Olde Bar",
    neighborhood: 'Midtown',
    address: '1578 Piedmont Ave NE, Atlanta, GA 303024',
    url: 'https://www.smithsoldebar.com/',
    tagline: 'American pub fare, pool tables & frequent live music with DJs on weekends.'
  },
  {
    name: 'Takorea',
    neighborhood: 'Midtown',
    address: '818 Juniper St NE, Atlanta, GA 30308',
    url: 'http://www.mytakorea.com/',
    tagline: 'Lively taqueria with a year-round porch, mixing Mexican & Korean street eats, plus signature drinks.'
  },
  {
    name: 'HobNob Neighborhood Tavern',
    neighborhood: 'Midtown',
    address: '1551 Piedmont Ave NE, Atlanta, GA 30324',
    url: 'https://www.hobnobatlanta.com/',
    tagline: 'Rustic decor, refined pub grub & plenty of beer reinforce the casual vibe of this neighborhood spot.'
  },
  {
    name: 'Publik Draft House',
    neighborhood: 'Midtown',
    address: '654 Peachtree St NE, Atlanta, GA 30308',
    url: 'https://www.publikatl.com/',
    tagline: 'We look forward to offering you a dynamic atmosphere while supporting local artists and musicians.'
  },
  {
    name: 'Deep End',
    neighborhood: 'Midtown',
    address: '621 North Avenue NE B100, Atlanta, GA 30308',
    url: 'https://www.deependatl.com/',
    tagline: 'Swim into the Deep End! We offer great food and exciting events in Atlanta'
  },
  {
    name: 'The Hideaway',
    neighborhood: 'Midtown',
    address: '1544 Piedmont Ave NE, Atlanta, GA 30324',
    url: 'http://atlantahideaway.com/',
    tagline: 'There are no strangers here, only friends who have not met.'
  },
  {
    name: 'Midtown Tavern',
    neighborhood: 'Midtown',
    address: '554 Piedmont Ave NE, Atlanta, GA 30308',
    url: 'https://www.midtowntavern.net/',
    tagline: 'Tuesday - Saturday 5:00 PM - 3:00 AM, Sunday 1:00 -8:00 PM'
  },
  {
    name: 'City Winery',
    neighborhood: 'Midtown',
    address: '650 North Avenue NE, Atlanta, GA 30308',
    url: 'https://citywinery.com/atlanta/',
    tagline: 'Experience our passion in sharing wine, music, and the culinary arts.'
  }
];

const events = [
  {
    name: "Dirty South Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes:
      "Our goal is to create a fun and competitive environment, not to stump you with ridiculously hard questions.",
    day: ["Monday"],
    isRecuring: true,
    time: "8:30"
  },
  {
    name: "TWOSDAY",
    restaurant: {},
    category: ["Unique"],
    describes:
      "Ride in on your motorcycle and 1/2 off the nightly food special!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Jamon Happy Hour",
    restaurant: {},
    category: ["Happy Hour", "Food Specials"],
    describes:
      "Custom meat and cheese boards: Three Meats $22, Three Cheese $10",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "Drunk Bingo",
    restaurant: {},
    category: ["Bingo"],
    describes:
      "Come in and play classic bingo but with a twist, with the chance to win great prizes.",
    day: ["Thursday"],
    isRecuring: true,
    time: "10"
  },
  {
    name: "Drink & Draw",
    restaurant: {},
    category: ["Unique"],
    describes:
      "Come join us the 1st Monday every month for a casual drink and draw hosted by our own JJ Allen.",
    day: ["Monday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Nerd Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes:
      "Join us. This is the trivia you've been looking for. It's not a trap. ",
    day: ["Tuesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Half Price Oysters",
    restaurant: {},
    category: ["Food Specials", "Happy Hour"],
    describes: "Enjoy 1/2 off oysters on the Raw Bar Menu",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "$2 Highlife",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Enjoy $2 16oz cans of Miller Highlife.",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$5 Tecate & Tequila",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "$5 for a combo of an El Jimador shot and a 16oz can of Tecate.",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$3 Drafts and Well Drinks",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Enjoy a selection of drafts and well cocktails for only $3!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$5 Local Draft Beers",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Get Georgia drafts for $5",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Half Price Apps",
    restaurant: {},
    category: ["Food Specials", "Happy Hour"],
    describes: "Get 1/2 off apps after six pm.",
    day: ["Thursday"],
    isRecuring: true,
    time: "6-11"
  },
  {
    name: "Trivia",
    restaurant: { cor },
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Sound Check Bingo ",
    restaurant: {},
    category: ["Bingo"],
    describes: "Decipher songs to fill out your bingo card!",
    day: ["Thursday"],
    isRecuring: true,
    time: "7:30"
  },
  {
    name: "Trivia",
    restaurant: { mel },
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "7:30"
  },
  {
    name: "Trivia",
    restaurant: { bur },
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Thursday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Monday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Wings + Beer $10",
    restaurant: {},
    category: ["Food Specials", "Drink Specials"],
    describes:
      "Join us every Tuesday and get 8 Springer Mountain Chicken Wings and a 12oz house beer for $10",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Burger + Beer $11",
    restaurant: {},
    category: ["Food Specials", "Drink Specials"],
    describes:
      "Enjoy a juicy Brasstown Farm huckburger, Springer Mountain Chicken burger, or our home-made smoked beet burger – add cheese if you’d like – along with a regular side, and choose a 12 oz. Twain’s ale to help wash it down.",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Whiskey Wednesday",
    restaurant: {},
    category: ["Drink Specials", "Happy Hour"],
    describes: "All whiskey cocktails are only $5",
    day: ["Wednesday"],
    isRecuring: true,
    time: "5"
  },

  {
    name: "Bottomless Mimosas",
    restaurant: {},
    category: ["Brunch", "Drink Specials"],
    describes:
      "Brunch wouldn’t be the same without Bottomless Mimosas. Luckily, the brunch menu has you covered with both Bottomless Mimosas and Bloody Marys available for $15.",
    day: ["Sunday"],
    isRecuring: true,
    time: "11-2:30"
  },
  {
    name: "BOGO Ramen",
    restaurant: {},
    category: ["Food Specials"],
    describes: "Buy one Ramen bowl and get another free!",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$5 Cocktails",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Get all classic cocktails for only $5",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Half Price Wine",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Select glasses of wine are half priced all day long",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$3 Sangria",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Enjoy yourself a glass of sangria from only $3!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },

  {
    name: "$3 Draft Beers",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "16oz draft beers are only $3 all day.",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Bottomless Sangria",
    restaurant: {},
    category: ["Drink Specials", "Brunch"],
    describes: "Bottomless Sangria is $12 for Saturday brunch.",
    day: ["Saturday"],
    isRecuring: true,
    time: "12-5"
  },
  {
    name: "Bottomless Mimosas",
    restaurant: {},
    category: ["Drink Specials", "Brunch"],
    describes: "Bottomless Mimosas are $12 for Sunday brunch.",
    day: ["Sunday"],
    isRecuring: true,
    time: "12-5"
  },
  {
    name: "Half Price Wine",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "All bottles of wine are half off for parties of five or fewer",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "7:30"
  },
  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Thursday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "$10 Pitchers",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Get $10 Dos XX Pitchers all day long!",
    day: ["Saturday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$2.50 Sangrias and Bloody Marys",
    restaurant: {},
    category: ["Drink Specials", "Brunch"],
    describes: "$2.50 Sangrias and Bloody Marys",
    day: ["Sunday"],
    isRecuring: true,
    time: "12-3"
  },
  {
    name: "Sound Check Bingo",
    restaurant: { mojo },
    category: ["Bingo"],
    describes: "Decipher songs to fill out your bingo card!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "7"
  },
  {
    name: "Trivia",
    restaurant: { imp },
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Monday"],
    isRecuring: true,
    time: "8:30"
  },
  {
    name: "Bend & Beer",
    restaurant: {},
    category: ["Unique", "Drink Specials"],
    describes:
      "We’re opening an hour early for yoga— attendees are invited to stay for a FREE beer after class on us.",
    day: ["Sunday"],
    isRecuring: true,
    time: "12"
  },

  {

    name: "Wayback Wednesday",
    restaurant: {},
    category: ["Unique"],
    describes: "Enjoy a free retro movie while you sip on your beer.",
    day: ["Wednesday"],
    isRecuring: true,
    time: "6:15"
  },
  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Thursday"],
    isRecuring: true,
    time: "6:30"
  },

  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Thursday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Half Price Sake",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Enjoy half priced sake bottles!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },

  {
    name: "Half Price Wine",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Enjoy half priced wine bottles!",
    day: ["Sunday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Half Price Sushi",
    restaurant: {},
    category: ["Happy Hour", "Food Specials"],
    describes: "Sushi rolls are 1/2 off",
    day: ["Monday", "Wednesday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "Late Night Sushi",
    restaurant: {},
    category: ["Food Specials", "Late Night"],
    describes: "Enjoy half priced sushi rolls after 11pm",
    day: ["Friday", "Saturday"],
    isRecuring: true,
    time: "11-1"
  },
  {
    name: "$1 oysters",
    restaurant: {},
    category: ["Happy Hour", "Food Specials"],
    describes: "Enjoy a selection of $1 oysters in the Oyster Bar",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-6"
  },
  {
    name: "$1 oysters",
    restaurant: {},
    category: ["Happy Hour", "Food Specials"],
    describes: "Enjoy a selection of $1 oysters in the Oyster Bar",
    day: ["Saturday", "Sunday"],
    isRecuring: true,
    time: "3-5"
  },
  {
    name: "Trivia",
    restaurant: [],
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "7:30"
  },
  {
    name: "Bottomless Belinis",
    restaurant: {},
    category: ["Drink Specials", "Brunch"],
    describes: "Bottomless Belinis are only $10 for brunch!",
    day: ["Sunday"],
    isRecuring: true,
    time: "12:30-2:30"
  },
  {
    name: "Half Price Wine",
    restaurant: {},
    category: ["Drink Specials", "Happy Hour"],
    describes: "Half priced wine bottles available all day",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "$4 Pint Night",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "$4 pint is for our core and rotator beers",
    day: ["Tuesday", "Wednesday"],
    isRecuring: true,
    time: "4"
  },
  {
    name: "Boards and Brews",
    restaurant: {},
    category: ["Unique"],
    describes:
      "Every Tuesday night, come join us and your board gaming friends.",
    day: ["Tuesday"],
    isRecuring: true,
    time: "4"
  },
  {
    name: "Throwback Thursday",
    restaurant: {},
    category: ["Unique"],
    describes: "$12 gets you a brewery tour, a pint glass and 6 tastings.",
    day: ["Thursday"],
    isRecuring: true,
    time: "4"
  },
  {
    name: "Half Price Wine",
    restaurant: {},
    category: ["Drink Specials", "Happy Hour"],
    describes: "Enjoy half priced wine bottles for happy hour!",
    day: ["Monday"],
    isRecuring: true,
    time: "4-12"
  },
  {
    name: "$5 Small Plates",
    restaurant: {},
    category: ["Food Specials", "Happy Hour"],
    describes: "Select small plates are onyl $5",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "$4 Mojitos",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Enjoy $4 mojitos all day!",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "7:30"
  },
  {
    name: "$4 Martinis",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Martinis are just $4 all day long",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },

  {
    name: "$4 Margaritas",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Margaritas are only $4 all day long",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$4 Drafts & $3 Cans",
    restaurant: [],
    category: ["Drink Specials"],
    describes:
      "Help FLIP clean out the beer basement! Drafts are $4, and craft cans are $3.",
    day: ["Sunday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Burger + Beer $13",
    restaurant: {},
    category: ["Food Specials", "Drink Specials"],
    describes:
      "Grab a double-stack burger, fries and beer for $13 on Tuesday nights.",
    day: ["Tuesday"],
    isRecuring: true,
    time: "6"
  },
  {
    name: "Live Music",
    restaurant: {},
    category: ["Live Music"],
    describes: "Live Music at the upstairs bar",
    day: ["Thursday"],
    isRecuring: true,
    time: "6"
  },
  {
    name: "Live Music",
    restaurant: {},
    category: ["Live Music"],
    describes: "Live Music at the upstairs bar",
    day: ["Friday"],
    isRecuring: true,
    time: "9"
  },
  {
    name: "Live DJ",
    restaurant: {},
    category: ["Live Music"],
    describes: "Live Music at the upstairs bar",
    day: ["Saturday"],
    isRecuring: true,
    time: "9"
  },
  {
    name: "Thirsty Thursdays",
    restaurant: {},
    category: ["Drink Specials"],
    describes:
      "On Thursdays, get a $6 punch or cocktail of the day, $2.50 beers, or $6 glasses of wine ($24 for the entire bottle) at the upstairs bar at JCT.",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$2 Tuesdays",
    restaurant: {},
    category: ["Drink Specials", "Food Specials"],
    describes:
      "On $2 Tuesdays, get $2 Tecates and select shots, along with $2 sliders, boiled peanuts, and pork rinds.",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$5 Small Plates",
    restaurant: {},
    category: ["Food Specials", "Happy Hour"],
    describes:
      "$5 for wings of the day, sliders, seafood cocktail, or fried green tomatoes",
    day: ["Tuesday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "Wine Down Wednesday",
    restaurant: {},
    category: ["Food Specials", "Drink Specials"],
    describes: "1/2 price on select bottles and get a free charcuerie board!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Live Music",
    restaurant: {},
    category: ["Live Music"],
    describes: "Enjoy local musicians every 1st and 3rd thursday",
    day: ["Thursday"],
    isRecuring: true,
    time: "7"
  },
  {
    name: "$5 Happy Hour",
    restaurant: {},
    category: ["Happy Hour", "Drink Specials", "Food Specials"],
    describes: "$5 Asian street bites and high-octane house drinks",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "Late Night Deals",
    restaurant: {},
    category: ["Food Specials"],
    describes: "Get a special menu of $10 plates after 11:30pm",
    day: ["Friday", "Saturday"],
    isRecuring: true,
    time: "11:30-2"
  },
  {

    name: "Mussel Mondays",
    restaurant: {},
    category: ["Food Specials", "Happy Hour"],
    describes: "All you can eat mussels served with house cut fries, $29",
    day: ["Monday"],
    isRecuring: true,
    time: "4-10"
  },
  {
    name: "Comedy Night",
    restaurant: {},
    category: ["Unique"],
    describes: "Enjoy a FREE comedy night every last Friday of the month",
    day: ["Friday"],
    isRecuring: true,
    time: "7"
  },
  {

    name: "$2 Tacos",
    restaurant: {},
    category: ["Food Specials"],
    describes: "Rotating $2 tacos all day",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Beer Geek Tuesdays",
    restaurant: {},
    category: ["Drink Specials"],
    describes:
      "Every tuesday, themed beer flights are hand curated to showcase specialty beers",
    day: ["Tuesday"],
    isRecuring: true,
    time: "6"
  },
  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Half Price Wine",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Get all wine bottles half off",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Half Price Apps",
    restaurant: {},
    category: ["Happy Hour", "Food Specials"],
    describes:
      "Pub Fries, Hummus, Fried Mushrooms, and Chicken Quesdilla are 1/2 off 5-7",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "Brunch",
    restaurant: {},
    category: ["Brunch"],
    describes: "$3 mimosas and special brunch menu",
    day: ["Saturday", "Sunday"],
    isRecuring: true,
    time: "10-2"
  },
  {
    name: "Rock Paper Scissors Tournament",
    restaurant: {},
    category: ["Unique"],
    describes: "FREE TO PLAY! Winner recieves $100 CASH!",
    day: ["Thursday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "$2 Tacos",
    restaurant: {},
    category: ["Food Specials"],
    describes: "Enjoy $2 tacos after 8pm",
    day: ["Thursday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Drunk Bingo",
    restaurant: {},
    category: ["Trivia"],
    describes:
      "Come in and play classic bingo but with a twist, with the chance to win great prizes.",
    day: ["Monday"],
    isRecuring: true,
    time: "10"
  },
  {
    name: "All you can eat crab legs",
    restaurant: {},
    category: ["Food Specials"],
    describes:
      "Tuesday means crab legs - all you can eat (until they run out) for $39.95 PER PERSON!",
    day: ["Tuesday"],

    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Punk & Metal Karaoke",
    restaurant: {},
    category: ["Karaoke"],
    describes:
      "A large selection of PUNK ROCK, HEAVY METAL, & NEW WAVE 80's songs to choose from.",
    day: ["Wednesday"],
    isRecuring: true,
    time: "10"
  },
  {
    name: "$6.66 Burgers",
    restaurant: {},
    category: ["Food Specials"],
    describes: "$6.66 for any burger all day long",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },

  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes:
      "Come play trivia on Sunday nights and walk away with valuable prizes and elevated self-esteem!",
    day: ["Sunday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Live Music",
    restaurant: {},
    category: ["Live Music", "Drink Specials"],
    describes: "Live Music and $7 glasses of wine",
    day: ["Wednesday"],
    isRecuring: true,

    time: "7"
  },
  {
    name: "Ladies Night",
    restaurant: {},
    category: ["Drink Specials", "Live Music"],
    describes: "Half off craft cocktails and live DJ",
    day: ["Thursday"],
    isRecuring: true,
    time: "7"
  },
  {
    name: "$3 Margaritas",
    restaurant: {},
    category: ["Drink Specials"],
    describes:
      "House margaritas are $3 for a 12oz, $7 for a 32oz, and only $15 for a whopping 60oz all day!",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$3 Draft Beer",
    restaurant: {},
    category: ["Drink Specials"],
    describes:
      "Draft Beers are on special all day long. A 16oz is $3, a 32oz draft is $5, and a 60oz pitcher is only $11.",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$2 Bottled Beer",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Enjoy $2 bottled beer all day",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$5 Texas Margaritas",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Senor Patron’s signature Texas margaritas are only $5.",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Sunday Funday",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "$4 mojitos all day long",
    day: ["Sunday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Happy Hour",
    restaurant: {},
    category: ["Happy Hour", "Drink Specials"],
    describes: "House margaritas and draft beers are $3.50 for happy hour",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "4-6"
  },
  {
    name: "Burger Monday",
    restaurant: {},
    category: ["Food Specials", "Drink Specials"],
    describes:
      "Classic Double, fries and house draft for $10 plus Bocce Ball downstairs",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Taco Tuesday",
    restaurant: {},
    category: ["Food Specials"],
    describes: "$3 tacos and Bocce Ball downstairs",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Wing Wednesday",
    restaurant: {},
    category: ["Food Specials", "Drink Specials"],
    describes: "12 wings and a house draft for $12, plus Bocce Ball downstairs",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$3 Miller Lite",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "$3 Miller lite tallboys",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Wing Wednesday",
    restaurant: {},
    category: ["Food Specials"],
    describes: "Get a pound of wings for $6 every hump day!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Half Price Apps",
    restaurant: {},
    category: ["Food Specials"],
    describes: "Enjoy half price apps at the back bar only",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    isRecuring: true,
    time: "4"
  },
  {
    name: "Half Price Wine",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Enjoy 1/2 off wine GLASSES all day",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Fried Chicken",
    restaurant: {},
    category: ["Drink Specials", "Food Specials", "Happy Hour"],
    describes:
      "George’s Famous Fried Chicken with two sides and a craft beer for $18.",
    day: ["Tuesday"],
    isRecuring: true,
    time: "4"
  },
  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "BOGO Tachos",
    restaurant: {},
    category: ["Happy Hour", "Food Specials"],
    describes: "All tachos are buy one get one 5-7pm",
    day: ["Thursday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "$3 Mimosas",
    restaurant: {},
    category: ["Brunch", "Drink Specials"],
    describes: "Sunday Brunch means $3 mimosas and $15 carafes.",
    day: ["Sunday"],
    isRecuring: true,
    time: "12-3"
  },
  {
    name: "Live Music",
    restaurant: {},
    category: ["Live Music", "Drink Specials"],
    describes:
      "There is live music, $3 Fireball shots, $2 Hamm’s Tallboys, and $4 Miller Tallboys to finish off the weekend.",
    day: ["Sunday"],
    isRecuring: true,
    time: "5"
  },

  {
    name: "Happy Hour",
    restaurant: {},
    category: ["Happy Hour", "Drink Specials", "Food Specials"],
    describes: "Apps are $8, wins is $6, and beer is $4",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    isRecuring: true,
    time: "4:30-6:30"
  },
  {
    name: "$6 Cocktails",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Classic cocktails are only $6 from noon to close.",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Whiskey Wednesday",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "$8 Woodford reserve cocktails",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$4.50 Terrapin",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Rotating Terrapin cans are only $4.50",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$5 Appetizers",
    restaurant: {},
    category: ["Food Specials"],
    describes: "Apps are $5",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "4:30-7"
  },
  {
    name: "Half Price Apps",
    restaurant: {},
    category: ["Food Specials", "Happy Hour"],
    describes: "Enjoy 1/2 price apps for Happy Hour",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "4-7"
  },
  {
    name: "$4 Beers",
    restaurant: {},
    category: ["Drink Specials", "Happy Hour"],
    describes: "Select rotating beers are $4",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "4-7"
  },
  {
    name: "Half Price Cocktails",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "1/2 off any signature cocktails",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$3 Moonshine",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "$3 for any cocktail with moonshine!",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Bottomless Mimosas",
    restaurant: {},
    category: ["Brunch", "Drink Specials"],
    describes: "Enjoy bottomless mimosas for brunch",
    day: ["Sunday"],
    isRecuring: true,
    time: "11-3"
  },
  {
    name: "$4 Well Drinks",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "$4 well drinks and shots all day",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$2 Tuesdays",
    restaurant: {},
    category: ["Food Specials", "Drink Specials"],
    describes: "All tacos are $2, as well as $2 Tecates and $4 moonshine",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$4 Mojitos",
    restaurant: {},
    category: ["Drink SPecials"],
    describes: "$4 Mojitos all day",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$5 Sangria",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "On Thursday only, sangria is $5 or $19 for a pitcher.",
    day: ["Thursday"],
    isRecuring: true,
    time: "All Day"
  },

  {
    name: "$4 Margaritas",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "$4 house margaritas on the rocks",
    day: ["Friday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Bottomless Drinks",
    restaurant: {},
    category: ["Drink Specials", "Brunch"],
    describes: "2 time limit on bottomless margs, bloodys, and mimosas",
    day: ["Sunday"],
    isRecuring: true,
    time: "11-6"
  },
  {
    name: "Half Price Wine",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Half off wine bottles",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Beer Flights",
    restaurant: {},
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
    restaurant: {},
    category: ["Food Specials"],
    describes: "Fred's Cheesesteaks are $10 after 3pm",
    day: ["Tuesday"],
    isRecuring: true,
    time: "3"
  },
  {
    name: "Burger + Fries + Coke",
    restaurant: {},
    category: ["Food Specials"],
    describes:
      "Burger Stack + Small Fries + Canned Coke or Diet Coke from Fred's Meat & Bread, just $9.95, plus tax",
    day: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    isRecuring: true,
    time: "3"
  },
  {
    name: "Pita + Soda",
    restaurant: {},
    category: ["Food Specials"],
    describes:
      "Falafel Pita + Pickles + All Natural Housemade Soda from Yalla, just $8.95, plus tax",
    day: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    isRecuring: true,
    time: "3"
  },
  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes: "Usually Harry Potter themed!",
    day: ["Thursday"],
    isRecuring: true,
    time: "6:30"
  },
  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Bottomless Mules",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Bottomless Mules from 7-9 p.m. – $21 per person",
    day: ["Friday"],
    isRecuring: true,
    time: "7-9"
  },
  {
    name: "Happy Hour",
    restaurant: {},
    category: ["Happy Hour", "Drink Specials", "Food Specials"],
    describes:
      "Bar snacks are $6, select beer is $5, select wine and cocktails are $7.",
    day: ["Friday"],
    isRecuring: true,
    time: "4-7"
  },
  {
    name: "BOGO Tacos",
    restaurant: {},
    category: ["Food Specials"],
    describes: "Buy one get one tacos",
    day: ["Friday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Wednesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "$5 Off",
    restaurant: {},
    category: ["Food Specials"],
    describes: "$5 off big plates after 5pm",
    day: ["Sunday"],
    isRecuring: true,
    time: "5"
  },
  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes: "Get your team together for a chance to win house cash!",
    day: ["Thursday"],
    isRecuring: true,
    time: "8"
  },

  {
    name: "$5 Burritos",
    restaurant: {},
    category: ["Food Specials"],
    describes: "Burritos are only avaiable on Mondays and they're $5!",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "$4 Mojitos",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "Enjoy $4 mojitos all day",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Tako Tuesday",
    restaurant: {},
    category: ["Food Specials"],
    describes: "$2 classic tacos, $3 premium tacos",
    day: ["Tuesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Wine Wednesday",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "1/2 off bottles of wine",
    day: ["Wednesday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes: "Team Trivia and $10 buckets of beer",
    day: ["Thursday"],
    isRecuring: true,
    time: "8"
  },

  {
    name: "$3 Drinks",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "$3 Hite and Miller Draft, $3 Shots",
    day: ["Friday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Burger + Beer $10",
    restaurant: {},
    category: ["Food Specials", "Drink Specials"],
    describes: "Burger and 12oz pour = $10",
    day: ["Monday"],
    isRecuring: true,
    time: "All Day"
  },
  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes: "Team Trivia 8pm Play for $6000 Grand Prize",
    day: ["Tuesday"],
    isRecuring: true,
    time: "8"
  },
  {
    name: "Slider Night",
    restaurant: {},
    category: ["Food Specials"],
    describes: "$3.50 Sliders 5-10pm",
    day: ["Wednesday"],
    isRecuring: true,
    time: "5-10"
  },
  {
    name: "Whiskey Flights",
    restaurant: {},
    category: ["Drink Specials"],
    describes: "$15 Whiskey Flights",
    day: ["Thursday"],
    isRecuring: true,
    time: "5-10"
  },
  {
    name: "Live Music",
    restaurant: {},
    category: ["Live Music"],
    describes: "Live Music",
    day: ["Sunday"],
    isRecuring: true,
    time: "1-4"
  },
  {
    name: "Bottomless Mimosas",
    restaurant: {},
    category: ["Brunch", "Drink Specials"],
    describes: "Bottomless mimosas at brunch are only $17",
    day: ["Saturday", "Sunday"],
    isRecuring: true,
    time: "11-4"
  },
  {
    name: "Fried Chicken Night",
    restaurant: {},
    category: ["Food Specials"],
    describes: "100% All Natural Springer Mountain Chicken",
    day: ["Sunday"],
    isRecuring: true,
    time: "5-9"
  },
  {
    name: "$2 Tacos",
    restaurant: {},
    category: ["Food Specials"],
    describes: "$2 tacos after 6pm",
    day: ["Tuesday"],
    isRecuring: true,
    time: "6"
  },
  {
    name: "Free Apps",
    restaurant: {},
    category: ["Food Specials", "Happy Hour"],
    describes: "Free app with the purchase of a drink from 4-6",
    day: ["Friday"],
    isRecuring: true,
    time: "4-6"
  },
  {
    name: "Press Start",
    restaurant: {},
    category: ["Unique"],
    describes:
      "Lofi beats, video games from wall to wall, giveaways and awesome food.",
    day: ["Monday"],
    isRecuring: true,
    time: "9"
  },
  {
    name: "Drag Queen Bingo",
    restaurant: {},
    category: ["Unique", "Bingo"],
    describes:
      "Leave your filters at the door because Tuesday nights at Deep End are now Drag Bingo hosted by Brent Star!",
    day: ["Tuesday"],
    isRecuring: true,
    time: "8"
  },

  {
    name: "$1 Tacos",
    restaurant: {},
    category: [""],
    describes: "$1 tacos after 5pm as well as Dickel Tennesee Whiskey for $5",
    day: ["Tuesday"],
    isRecuring: true,
    time: "5"
  },
  {
    name: "ATL D&D",
    restaurant: {},
    category: ["Unique"],
    describes:
      "Join Atlanta Drunks & Dragons for a foray in the Dungeons and Dragons universe. ",
    day: ["Thursday"],
    isRecuring: true,
    time: "7-10"
  },
  {
    name: "Bottomless Drinks",
    restaurant: {},
    category: ["Brunch", "Drink Specials"],
    describes:
      "We're doing bottomless mimosas and bloody mary's every weekend from noon until 3pm.",
    day: ["Saturday", "Sunday"],
    isRecuring: true,
    time: "12-3"
  },
  {
    name: "Happiest Hours",
    restaurant: {},
    category: ["Happy Hour", "Drink Specials", "Food Specials"],
    describes: "$6 cocktails and buy one get one of your favorite appetizers!",
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isRecuring: true,
    time: "5-7"
  },
  {
    name: "Trivia",
    restaurant: {},
    category: ["Trivia"],
    describes:
      "Fire up those brain cells, it’s time for Trivia Tuesdays with DeWayne Morgan. ",
    day: ["Tuesday"],
    isRecuring: true,
    time: "8:30"
  },
  {
    name: "Drag Queen Bingo",
    restaurant: {},
    category: ["Bingo", "Unique"],
    describes:
      "The Hideaway is proud to present Birdcage Bingo, hosted by drag queen extraordinaire Ruby Redd.",
    day: ["Wednesday"],
    isRecuring: true,
    time: "8:30"

  },
  {
    name: "Karaoke Night",
    restaurant: {},
    category: ["Karaoke"],
    describes: "Karaoke Night hosted by Sinnamen Success",
    day: ["Friday"],
    isRecuring: true,
    time: "9"
  },
  {
    name: "$2 Tuesdays",
    restaurant: {},
    category: ["Food Specials", "Drink Specials", "Happy Hour"],
    describes:
      "$2 drinks, tacos, shots, beers, & hookah specials all night long",
    day: ["Tuesday"],
    isRecuring: true,
    time: "7-2am"
  },
  {
    name: "Wine Down Weekends",
    restaurant: {},
    category: ["Live Music"],
    describes:
      "While attending a free concert, you can order food from the City Winery menu, sip wine from the 315-bottle selection, and enjoy craft beer or a signature cocktail.",
    day: ["Friday", "Saturday"],
    isRecuring: true,
    time: "6:30"

  }
];

const users = [
  {
    email: "ewok@gmail.com",
    password: "testing"
  }
];

db.Restaurant.deleteMany({})
  .then(() => db.Restaurant.collection.insertMany(restaurants))
  .then(data => {
    console.log(data.insertedCount + " records inserted!");
  });
db.Event.deleteMany({})
  .then(() => db.Event.collection.insertMany(events))
  .then(data => {
    console.log(data.insertedCount + " records inserted!");
  });
db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(users))
  .then(data => {
    console.log(data.insertedCount + " records inserted!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
    mongoose.connection.close();
  });
