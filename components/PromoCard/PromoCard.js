import React from "react";
import { Box, Button } from "@chakra-ui/react";

const PromoCard = ({ property }) => {
  return (
    <Box background={property.color} className="w-1/2 rounded-lg">
      <div className="mt-4 flex-col p-8  h-1/2">
        <Box className="text-2xl font-bold "> {property.title} </Box>
        <Box className="mb-7"> {property.subTitle}</Box>
        <Button variant="outline" colorScheme="white">
          {property.cta}
        </Button>
      </div>
    </Box>
  );
};

export default PromoCard;
