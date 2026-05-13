export interface Newsletter {
  slug: string;
  title: string;
  description?: string;
  externalUrl?: string;
}

export interface Review {
  slug: string;
  name: string;
  category: string;
  price: string;
  rating: string;
  description: string;
  hours?: string;
  location?: string;
  websiteUrl?: string;
  image: string;
}

export const newsletters: Newsletter[] = [
  {
    slug: "march-newsletter",
    title: "March Newsletter",
    externalUrl:
      "https://mailchi.mp/df082c726dd9/december-newsletter-our-thoughts-on-the-michelin-guide-holiday-events-special-discounts-259",
  },
  {
    slug: "feb-newsletter",
    title: "February Newsletter",
  },
  {
    slug: "jan-newsletter",
    title: "January Newsletter",
    description:
      "Healthy eats, our favorite events to kickstart the New Year & a sub special you don't want to miss!",
  },
  {
    slug: "dec-newsletter",
    title: "December Newsletter",
    description:
      "Our thoughts on the Michelin Guide, Holiday Events & Special Discounts!",
  },
  {
    slug: "november-newsletter",
    title: "November Newsletter",
  },
];

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
    slug: "dipdipdip-tatsu-ya",
    name: "DipDipDip Tatsu-ya",
    category: "Asian",
    price: "$$$",
    rating: "4.8/5 stars",
    description:
      "DipDipDip is the only Shabu-Shabu restaurant in Austin and was rated the restaurant of the year in 2019 by Eater.",
    image: "/images/food-photo-3.jpg",
  },
  {
    slug: "franklins-bbq",
    name: "Franklin's BBQ",
    category: "BBQ",
    price: "$$",
    rating: "4.8/5 stars",
    description:
      "Franklin's BBQ is one of the most iconic spots in all of Austin. If you are not in line by 7:00am, you will not be served. The brisket is an absolute must but you can't go wrong with any of their meats.",
    hours: "Tuesday-Sunday: 11:00am-3:00pm",
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
    image: "/images/food-photo-1.jpg",
  },
];
