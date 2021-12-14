import React from "react";
import DealCard from "./DealCard/DealCard";
import useSWR from "swr";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Progress,
} from "@chakra-ui/react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const DealList = () => {
  const { data, error } = useSWR("/api/deals", fetcher);
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
  return (
    <div className="flex p-auto w-2/3 m-auto">
      <DealCard property={data[0]} />
      <DealCard property={data[1]} />
      <DealCard property={data[2]} />
    </div>
  );
};

export default DealList;
