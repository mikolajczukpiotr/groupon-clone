import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../services/fetch";
import CustomAlert from "../components/CustomAlert";
import Loading from "../components/Loading";
import Type from "../components/DealCard/Type";
import Rating from "../components/DealCard/Rating";
import Address from "../components/DealCard/Address";
import Slider from "../components/ImageSlider/Slider";
import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";

const DealSite = () => {
  const { query } = useRouter();
  const { id } = query;
  const { data, error } = useSWR(`/api/deals/${id}`, fetcher);
  if (error) return <CustomAlert alertMessage={"Coś poszło nie tak!  :("} />;
  if (!data) return <Loading />;
  return (
    <div className="m-6">
      <Type type={data.type} />
      <div className="flex ">
        <div className="text-3xl font-bold mr-2">{data.title}</div>
        <Rating rating={data.rating} />
      </div>
      <div className="mt-1">
        <Address address={data.address} />
      </div>
      <div className="my-1">{data.shortDescription}</div>
      <div className="my-2 ">
        <Slider data={data.gallery} />
      </div>
      <div className="my-14">
        <Alert status="info" width="70%" borderRadius="lg">
          <AlertIcon />
          <AlertDescription montSize="sm">{data.alert}</AlertDescription>
        </Alert>
      </div>
      <div className="font-bold text-2xl">Wyrózniki</div>
      <div> </div>
    </div>
  );
};

export default DealSite;
