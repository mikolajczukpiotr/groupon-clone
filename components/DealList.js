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
  return (
    <div className="flex justify-between gap-4">
      <DealCard property={data[0]} />
      <DealCard property={data[1]} />
      <DealCard property={data[2]} />
    </div>
  );
};

export default DealList;
