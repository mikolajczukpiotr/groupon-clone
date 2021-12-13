import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Heading = () => {
  const { data, error } = useSWR("/api/site", fetcher);
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <h1 className="flex p-5 w-2/3 m-auto text-2xl">{data[0].value}</h1>;
};

export default Heading;
