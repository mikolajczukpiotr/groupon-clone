import React from "react";
import { Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Rating = ({ rating }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box mr="1" color="gray.600" fontSize="sm">
        {rating.rating}
      </Box>
      {Array(5)
        .fill("")
        .map((_, i) => (
          <StarIcon
            boxSize={3}
            key={i}
            color={i < rating.rating ? "gold" : "gray.300"}
          />
        ))}
      <Box ml="2" color="gray.600" fontSize="sm">
        {rating.numberOfRatings} oceny
      </Box>
    </Box>
  );
};

export default Rating;
