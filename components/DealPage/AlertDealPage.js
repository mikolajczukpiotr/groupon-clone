import React from "react";
import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";

const AlertDealPage = ({ alert }) => {
  return (
    <div className="my-14">
      <Alert status="info" borderRadius="lg">
        <AlertIcon />
        <AlertDescription montSize="sm">{alert.alert}</AlertDescription>
      </Alert>
    </div>
  );
};

export default AlertDealPage;
