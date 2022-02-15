import React from "react";
import { StarIcon } from "@chakra-ui/icons";

const Stars = ({ boxSize, margin, rating }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, i) => (
          <StarIcon
            boxSize={boxSize}
            key={i}
            margin={margin}
            color={i < rating ? "gold" : "gray.300"}
          />
        ))}
    </>
  );
};

export default Stars;
