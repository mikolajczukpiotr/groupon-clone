import Heading from "../components/Heading";
import DealList from "../components/DealList";
import PromoList from "../components/PromoList";
import useSWR from "swr";
import React from "react";
import { fetcher } from "../services/fetch";
import CustomAlert from "../components/CustomAlert";
import Loading from "../components/Loading";

export default function Home() {
  const { data, error } = useSWR("/api/site", fetcher);
  if (error) return <CustomAlert alertMessage={"Coś poszło nie tak!  :("} />;
  if (!data) return <Loading />;
  const components = data.map((el) => {
    switch (el.type) {
      case "title":
        return <Heading headingText={el.value} />;
      case "deals":
        return <DealList id={el.value.id} />;
      case "promos":
        return <PromoList />;
      default:
        return null;
    }
  });
  return components;
}
