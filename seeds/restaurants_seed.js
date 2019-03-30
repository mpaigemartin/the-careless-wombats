const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nightOwl');

const restaurants = [
  {
    name: 'Grindhouse Killer Burgers',
    neighborhood: 'Decatur',
    address: '433 N McDonough St, Decatur, GA 30030',
    
      lat: 33.772593,
      lng: -84.296396,
    
    url: 'http://www.grindhouseburgers.com/',
    tagline: 'Local chain serving burgers, chili & shakes in a hip space with B-movies projected on the walls'
  },
  {
    name: 'Victory Sandwich Bar',
    neighborhood: 'Decatur',
    address: '340 Church St, Decatur, GA 30030',
    url: 'http://www.vicsandwich.com/',
    tagline: 'Buzzy, industrial-chic tavern featuring inventive sandwiches & cocktails, plus a patio.',
    
      lat: 33.763958,
      lng: -84.357743
    
  },
  {
    name: 'The Iberian Pig',
    neighborhood: 'Decatur',
    address: '121 Sycamore St, Decatur, GA 30030',
    url: 'https://www.theiberianpigatl.com/#contemporary-spanish-tapas',
    tagline: 'Eatery serves all things pig via tapas & entrees, plus cocktails & wine in a modern setting.',
    
      lat: 33.77438,
      lng: -84.296
    
  },
  {
    name: "My Parent's Basement",
    neighborhood: 'Decatur',
    address: '22 N Avondale Rd, Avondale Estates, GA 30002',
    url: 'www.myparentsbasementcbcb.com/',
    tagline: 'Combination comic-book store & taproom serving up local craft beer & creative bar food.',
    
      lat: 33.775667,
      lng: -84.27236
    
  },
  {
    name: 'Trackside Tavern',
    neighborhood: 'Decatur',
    address: '313 E College Ave, Decatur, GA 30030',
    url: 'https://www.facebook.com/Trackside-Tavern-229206620473232/',
    tagline: 'A longtime neighborhood joint serving up drink specials & pub grub, with billiards & darts.',
    
      lat: 33.771096,
      lng: -84.292013
    
  },
  {
    name: 'Kimball House',
    neighborhood: 'Decatur',
    address: '303 E Howard Ave, Decatur, GA 30030',
    url: 'http://www.kimball-house.com/',
    tagline: 'Once a railroad station, this sleek eatery & raw bar serves farm-to-table entrees with French flair.',
    
      lat: 33.771624,
      lng: -84.292186
    
  },
  {
    name: 'The Square Pub',
    neighborhood: 'Decatur',
    address: '115 Sycamore St, Decatur, GA 30030',
    url: 'http://www.squarepubdecatur.com/',
    tagline: 'Southwest-inspired dishes, plus cocktails & brews in a large, laid-back environment.',
    
      lat: 33.774482,
      lng: -84.296109
    
  },
  {
    name: 'The Corner Pub',
    neighborhood: 'Decatur',
    address: '627 E College Ave D, Decatur, GA 300330',
    url: 'https://www.pubalicious.com/',
    tagline: 'Neighborhood watering hole serving specialty beers & updated pub fare in a cozy, wood-filled space.',
    
      lat: 38.605193,
      lng: -90.583312
    
  },
  {
    name: 'Mellow Mushroom',
    neighborhood: 'Decatur',
    address: '340 W Ponce de Leon Ave, Decatur, GA 30030',
    url:'https://mellowmushroom.com/location/ga-decatur-340-west-ponce-de-leon-avenue-30030/',
    tagline: 'Funky, art-filled chain pizzeria featuring craft beer, calzones & creative stone-baked pizzas.',
    
      lat: 36.121689,
      lng: -94.138508
    
  },
  {
    name: 'Raging Burrito',
    neighborhood: 'Decatur',
    address: '141 Sycamore St, Decatur, GA 30030',
    url: 'http://ragingburrito.com/',
    tagline: 'Laid-back eatery offers updated Tex-Mex classics, a full lineup of craft beers & 50+ tequilas.',
    
      lat: 33.774361,
      lng: -84.295414
    
  },
  {
    name: 'Twains Brewpub & Billiards',
    neighborhood: 'Decatur',
    address: '211 E Trinity Pl, Decatur, GA 30030',
    url: 'http://www.twains.net/',
    tagline: 'Gastropub with house-brewed tap beers, shuffleboard, pool & darts, plus trivia on Mondays.',
    
      lat: 33.7723,
      lng: -84.294598
    
  },
  {
    name: 'The Pinewood',
    neighborhood: 'Decatur',
    address: '254 W Ponce de Leon Ave, Decatur, GA 30030',
    url: 'https://www.pinewoodtr.com/',
    tagline: 'Hip, urban-rustic gastropub featuring elevated comfort food, modern cocktails & liquor flights.',
    
      lat: 33.775323,
      lng: -84.2999
    
  },
  {
    name: 'Taiyo Ramen',
    neighborhood: 'Decatur',
    address: '130 Clairemont Ave Suite 100, Decatur, GA 30030',
    url: 'https://www.koreanwives.com/taiyo-ramen/',
    tagline: 'Contemporary Japanese noodle soups & Asian small plates plus cocktails served in a hotel setting.',
    
      lat: 33.776653,
      lng: -84.296824
    
  },
  {
    name: 'Calle Latina',
    neighborhood: 'Decatur',
    address: '406 Church St, Decatur, GA 30030',
    url: 'http://callelatinadecatur.com/',
    tagline: 'Brightly painted venue with patio seating offering typical Latin American street-food eats.',
    
      lat: 33.774919,
      lng: -84.295143
    
  },
  {
    name: 'Parkers on Ponce',
    neighborhood: 'Decatur',
    address: '116 E Ponce de Leon Ave, Decatur, GA 30030',
    url: 'https://www.parkersonponce.com/',
    tagline: 'Pub fare & craft beers provide fuel for board games, trivia, darts & more in a low-key hangout.',
    
      lat: 33.775778,
      lng: -84.295882
    
  },
  {
    name: 'Thinking Man Tavern',
    neighborhood: 'Decatur',
    address: '537 W Howard Ave, Decatur, GA 30030',
    url: 'http://www.thinkingmantavern.com/',
    tagline: '',
    
      lat: 33.767876,
      lng: -84.304584
    
  },
  {
    name: 'Matador Mexican Cantina',
    neighborhood: 'Decatur',
    address: '350 Mead Rd, Decatur, GA 30030',
    tagline: 'Funky, industrial cantina with patio seating fixing up Mexican favorites including creative tacos.',
    
      lat: 33.760516,
      lng: -84.303375
    
  },
  {
    name: "Mojo Pizza N' Pub",
    neighborhood: 'Decatur',
    address: '657 E Lake Dr A, Decatur, GA 30030',
    tagline: 'Pie joint is known for its lineup of craft beers & New York-style pizza with sesame-seed crust.',
    location: {
      lat: 33.759372,
      lng: -84.303514
    }
  },
  {
    name: 'The Imperial',
    neighborhood: 'Decatur',
    address: '726 W College Ave, Decatur, GA 30030',
    tagline: 'Buzzing bar offering beer, pub grub & other refreshments in a casual, patio-equipped setting.',
    location: {
      lat: 33.76609,
      lng: -84.306381
    }
  },
  {
    name: 'Wild Heaven Beer',
    neighborhood: 'Decatur',
    address: '135 Maple St B, Avondale Estates, GA 30002',
    tagline: 'Wild Heaven, created by lifelong Georgians Nick Purdy and Eric Johnson, is focused on world-class beers designed to offer something new to the beer landscape—not simply our version of what everyone else is doing.',
    location: {
      lat: 33.776471,
      lng: -84.275717
    }
  },
  {
    name: 'Atlanta Brewing Company',
    neighborhood: 'West Midtown',
    address: '2323 Defoor Hills Rd NW, Atlanta, GA 30318',
    url: 'https://atlantabrewing.com/',
    tagline: 'Established in 1993, Atlanta Brewing Co was Georgia’s first craft brewery. For 25 years we have been committed to brewing quality, innovative beers for the city we love.',
    location: {
      lat: 33.818361,
      lng: -84.43479
    }
  },
  {
    name: 'Verde Taqueria',
    neighborhood: 'West Midtown',
    address: '1193 Collier Rd NW, Atlanta, GA 30318',
    url: 'https://www.verdetacos.com/',
    tagline: 'Fried chicken tacos & other Mexican fusion fare, in hip, vibrant decor with an outdoor patio.',
    location: {
      lat: 33.860968,
      lng: -84.330841
    }
  },

  {
    name: 'O-Ku',
    neighborhood: 'West Midtown',
    address: '1085 Howell Mill Rd NW A3, Atlanta, GA 30318',
    url: 'https://www.o-kusushiatl.com/',
    tagline: 'Industrial-chic haunt featuring sushi & other Japanese fare, plus a roof deck with skyline views.',
    location: {
      lat: 33.784543,
      lng: -84.411231
    }
  },

  {
    name: 'The Optimist',
    neighborhood: 'West Midtown',
    address: '914 Howell Mill Rd, Atlanta, GA 30318',
    url: 'http://theoptimistrestaurant.com/',
    tagline: 'Lobster rolls, gumbo, wood-fired oysters & more in a lofty, country-modern space with a raw bar.',
    location: {
      lat: 33.779811,
      lng: -84.410439
    }
  },

  {
    name: 'Pijiu Belly',
    neighborhood: 'West Midtown',
    address: '678 10th St NW, Atlanta, GA 30318',
    url: 'http://pijiubelly.com/',
    tagline: 'Small hip option for Southern/American-meets-Asian dishes, like Korean roast chicken, plus beer.',
    location: {
      lat: 33.781325,
      lng: -84.409632
    }
  },

  {
    name: 'Donetto',
    neighborhood: 'West Midtown',
    address: '976 Brady Ave NW Suite 110, Atlanta, GA 30318',
    url: 'https://www.donettoatlanta.com/',
    tagline: 'Modern Tuscan dishes, wines & cocktails in a former warehouse with a contemporary vibe.',
    location: {
      lat: 33.781457,
      lng: -84.413496
    }
  },
  {
    name: 'Monday Night Brewing',
    neighborhood: 'West Midtown',
    address: '670 Trabert Ave NW, Atlanta, GA 30318',
    url:'https://mondaynightbrewing.com/?gclid=CjwKCAjwm-fkBRBBEiwA966fZO4GrQwHyNQfKNIbq1mv2Yok9xt-27_cWfkY7_FSNP8lxzHlhTh30RoCtRQQAvD_BwE',
    tagline: 'Casual craft brewery featuring a spacious, high-ceilinged tasting room & regular tours.',
    location: {
      lat: 33.794919,
      lng: -84.40989
    }
  },

  {
    name: 'Barcelona Wine Bar',
    neighborhood: 'West Midtown',
    address: '1085 Howell Mill Rd, Atlanta, GA 30318',
    url:'https://www.barcelonawinebar.com/location/westside-ironworks/?utm_source=yext&utm_medium=localsearch&utm_campaign=landing-page&utm_content=westside-ironworks',
    tagline: 'Spanish small plates served in industrial surrounds with a large patio & an extensive wine list.',
    location: {
      lat: 33.784515,
      lng: -84.411386
    }
  },

  {
    name: 'Cooks & Soliders',
    neighborhood: 'West Midtown',
    address: '691 14th St NW, Atlanta, GA 30318',
    url: 'http://cooksandsoldiers.com/',
    tagline: 'Upscale restaurant serving Basque tapas & larger shareable portions cooked on a wood-burning grill.',
    location: {
      lat: 33.785973,
      lng: -84.411472
    }
  },

  {
    name: 'FLIP Burger Boutique',
    neighborhood: 'West Midtown',
    address: '1587 Howell Mill Rd, Atlanta, GA 30318',
    url: 'https://flipburgerboutique.com/',
    tagline: 'Burgers of many meat & veggie varieties with liquid nitrogen shakes & cocktails in modern digs.',
    location: {
      lat: 33.798343,
      lng: -84.415749
    }
  },

  {
    name: 'Bocado',
    neighborhood: 'West Midtown',
    address: '887 Howell Mill Rd NW, Atlanta, GA 30318',
    url: 'https://www.bocadoatlanta.com/',
    tagline: 'Eclectic American eatery known for its burger & craft cocktails boasts a lofty, modern space.',
    location: {
      lat: 33.7795,
      lng: -84.409896
    }
  },
  {
    name: 'JCT Bar',
    neighborhood: 'West Midtown',
    address: '1198 Howell Mill Rd #18, Atlanta, GA 30318',
    url: 'http://www.jctkitchen.com/',
    tagline: 'Updated Southern fare in hip space with late-night live music, plus upstairs bar with skyline view.',
    location: {
      lat: 33.786553,
      lng: -84.412431
    }
  },
  {
    name: 'Bone Lick BBQ',
    neighborhood: 'West Midtown',
    address: '1133 Huff Rd NW, Atlanta, GA 30318',
    tagline: 'Funky spot with a no-nonsense vibe serving smoked pork, wings & other BBQ classics, plus cocktails',
    location: {
      lat: 33.754151,
      lng: -84.376912
    }
  },
  {
    name: 'Twisted Soul Cookhouse & Pours',
    neighborhood: 'West Midtown',
    address: '1133 Huff Rd NW #D, Atlanta, GA 30318',
    url: 'https://www.twistedsoulcookhouseandpours.com/',
    tagline: 'Comfortable, modern soul food restaurant giving Southern classics & brunch a creative approach.',
    location: {
      lat: 33.789818,
      lng: -84.424898
    }
  },
  {
    name: 'Little Trouble',
    neighborhood: 'West Midtown',
    address: '1170 Howell Mill Rd NW Suite P-10C, Atlanta, GA 30318',
    tagline: 'Futuristic drinks den with a moody, industrial look serving creative cocktails & Asian street food.',
    location: {
      lat: 33.785834,
      lng: -84.41216
    }
  },
  {
    name: 'Marcel',
    neighborhood: 'West Midtown',
    address: '1170 Howell Mill Rd, Atlanta, GA 30318',
    url: 'http://marcelatl.com/',
    tagline: 'Ornate venue serving throwback American steakhouse food amid custom china & fancy chandeliers.',
    location: {
      lat: 33.785745,
      lng: -84.412541
    }
  },
  {
    name: 'Tin Tin',
    neighborhood: 'West Midtown',
    address: '956 Brady Ave, Atlanta, 30318',
    url: 'https://tintinatl.com/',
    tagline: "Not your grandma's wine bar.",
    location: {
      lat: 33.780947,
      lng: -84.413409
    }
  },
  {
    name: 'Second Self Beer Company',
    neighborhood: 'West Midtown',
    address: '1317 Logan Cir NW, Atlanta, GA 30318',
    url: 'https://www.secondselfbeer.com/',
    tagline: 'Second Self is about fulfilling a dream. We are lucky enough to do that daily in our Upper Westside Atlanta brewery. We all have our passion projects or side hustles that we do because we love it. We hope you embrace YOUR Second Self and live YOUR dream. We’ll provide the beer and the event space to help make these dreams reality.',
    location: {
      lat: 33.80562,
      lng: -84.430079
    }
  },
  {
    name: 'Cypress Street Pint & Plate',
    neighborhood: 'Midtown',
    address: '817 W Peachtree St Northwest E-125, Atlanta, GA 30308',
    url: 'http://cypressbar.com/',
    tagline: 'A rotating lineup of beers on tap pairs with hearty American grub at a relaxed tavern with a patio.',
    location: {
      lat: 33.77731,
      lng: -84.38612
    }
  },
  {
    name: 'Eleventh Street Pub',
    neighborhood: 'Midtown',
    address: '1041 West Peachtree St Northwest, Atlanta, GA 30309',
    url: 'http://www.eleventhstreetpub.com/',
    tagline: 'Casual watering hole with sports on TV, trivia nights & a menu of wings, burgers & sandwiches.',
    location: {
      lat: 33.783148,
      lng: -84.38769
    }
  },
  {
    name: 'The Highlander',
    neighborhood: 'Midtown',
    address: '931 Monroe Dr Ne ste c-101, Atlanta, GA 30308',
    url: 'http://www.thehighlanderatlanta.com/',
    tagline: 'Classic pub grub in a 21-and-over bar featuring an outdoor patio, pool tables, air hockey & pinball.',
    location: {
      lat: 33.779427,
      lng: -84.367584
    }
  },
  {
    name: 'MidCity Cafe',
    neighborhood: 'Midtown',
    address: '845 Spring St NW D1, Atlanta, GA 30308',
    url: 'https://www.facebook.com/midcitycafeatl/',
    tagline: 'Bar located in Midtown Atlanta specialized in craft cocktails, tasty bites and sexy vibes',
    location: {
      lat: 33.777916,
      lng: -84.387432
    }
  },
  {
    name: 'Senor Patron',
    neighborhood: 'Midtown',
    address: '860 Peachtree St NE, Atlanta, GA 30308',
    url: 'http://www.senorpatronatl.com/',
    tagline: 'Modern, airy Mexican joint offering a familiar lineup of tacos & margaritas in lively surrounds.',
    location: {
      lat: 33.778306,
      lng: -84.385203
    }
  },
  {
    name: 'Torched Hop',
    neighborhood: 'Midtown',
    address: '249 Ponce De Leon Ave NE, Atlanta, GA 30308',
    url: 'http://www.torchedhopbrewing.com/',
    tagline: 'Roomy taproom offering housemade beers & creative New American pub fare in lofty digs with bocce.',
    location: {
      lat: 33.772418,
      lng: -84.379281
    }
  },
  {
    name: "Henry's Midtown Tavern",
    neighborhood: 'Midtown',
    address: '132 10th St NE, Atlanta, GA, 30309',
    url: 'http://www.henrysatl.com/',
    tagline: 'Upscale pub grub & cocktails presented in a modern eatery & bar amid reclaimed woods & a large deck.',
    location: {
      lat: 33.781869,
      lng: -84.382896
    }
  },
  {
    name: 'The Nook on Piedmont Park',
    neighborhood: 'Midtown',
    address: '1144 Piedmont Ave NE, Atlanta, GA 30309',
    url: 'https://thenookatlanta.com/',
    tagline: 'Tater tots with toppings are on the menu at popular neighborhood bar with park views.',
    location: {
      lat: 33.786039,
      lng: -84.378531
    }
  },
  {
    name: '5Church Atlanta',
    neighborhood: 'Midtown',
    address: '1197 Peachtree St NE #528, Atlanta, GA 30361',
    url: 'http://5churchatlanta.com/',
    tagline: 'Hip locale for steaks & New American fare in an upscale space, plus cocktails & weekend brunch.',
    location: {
      lat: 33.787205,
      lng: -84.382964
    }
  },
  {
    name: 'Establishment',
    neighborhood: 'Midtown',
    address: '1197 Peachtree St NE #517, Atlanta, GA 30305',
    url: 'https://www.establishmentatlanta.com/',
    tagline: 'Upscale lounge serving craft cocktails & small plates amid rustic-chic, antebellum-influenced decor.',
    location: {
      lat: 33.786764,
      lng: -84.381289
    }
  },
  {
    name: 'Ri Ra Irish Pub',
    neighborhood: 'Midtown',
    address: '1080 Peachtree St NE #1, Atlanta, GA 30309',
    url: 'https://rira.com/atlanta/',
    tagline: 'A REAL IRISH LOCAL PUB IN ATLANTA',
    location: {
      lat: 38.905389,
      lng: -77.061914
    }
  },
  {
    name: '10th & Piedmont',
    neighborhood: 'Midtown',
    address: '991 Piedmont Ave NE, Atlanta, GA 30309',
    url: 'http://www.10thandpiedmont.com/',
    tagline: 'Small plates mix global cuisine with Southern accents in a modern space with late-night DJs.',
    location: {
      lat: 33.781678,
      lng: -84.380394
    }
  },
  {
    name: 'Zocalo Mexican Kitchen & Cantina',
    neighborhood: 'Midtown',
    address: '187 10th St NE, Atlanta, GA 30309',
    url: 'https://www.eatzocalo.com/',
    tagline: 'Chef Richard Sandoval offers upscale Mexican comfort food & many tequilas in casual, stylish space.',
    location: {
      lat: 33.781512,
      lng: -84.381042
    }
  },
  {
    name: 'Park Tavern',
    neighborhood: 'Midtown',
    address: '500 10th St NE, Atlanta, GA 30309',
    url: 'http://www.parktavern.com/',
    tagline: 'Set in a stone house, this eclectic bar/restaurant offers burgers, sushi & a patio with park views.',
    location: {
      lat: 33.7822,
      lng: -84.369286
    }
  },
  {
    name: 'The Canteen',
    neighborhood: 'Midtown',
    address: '75 5th St NW #170, Atlanta, GA 30308',
    url: 'http://www.thecanteenatl.com/',
    tagline: 'All-day food hall with stalls serving burgers, sandwiches, bagels, Israeli fare, cocktails & coffee.',
    location: {
      lat: 33.77701,
      lng: -84.389255
    }
  },
  {
    name: 'Fado Irish Pub',
    neighborhood: 'Midtown',
    address: '933 Peachtree St NE, Atlanta, GA 30309',
    url: 'https://fadoirishpub.com/atlanta-midtown/',
    tagline: 'Upscale tavern fare is served in an ornate, traditional pub setting with quiz nights & TV soccer.',
    location: {
      lat: 33.779673,
      lng: -84.384035
    }
  },
  {
    name: 'Hudson Grille',
    neighborhood: 'Midtown',
    address: '942 Peachtree St NE, Atlanta, GA 30309',
    url: 'https://hudsongrille.com/',
    tagline: 'Local sports-bar chain serving a menu of burgers, wings, steaks & seafood in a stylish setting.',
    location: {
      lat: 33.757432,
      lng: -84.393376
    }
  },
  {
    name: "Smith's Olde Bar",
    neighborhood: 'Midtown',
    address: '1578 Piedmont Ave NE, Atlanta, GA 303024',
    url: 'https://www.smithsoldebar.com/',
    tagline: 'American pub fare, pool tables & frequent live music with DJs on weekends.',
    location: {
      lat: 33.797612,
      lng: -84.368852
    }
  },
  {
    name: 'Takorea',
    neighborhood: 'Midtown',
    address: '818 Juniper St NE, Atlanta, GA 30308',
    url: 'http://www.mytakorea.com/',
    tagline: 'Lively taqueria with a year-round porch, mixing Mexican & Korean street eats, plus signature drinks.',
    location: {
      lat: 33.776895,
      lng: -84.383159
    }
  },
  {
    name: 'HobNob Neighborhood Tavern',
    neighborhood: 'Midtown',
    address: '1551 Piedmont Ave NE, Atlanta, GA 30324',
    url: 'https://www.hobnobatlanta.com/',
    tagline: 'Rustic decor, refined pub grub & plenty of beer reinforce the casual vibe of this neighborhood spot.',
    location: {
      lat: 33.796724,
      lng: -84.368993
    }
  },
  {
    name: 'Publik Draft House',
    neighborhood: 'Midtown',
    address: '654 Peachtree St NE, Atlanta, GA 30308',
    url: 'https://www.publikatl.com/',
    tagline: 'We look forward to offering you a dynamic atmosphere while supporting local artists and musicians.',
    location: {
      lat: 33.772352,
      lng: -84.385058
    }
  },
  {
    name: 'Deep End',
    neighborhood: 'Midtown',
    address: '621 North Avenue NE B100, Atlanta, GA 30308',
    url: 'https://www.deependatl.com/',
    tagline: 'Swim into the Deep End! We offer great food and exciting events in Atlanta',
    location: {
      lat: 33.770882,
      lng: -84.366971
    }
  },
  {
    name: 'The Hideaway',
    neighborhood: 'Midtown',
    address: '1544 Piedmont Ave NE, Atlanta, GA 30324',
    url: 'http://atlantahideaway.com/',
    tagline: 'There are no strangers here, only friends who have not met.',
    location: {
      lat: 33.797908,
      lng: -84.371684
    }
  },
  {
    name: 'Midtown Tavern',
    neighborhood: 'Midtown',
    address: '554 Piedmont Ave NE, Atlanta, GA 30308',
    url: 'https://www.midtowntavern.net/',
    tagline: 'Tuesday - Saturday 5:00 PM - 3:00 AM, Sunday 1:00 -8:00 PM',
    location: {
      lat: 33.769723,
      lng: -84.382345
    }
  },
  {
    name: 'City Winery',
    neighborhood: 'Midtown',
    address: '650 North Avenue NE, Atlanta, GA 30308',
    url: 'https://citywinery.com/atlanta/',
    tagline: 'Experience our passion in sharing wine, music, and the culinary arts.',
    location: {
      lat: 33.77159,
      lng: -84.367337
    }
  }
];

db.Restaurant.deleteMany({})
  .then(() => db.Restaurant.collection.insertMany(restaurants))
  .then(data => {
    console.log(data.insertedCount + ' records inserted!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
    mongoose.connection.close();
  });
