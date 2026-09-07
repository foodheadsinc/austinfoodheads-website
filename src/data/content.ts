export interface Review {
  slug: string;
  name: string;
  category: string;
  price: string;
  rating: string;
  description: string;
  body?: string[];
  hours?: string;
  location?: string;
  websiteUrl?: string;
  image: string;
}

export const reviews: Review[] = [
  {
    slug: "frozen-rolls",
    name: "Frozen Rolls",
    category: "Dessert",
    price: "$",
    rating: "4.7/5 stars",
    description:
      "This Thai Ice Cream place is absolutely fantastic. Everything is made to order with three simple ingredients: Milk. Sugar. Cream.",
    image: "/images/food-photo-1.jpg",
  },
  {
    slug: "bird-bird-biscuit",
    name: "Bird Bird Biscuit",
    category: "American",
    price: "$",
    rating: "4.8/5 stars",
    description: "Bird Bird is a great spot for a breakfast sandwich.",
    image: "/images/food-photo-2.jpg",
  },
  {
    slug: "franklins-bbq",
    name: "Franklin's BBQ",
    category: "BBQ",
    price: "$$",
    rating: "4.8/5 stars",
    description:
      "Franklin's BBQ is one of the most iconic spots in all of Austin. If you are not in line by 7:00am, you will not be served. The brisket is an absolute must but you can't go wrong with any of their meats.",
    body: [
      "Franklin's opens at 11am but the line starts forming around 7 to 8am, and it moves slowly until the meat runs out for the day. Get there by 10:30am if you want a real shot at brisket. Bring a chair, bring cash for the guy selling breakfast tacos and mimosas to the line, and treat the wait as part of the experience rather than an inconvenience.",
      "The brisket is sliced to order, wrapped in butcher paper, and weighed before it hits the famous blue tray. It's tender with a deep smoke ring and a dark, peppery bark, and it's the reason people fly into Austin specifically to eat here. Beyond brisket, the pork ribs, sausage, turkey, and pulled pork are all worth ordering, and the sides (cole slaw, pinto beans) are simple and done right.",
      "Parking near the East 11th St location is limited. If you're ordering 3-4+ pounds of meat, Franklin's offers online ordering with dedicated to-go parking spots, which skips the walk-up line entirely.",
    ],
    hours: "Tuesday-Sunday: 11am until sold out (closed Mondays)",
    location: "900 E 11th St, Austin, TX 78702",
    websiteUrl: "https://franklinbbq.com/",
    image: "/images/hero-food.jpg",
  },
  {
    slug: "via-313",
    name: "Via 313",
    category: "Pizza",
    price: "$$",
    rating: "4.7/5 stars",
    description:
      "Via 313 brings Detroit-style pizza to Austin and does it incredibly well. The thick, crispy-edged, cheesy squares are a must-try.",
    body: [
      "Via 313 makes genuine Detroit-style pizza: a thick, airy square crust baked in steel pans, with cheese pushed all the way to the edges so it caramelizes into a crispy, almost fried border. Sauce goes on top in racing stripes after the bake, which is the classic Detroit move and part of what makes the crust stay crisp instead of soggy.",
      "The Detroiter (pepperoni, banana peppers, and their signature red sauce) is the one to start with if it's your first visit, but the menu also covers gluten-free and dairy-free crusts and a handful of solid salads if you're not going full pizza. It's been recognized by Food & Wine and Food Network as one of the best pizzas in the country, and named Independent Pizzeria of the Year by Pizza Today.",
      "Via 313 has grown to multiple locations across Austin, including East 6th Street, South Lamar, and 290/Oak Hill, so there's almost always one on your way somewhere. It's a solid pick for a casual group hang, since the pies are meant to be cut into squares and shared.",
    ],
    websiteUrl: "https://via313.com/",
    image: "/images/food-photo-1.jpg",
  },
  {
    slug: "red-ash",
    name: "Red Ash",
    category: "Italian",
    price: "$$$",
    rating: "4.8/5 stars",
    description:
      "Red Ash is an upscale Italian restaurant in downtown Austin serving wood-fired dishes and handmade pasta.",
    body: [
      "Red Ash sits right on Colorado St in the heart of downtown, built around a wood-burning grill that does double duty for both the meats and a lot of the vegetables on the menu. The handmade pasta program is the real draw: the cappelletti, little \"bishop's hat\" shapes stuffed with spinach and sauced in brown butter, is the dish regulars keep coming back for.",
      "If you're going big, the 50-day dry-aged porterhouse (\"la Fiorentina\") is built for the table to share and shows off what the wood fire is capable of. It's a special-occasion price point, but the happy hour makes it easy to try Red Ash without committing to the full dinner: $2 off cocktails, beer, and wine by the glass, plus $7 appetizers, salads, and small pastas.",
      "Reservations move fast on weekends. If you want a walk-in shot at a table, arriving right around opening (5 to 5:15pm) gives you the best odds before the wait builds.",
    ],
    hours: "Mon-Sat: 5:00pm-10:00pm (hours vary Sunday, call ahead)",
    location: "303 Colorado St, Austin, TX 78701",
    websiteUrl: "https://www.redashgrill.com/",
    image: "/images/food-photo-2.jpg",
  },
  {
    slug: "comedor",
    name: "Comedor",
    category: "Mexican",
    price: "$$$",
    rating: "4.7/5 stars",
    description:
      "Comedor offers elevated Mexican cuisine in a stunning modern setting in downtown Austin.",
    body: [
      "Comedor is led by chef Philip Speer, a James Beard semifinalist, and it's housed in a striking Tom Kundig-designed building of glass and steel right in downtown Austin. The kitchen builds its menu around heirloom masa and woodfire grilling, which shows up everywhere from the tortillas to the mains.",
      "The tacos are the move here: bone marrow with pecan gremolata, and fried fish with blistered cabbage, are both standouts and a good way to sample the kitchen's range in one sitting. Pair either with one of the smoky mezcal cocktails on the drink list.",
      "It's a dressier spot suited to a date night or a client dinner rather than a casual drop-in, and reservations are worth booking ahead given the design-forward dining room draws a steady crowd. Seating includes an indoor dining room, an open courtyard patio with retractable elements, and bar seating if you'd rather walk in and grab a mezcal.",
      "Comedor picked up Best New Restaurant in Texas from Texas Monthly and has been covered by the New York Times, Wall Street Journal, and Michelin. Sunday brunch (10am-3pm) is a quieter, more casual way to try the kitchen if the full dinner service feels like too much of a commitment.",
    ],
    hours: "Mon-Thu: 5:00pm-10:00pm, Fri-Sat: 5:00pm-11:00pm, Sun: 10:00am-3:00pm (brunch) & 5:00pm-9:00pm",
    location: "501 Colorado St, Austin, TX 78701",
    websiteUrl: "https://comedortx.com/",
    image: "/images/food-photo-3.jpg",
  },
  {
    slug: "pueblo-viejo",
    name: "Pueblo Viejo",
    category: "Mexican",
    price: "$",
    rating: "4.8/5 stars",
    description:
      "Pueblo Viejo is a beloved Austin food truck serving authentic Mexican breakfast tacos and more.",
    image: "/images/hero-food.jpg",
  },
  {
    slug: "ramen-tatsu-ya",
    name: "Ramen Tatsu-ya",
    category: "Asian",
    price: "$$",
    rating: "4.9/5 stars",
    description:
      "Ramen Tatsu-ya is one of the best ramen spots in all of Texas with rich, flavorful broths and perfect noodles.",
    body: [
      "Ramen Tatsu-ya started in 2012 as a single spot on East 6th Street from chef and DJ Tatsu Aikawa, and it's grown into what a lot of Austinites just call their Japanese soul food. The broth is the whole point: a 60-hour tonkotsu that's rich without being heavy, and it's customizable with \"bombs,\" their term for concentrated flavor add-ins that let you dial in exactly how funky or spicy you want the bowl.",
      "Beyond ramen, the katsu sliders, karaage (Japanese fried chicken), and gyoza are all worth ordering as a table to share while you wait on bowls. Happy hour runs Monday through Friday from 3 to 5pm if you're going for drinks and small plates rather than a full meal.",
      "The original East 6th St location still has the neighborhood-favorite feel that built the brand, but Ramen Tatsu-ya has since expanded to multiple spots around Austin (and into Houston), so there's usually one within reach no matter where you are in the city.",
    ],
    hours: "Original location, Mon-Thu: 11am-10pm, Fri: 11am-11pm, Sat: 11am-10pm, Sun: 12pm-10pm",
    location: "1600 E 6th St, Austin, TX 78702 (original location; multiple Austin locations)",
    websiteUrl: "https://www.ramen-tatsuya.com/",
    image: "/images/food-photo-1.jpg",
  },
];
