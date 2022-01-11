import React from "react";
import { Badge, Box, Image } from "@chakra-ui/react";
import { Icon, StarIcon } from "@chakra-ui/icons";
import Type from "./Type";
import Price from "./Price";
import Rating from "./Rating";
import Address from "./Address";

const DealCard = ({ property }) => {
  return (
    <Box maxW="sm" overflow="hidden" className="m-2">
      <Image borderRadius="lg" src={property.image[600]} />
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
