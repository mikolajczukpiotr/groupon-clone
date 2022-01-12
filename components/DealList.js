import React from "react";
import DealCard from "./DealCard/DealCard";
import useSWR from "swr";
import { fetcher } from "../services/fetch";
import CustomAlert from "./CustomAlert";
import Loading from "./Loading";

const DealList = () => {
  const { data, error } = useSWR("/api/deals", fetcher);
  if (error) return <CustomAlert alertMessage={"Coś poszło nie tak!  :("} />;
  if (!data) return <Loading />;
  const dealCards = data.map((el) => {
    return <DealCard key={el.title} property={el} />;
  });
  return <div className="flex justify-between gap-4">{dealCards}</div>;
};

export default DealList;
