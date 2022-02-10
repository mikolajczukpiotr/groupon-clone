import React from "react";
import Type from "../DealCard/Type";
import Rating from "../DealCard/Rating";
import Address from "../DealCard/Address";
import { LocationIcon, PromoIcon } from "../Icons";

const HeadingDealPage = ({ data }) => {
  return (
    <div>
      <Type type={data.type} />
      <div className="flex ">
        <div className="text-3xl font-bold mr-2">{data.title}</div>
        <Rating rating={data.rating} />
      </div>
      <div className="mt-1 flex items-center">
        <LocationIcon />
        <div className="ml-2 text-blue-400">
          <Address address={data.address} />
        </div>
      </div>
      <div className="my-1 text-sm text-gray-500 flex items-center">
        <PromoIcon />
        <div className="ml-2">{data.shortDescription}</div>
      </div>
    </div>
  );
};

export default HeadingDealPage;
