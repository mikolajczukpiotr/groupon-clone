import React from "react";
import { Box } from "@chakra-ui/react";

const Address = ({ address }) => {
  return (
    <Box color="gray.500" fontWeight="normal" fontSize="sm">
      {address.street} &bull; {address.city} {address.howFar}km
    </Box>
  );
};

export default Address;
