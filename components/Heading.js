import React from "react";

const Heading = ({ headingText }) => {
  const words = headingText.split(" ");
  const [first, second, ...rest] = words;
  return (
    <h1 className="flex py-5 text-2xl">
      <span className="font-bold">
        {" "}
        {first} {second}
      </span>
      {rest.join(" ")}
    </h1>
  );
};

export default Heading;
