import React from "react";
import { Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchInput = () => {
  return (
    <div className=" ml-4 mr-4 bg-gray-100 flex focus-within:shadow-lg focus-within:bg-white rounded-md flex-1">
      <SearchIcon className="m-3" />
      <Input variant="unstyled" placeholder="Szukaj" maxWidth />
      <div className="bg-gray-400 h-6 w-0.5 m-2"></div>
      <Input variant="unstyled" placeholder="Miasto" width="50%" />
      <div className=" bg-green rounded-r-md">
        <SearchIcon className="m-3 white" color="white" />
      </div>
    </div>
  );
};

export default SearchInput;
