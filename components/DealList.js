import React from "react";
import DealCard from "./DealCard/DealCard";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const DealList = () => {
  const { data, error } = useSWR("/api/deals", fetcher);
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="flex p-auto w-2/3 m-auto">
      <DealCard property={data[0]} />
      <DealCard property={data[1]} />
      <DealCard property={data[2]} />
    </div>
  );
};

export default DealList;
