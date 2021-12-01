import React from "react";
import { Badge, Box } from "@chakra-ui/react";

const Price = ({ price }) => {
  const discount = (higher, lower) => {
    const result = ((higher - lower) / higher) * 100;
    return Math.floor(result);
  };
  return (
    <Box display="flex" alignItems="center">
      <Box color="grey" fontSize="xl" textDecoration="line-through">
        {price.originalPrice} zł
      </Box>
      <Box display="flex" alignItems="" color="green" fontSize="sm" ml="1">
        <Box as="span" fontSize="xl">
          Od
        </Box>
        <Box
          as="span"
          ml="1"
          color="darkGreen"
          fontSize="xl"
          fontWeight="extrabold"
        >
          {price.newPrice} zł
        </Box>
      </Box>

      <Badge colorScheme="green" ml="1">
        {discount(price.originalPrice, price.newPrice)}% zniżki
      </Badge>
    </Box>
  );
};

export default Price;
