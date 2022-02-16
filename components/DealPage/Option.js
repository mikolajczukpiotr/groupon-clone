import React from "react";
import { Radio, RadioGroup, Divider } from "@chakra-ui/react";

const Option = ({ data }) => {
  return (
    <div>
      <RadioGroup>
        <Radio id="first">
          <div className="font-semibold text-sm w-10/12">{data.name}</div>
          <div className="font-bold text-green-dark text-lg my-1.5">
            {data.price} zł
          </div>
          <div className="font-normal text-xs mb-4">{data.sold}+ kupionych</div>
        </Radio>
      </RadioGroup>
      <Divider borderColor="gray.300" />
    </div>
  );
};

export default Option;
