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
import CustomAlert from "./CustomAlert";
import Loading from "./Loading";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PromoList = () => {
  const { data, error } = useSWR("/api/promos", fetcher);
  if (error) return <CustomAlert alertMessage={"Coś poszło nie tak!  :("} />;
  if (!data) return <Loading />;
  const promoCards = data.map((el) => {
    return <PromoCard key={el.title} property={el} />;
  });
  return <div className="flex mt-2 gap-2 flex-wrap">{promoCards}</div>;
};

export default PromoList;
