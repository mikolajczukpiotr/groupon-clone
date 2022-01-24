// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const deals = [
  {
    title: "ESC House",
    slug: "esc-house",
    shortDescription: "Pokój Zagadki Sherlocka Holmesa",
    address: {
      city: "Zakopane",
      street: "Kościuszki 3",
      howFar: 0.4,
    },
    rating: {
      numberOfRatings: 4,
      rating: 5.0,
      max: 5.0,
      min: 0.0,
    },
    price: {
      originalPrice: 149.0,
      newPrice: 79.99,
      currency: "PLN",
    },
    type: "best",
    image: {
      150: "https://via.placeholder.com/150",
      300: "https://via.placeholder.com/300",
      600: "https://via.placeholder.com/800x600",
      1200: "https://via.placeholder.com/1200",
    },
  },
  {
    title: "W.Kruk",
    slug: "w-kruk",
    shortDescription:
      "Karta podarunkowa warta 100zl na dowolny prodkut ze sklepu W. kruk",
    address: {
      city: "Zakopane",
      street: "Krupówki 24",
      howFar: 0.6,
    },
    rating: {
      numberOfRatings: 76,
      rating: 4.4,
      max: 5.0,
      min: 0.0,
    },
    price: {
      originalPrice: 100.0,
      newPrice: 90.0,
      currency: "PLN",
    },
    type: "popular",
    image: {
      150: "https://via.placeholder.com/150",
      300: "https://via.placeholder.com/300",
      600: "https://via.placeholder.com/800x600",
      1200: "https://via.placeholder.com/1200",
    },
  },
  {
    title: "Aqua Park Zakopane",
    slug: "aqua-park-zakopane",
    shortDescription: "Termy: 2,5-godzinny bilet wstępu na basen dla 1 osoby",
    address: {
      city: "Zakopane",
      street: "Jagielońska 31",
      howFar: 1.2,
    },
    rating: {
      numberOfRatings: 32,
      rating: 4.3,
      max: 5.0,
      min: 0.0,
    },
    price: {
      originalPrice: 44.0,
      newPrice: 44.0,
      currency: "PLN",
    },
    type: "popular",
    image: {
      150: "https://via.placeholder.com/150",
      300: "https://via.placeholder.com/300",
      600: "https://via.placeholder.com/800x600",
      1200: "https://via.placeholder.com/1200",
    },
  },
];

export default function handler(req, res) {
  res.status(200).json(deals);
}
