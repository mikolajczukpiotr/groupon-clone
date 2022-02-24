import React from "react";
import OptionList from "./OptionList";
import { Button } from "@chakra-ui/react";
import { GiftIcon, VisitIcon } from "../Icons";
import ShareSection from "./ShareSection";

const Sidebar = ({ priceDetails, views }) => {
  return (
    <div className=" flex flex-col">
      <OptionList priceDetails={priceDetails} />
      <div className=" font-light mt-4 mb-1">
        <VisitIcon className="m-1" h={5} w={5} />
        Ponad {views} odsłon dziś, więc działaj teraz!
      </div>
      <Button width="100%" colorScheme="blue" variant="solid" className="my-4">
        KUP
      </Button>
      <div className="justify-items-start">
        <Button
          colorScheme="blue"
          variant="link"
          className="text-xs font-semibold"
          leftIcon={<GiftIcon />}
        >
          Kup jako prezent
        </Button>
      </div>
      <ShareSection />
    </div>
  );
};

export default Sidebar;
