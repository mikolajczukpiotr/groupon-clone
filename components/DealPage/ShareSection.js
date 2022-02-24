import React from "react";
import {
  FacebookShareIcon,
  PinterestShareIcon,
  TwitterShareIcon,
} from "../Icons";

const ShareSection = () => {
  return (
    <div className="mt-4">
      <div className="font-bold text-sm">UDOSTĘPNIJ OFERTĘ</div>
      <div className="mt-1 flex">
        <div className="">
          <FacebookShareIcon h={7} w={7} />
        </div>
        <div>
          <PinterestShareIcon h={7} w={7} marginLeft={4} />
        </div>
        <div>
          <TwitterShareIcon h={7} w={7} marginLeft={4} />
        </div>
      </div>
    </div>
  );
};

export default ShareSection;
