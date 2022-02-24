import React, { useState } from "react";
import Option from "./Option";
import { Button, Divider, Radio, RadioGroup } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const OptionList = ({ priceDetails }) => {
  const [showMoreOptions, setShowMoreOptions] = useState(true);
  const [optionList, setOptionList] = useState(priceDetails.slice(0, 4));
  const handleButtonClick = (list) => {
    setShowMoreOptions(!showMoreOptions);
    setOptionList(list);
  };

  const options = optionList.map((el) => {
    return <Option key={el.id} data={el} />;
  });
  return (
    <div>
      <RadioGroup name="option-list">{options}</RadioGroup>
      <div className="flex  justify-center">
        {optionList.length > 3 ? (
          <Button
            onClick={() =>
              handleButtonClick(
                showMoreOptions ? priceDetails : priceDetails.slice(0, 4)
              )
            }
            colorScheme="blue"
            variant="link"
            className="my-4"
            alignItems="center"
          >
            {showMoreOptions ? (
              <div>
                Zobacz wszystkie {priceDetails.length} opcje/opcji
                <ChevronDownIcon />
              </div>
            ) : (
              <div>
                Ukryj wszystkie {priceDetails.length} opcje/opcji
                <ChevronUpIcon />
              </div>
            )}
          </Button>
        ) : null}
      </div>
      <div>
        {optionList.length > 3 ? <Divider borderColor="gray.300" /> : null}
      </div>
    </div>
  );
};

export default OptionList;
