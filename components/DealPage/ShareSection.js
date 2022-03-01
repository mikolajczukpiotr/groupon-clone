import React, { useState } from "react";
import {
  FacebookShareIcon,
  PinterestShareIcon,
  TwitterShareIcon,
} from "../Icons";
import IconsShareSections from "./IconsShareSections";

const icons = [
  {
    type: "facebook",
    component: FacebookShareIcon,
    selectedColor: "#0070cc",
  },
  {
    type: "pinterest",
    component: PinterestShareIcon,
    selectedColor: "#e00038",
  },
  {
    type: "twitter",
    component: TwitterShareIcon,
    selectedColor: "#55acee",
  },
];

const ShareSection = () => {
  return (
    <div className="mt-4">
      <div className="font-bold text-sm">UDOSTĘPNIJ OFERTĘ</div>
      <div className="mt-1 flex">
        <IconsShareSections icons={icons} />
      </div>
    </div>
  );
};

export default ShareSection;
