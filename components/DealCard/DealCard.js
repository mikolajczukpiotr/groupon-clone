import React from "react";
import { Badge, Box, Image } from "@chakra-ui/react";
import { Icon, StarIcon } from "@chakra-ui/icons";
import Price from "./Price";
import Rating from "./Rating";
import Address from "./Address";

const DealCard = () => {
  const UpIcon = (props) => (
    <Icon viewBox="0 0 16 16" {...props}>
      <path
        fill="rgba(102,80,215,1.0)"
        d="M15.38 2.51l-6.02 1.5a.5.5 0 0 0-.23.85l1.37 1.37-2.52 2.52-2.33-2.33a.25.25 0 0 0-.36 0L.07 11.64c-.1.1-.1.26 0 .36L1.5 13.4c.05.05.11.08.18.08.06 0 .13-.03.18-.08L5.47 9.8l2.33 2.33c.1.1.26.1.36 0L12.27 8l1.37 1.37a.5.5 0 0 0 .84-.23l1.5-6.02a.5.5 0 0 0-.6-.6z"
      />
    </Icon>
  );

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
        <Box display="flex" alignItems="center">
          <UpIcon className="mr-1" />
          <Box textColor="#7561DB">Popularny</Box>
        </Box>

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
