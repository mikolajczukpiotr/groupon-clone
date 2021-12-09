import React from "react";
import { Badge, Box, Image } from "@chakra-ui/react";
import { Icon, StarIcon } from "@chakra-ui/icons";
import Type from "./Type";
import Price from "./Price";
import Rating from "./Rating";
import Address from "./Address";

const DealCard = () => {
  const property = {
    title: "ESC House",
    shortDescription: "Pokój Zagadki Sherlocka Holmesa",
    address: {
      city: "Zakopane",
      street: "Kościuszki 3",
      howFar: 0.4,
    },
    rating: {
      numberOfRatings: 4,
      rating: 3.7,
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
      alt: "Rear view of modern home with pool",
      150: "https://via.placeholder.com/150",
      300: "https://via.placeholder.com/300",
      600: "https://bit.ly/2Z4KKcF",
      1200: "https://via.placeholder.com/1200",
    },
  };

  return (
    <Box maxW="sm" overflow="hidden">
      <Image
        borderRadius="lg"
        src={property.image["600"]}
        alt={property.image.alt}
      />
      <Box p="1">
        <Type type={property.type} />
        <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {property.title}
        </Box>
        <Address address={property.address} />
        <Rating rating={property.rating} />
        <Price price={property.price} />
        <Box
          fontSize="sm"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          {property.shortDescription}
        </Box>
      </Box>
    </Box>
  );
};

export default DealCard;
