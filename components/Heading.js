import React from "react";
import useSWR from "swr";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Progress,
} from "@chakra-ui/react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Heading = () => {
  const { data, error } = useSWR("/api/site", fetcher);
  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Error!</AlertTitle>
        <AlertDescription>
          system nie działa w prawidłowy sposób, skontaktuj sie z
          administratorem strony.
        </AlertDescription>
      </Alert>
    );
  if (!data)
    return (
      <>
        <h1> LOADING...</h1>
        <Progress size="xs" isIndeterminate colorScheme="green" />
      </>
    );
  return <h1 className="flex p-5 w-2/3 m-auto text-2xl">{data[0].value}</h1>;
};

export default Heading;
