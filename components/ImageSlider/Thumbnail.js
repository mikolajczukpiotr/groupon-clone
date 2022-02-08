import React from "react";
import { Image } from "@chakra-ui/react";

const Thumbnail = ({ arr, image, index }) => {
  return (
    <div className="flex m-2 ">
      {arr.map((imgsrc, i) => (
        <div className="m-1">
          <Image
            borderRadius="lg"
            key={i}
            height={57}
            width={57}
            src={imgsrc}
            onClick={() => image(i)}
            className={
              index === i
                ? `border-2 border-blue-600 border-solid p-px transition duration-500 ease-in-out`
                : ``
            }
          />
        </div>
      ))}
    </div>
  );
};

export default Thumbnail;
