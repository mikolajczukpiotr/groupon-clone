import React, { useEffect, useState } from "react";
import Thumbnail from "./Thumbnail";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";

export default function Slider({ data }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const next = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      <div
        className="relative max-w-700"
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        <div>
          <Image
            borderRadius="lg"
            className="transition duration-500 ease-in-out"
            src={data[index]}
          />
        </div>
        <div
          className={` ${
            hovered ? `opacity-100` : `opacity-0`
          } absolute top-1/2 w-full flex justify-between`}
        >
          <button
            onClick={prev}
            className="bg-gray-800 rounded-full ml-3 text-white hover:bg-white hover:text-black"
          >
            <ChevronLeftIcon w={12} h={12} />
          </button>
          <button
            onClick={next}
            className="bg-gray-800 rounded-full mr-3 text-white hover:bg-white hover:text-black"
          >
            <ChevronRightIcon w={12} h={12} />
          </button>
        </div>
      </div>
      <Thumbnail arr={data} image={setIndex} index={index} />
    </div>
  );
}
