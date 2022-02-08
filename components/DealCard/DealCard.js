import React from "react";
import { Badge, Box, Image } from "@chakra-ui/react";
import { Icon, StarIcon } from "@chakra-ui/icons";
import Type from "./Type";
import Price from "./Price";
import Rating from "./Rating";
import Address from "./Address";
import Link from "next/link";

const DealCard = ({ property }) => {
  return (
    <Link href={`/${property.slug}`}>
      <Box maxW="sm" overflow="hidden" className="hover: cursor-pointer">
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
    </Link>
  );
};

export default DealCard;
