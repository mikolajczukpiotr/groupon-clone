import React, { useState } from "react";
import {
  FacebookShareIcon,
  PinterestShareIcon,
  TwitterShareIcon,
} from "../Icons";

const ShareSection = () => {
  const [hoverFirstIcon, setHoverFirstIcon] = useState(false);
  const [hoverSecondIcon, setHoverSecondIcon] = useState(false);
  const [hoverThirdIcon, setHoverThirdIcon] = useState(false);
  return (
    <div className="mt-4">
      <div className="font-bold text-sm">UDOSTĘPNIJ OFERTĘ</div>
      <div className="mt-1 flex">
        <div
          onMouseEnter={() => {
            setHoverFirstIcon(true);
          }}
          onMouseLeave={() => {
            setHoverFirstIcon(false);
          }}
        >
          <FacebookShareIcon
            h={7}
            w={7}
            marginLeft={4}
            color={hoverFirstIcon ? "#0070cc" : "#A5A8AB"}
          />
        </div>
        <div
          onMouseEnter={() => {
            setHoverSecondIcon(true);
          }}
          onMouseLeave={() => {
            setHoverSecondIcon(false);
          }}
        >
          <PinterestShareIcon
            h={7}
            w={7}
            marginLeft={4}
            color={hoverSecondIcon ? "#e00038" : "#A5A8AB"}
          />
        </div>
        <div
          onMouseEnter={() => {
            setHoverThirdIcon(true);
          }}
          onMouseLeave={() => {
            setHoverThirdIcon(false);
          }}
        >
          <TwitterShareIcon
            h={7}
            w={7}
            marginLeft={4}
            color={hoverThirdIcon ? "#55acee" : "#A5A8AB"}
          />
        </div>
      </div>
    </div>
  );
};

export default ShareSection;
