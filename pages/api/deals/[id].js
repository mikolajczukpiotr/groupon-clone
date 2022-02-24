// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const deals = [
  {
    title: "ESC House",
    slug: "esc-house",
    shortDescription: "Pokój Zagadki Sherlocka Holmesa",
    views: 34,
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
    gallery: [
      "https://via.placeholder.com/700x461",
      "https://via.placeholder.com/700x462",
      "https://via.placeholder.com/700x463",
    ],
    alert:
      "Firma tego partnera jest czynna i podejmuje działania mające na celu ochronę zdrowia poprzez przestrzeganie wszystkich obowiązujących przepisów prawa i regulacji dotyczących bezpieczeństwa w obliczu COVID-19.",
    discriminate:
      "Okazja do obejrzenia na dużym ekranie aktualnych i nadchodzących hitów filmowych przez 7 dni w tygodniu",
    commentsMetaInfo: {
      numberOfRatings: 76,
      rating: 4.7,
    },
    comments: [
      {
        id: 1,
        name: "Anna",
        topReviewer: true,
        numberOfRatings: 11,
        reviews: 6,
        rating: 5,
        date: "2021-02-10",
        content: "Polecam, bardzo dobry produkt",
      },
      {
        id: 2,
        name: "Jan",
        topReviewer: "",
        numberOfRatings: 41,
        reviews: 7,
        rating: 2,
        date: "2021-02-10",
        content: "Polecam, bardzo dobry produkt",
      },
      {
        id: 3,
        name: "Karolina",
        topReviewer: "",
        numberOfRatings: 11,
        reviews: 36,
        rating: 4,
        date: "2021-12-12",
        content: "Polecam, bardzo dobry produkt",
      },
    ],
    priceDetails: [
      {
        id: 1,
        name: "1-godzinne wejście dla 4 osób na basen Aquatonic (pon.-czw.)",
        price: 33.99,
        sold: 440,
      },
      {
        id: 2,
        name: "1-godzinne wejście dla 4 osób na basen Aquatonic (pt.-ndz.)",
        price: 43.99,
        sold: 510,
      },
      {
        id: 3,
        name: "1-godzinne wejście dla 6 osób na basen Aquatonic (pon.-czw.)",
        price: 48.99,
        sold: 60,
      },
      {
        id: 4,
        name: "1-godzinne wejście dla 4 osób na basen Aquatonic (pt.-ndz.)",
        price: 62.99,
        sold: 40,
      },
      {
        id: 5,
        name: "1-godzinne wejście dla 4 osób na basen Aquatonic (pon.-czw.)",
        price: 48.99,
        sold: 440,
      },
    ],
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
    gallery: [
      "https://via.placeholder.com/700x461",
      "https://via.placeholder.com/700x462",
      "https://via.placeholder.com/700x463",
    ],
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
    gallery: [
      "https://via.placeholder.com/700x461",
      "https://via.placeholder.com/700x462",
      "https://via.placeholder.com/700x463",
    ],
  },
];

export default function handler(req, res) {
  const { id } = req.query;

  const deal = deals.find((deal) => deal.slug === id);
  if (deal) {
    res.status(200).json(deal);
  } else {
    res.status(404);
  }
}
