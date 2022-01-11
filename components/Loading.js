import React from "react";
import { Progress } from "@chakra-ui/react";

const Loading = () => {
  return (
    <>
      <h1> LOADING...</h1>
      <Progress size="xs" isIndeterminate colorScheme="green" />
    </>
  );
};

export default Loading;
