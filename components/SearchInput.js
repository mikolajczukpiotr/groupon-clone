import React from "react";
import { Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const SearchInput = () => {
  return (
    <a className=" bg-gray-200 flex h-10 focus-within:shadow-lg focus-within:bg-white rounded-md">
      <SearchIcon className="m-3" />
      <Input variant="unstyled" placeholder="Szukaj" maxWidth />
      <div className="bg-gray-400 h-6 w-0.5 m-2"></div>
      <Input variant="unstyled" placeholder="Miasto" />
      <SearchIcon className="m-3 bg-green-700" />
    </a>
  );
};
export default SearchInput;
