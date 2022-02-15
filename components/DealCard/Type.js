import React from "react";
import { Box } from "@chakra-ui/react";
import { PopularIcon, UpIcon } from "../Icons";

const iconMap = {
  best: (
    <Box className="text-purple">
      <UpIcon className="mr-1" /> Popularny
    </Box>
  ),
  popular: (
    <Box className="text-purple">
      <PopularIcon className="mr-1" /> Najlepsze z Groupon
    </Box>
  ),
};

const Type = ({ type }) => {
  return <div>{iconMap[type]}</div>;
};

export default Type;
