import React from "react";
import PromoCard from "./PromoCard/PromoCard";
import useSWR from "swr";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Progress,
} from "@chakra-ui/react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PromoList = () => {
  const { data, error } = useSWR("/api/promos", fetcher);
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
    <div className="flex gap-2 mt-2">
      <PromoCard property={data[0]} />
      <PromoCard property={data[1]} />
    </div>
  );
};

export default PromoList;
