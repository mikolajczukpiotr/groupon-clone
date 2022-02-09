import React from "react";
import Type from "../DealCard/Type";
import Rating from "../DealCard/Rating";
import Address from "../DealCard/Address";

const HeadingDealPage = ({ data }) => {
  return (
    <div>
      <Type type={data.type} />
      <div className="flex ">
        <div className="text-3xl font-bold mr-2">{data.title}</div>
        <Rating rating={data.rating} />
      </div>
      <div className="mt-1">
        <Address address={data.address} />
      </div>
      <div className="my-1">{data.shortDescription}</div>
    </div>
  );
};

export default HeadingDealPage;
