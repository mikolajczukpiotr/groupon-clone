import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

const CustomAlert = ({ alertMessage }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Error!</AlertTitle>
      <AlertDescription>{alertMessage}</AlertDescription>
    </Alert>
  );
};

export default CustomAlert;
