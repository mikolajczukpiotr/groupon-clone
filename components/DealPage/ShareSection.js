import React, { useState } from "react";
import {
  FacebookShareIcon,
  PinterestShareIcon,
  TwitterShareIcon,
} from "../Icons";

const ShareSection = () => {
  const [hoverIcon, setHoverIcon] = useState("");
  return (
    <div className="mt-4">
      <div className="font-bold text-sm">UDOSTĘPNIJ OFERTĘ</div>
      <div className="mt-1 flex">
        <div
          onMouseEnter={() => {
            setHoverIcon("firstIcon");
          }}
          onMouseLeave={() => {
            setHoverIcon(null);
          }}
        >
          <FacebookShareIcon
            color={hoverIcon === "firstIcon" ? "#0070cc" : "#A5A8AB"}
          />
        </div>
        <div
          onMouseEnter={() => {
            setHoverIcon("secondIcon");
          }}
          onMouseLeave={() => {
            setHoverIcon(null);
          }}
        >
          <PinterestShareIcon
            color={hoverIcon === "secondIcon" ? "#e00038" : "#A5A8AB"}
          />
        </div>
        <div
          onMouseEnter={() => {
            setHoverIcon("thirdIcon");
          }}
          onMouseLeave={() => {
            setHoverIcon(null);
          }}
        >
          <TwitterShareIcon
            color={hoverIcon === "thirdIcon" ? "#55acee" : "#A5A8AB"}
          />
        </div>
      </div>
    </div>
  );
};

export default ShareSection;
