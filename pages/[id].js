import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../services/fetch";
import CustomAlert from "../components/CustomAlert";
import Loading from "../components/Loading";
import Type from "../components/DealCard/Type";
import Rating from "../components/DealCard/Rating";
import Address from "../components/DealCard/Address";
import Slider from "../components/DealPage/Slider";
import { Box, Select } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { SuccesIcon } from "../components/Icons";
import AlertDealPage from "../components/DealPage/AlertDealPage";
import HeadingDealPage from "../components/DealPage/HeadingDealPage";
import CommentInfo from "../components/DealPage/CommentInfo";

const DealSite = () => {
  const { query } = useRouter();
  const { id } = query;
  const { data, error } = useSWR(`/api/deals/${id}`, fetcher);
  if (error) return <CustomAlert alertMessage={"Coś poszło nie tak!  :("} />;
  if (!data) return <Loading />;
  return (
    <div className="m-6 w-7/12">
      <HeadingDealPage data={data} />
      <div className="my-2 ">
        <Slider data={data.gallery} />
      </div>
      {data.alert && <AlertDealPage alert={data} />}
      <div className="font-bold text-2xl my-2">Wyrózniki</div>
      <div>{data.discriminate}</div>
      <CommentInfo data={data} />
    </div>
  );
};

export default DealSite;
