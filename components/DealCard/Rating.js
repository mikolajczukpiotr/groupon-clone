import React from "react";
import { Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Stars from "../Stars";

const Rating = ({ rating }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box mr="1" color="gray.600" fontSize="sm">
        {rating.rating}
      </Box>
      <Stars boxSize={3} margin={0} rating={rating.rating} />
      <Box ml="2" color="gray.600" fontSize="sm">
        {rating.numberOfRatings} oceny
      </Box>
    </Box>
  );
};

export default Rating;
