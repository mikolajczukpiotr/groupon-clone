import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../services/fetch";
import CustomAlert from "../components/CustomAlert";
import Loading from "../components/Loading";
import Slider from "../components/DealPage/Slider";
import AlertDealPage from "../components/DealPage/AlertDealPage";
import HeadingDealPage from "../components/DealPage/HeadingDealPage";
import CommentInfo from "../components/DealPage/CommentInfo";
import Comment from "../components/DealPage/Comment";

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
      <Comment data={data.comments[0]} />
      <Comment data={data.comments[1]} />
      <Comment data={data.comments[2]} />
    </div>
  );
};

export default DealSite;
