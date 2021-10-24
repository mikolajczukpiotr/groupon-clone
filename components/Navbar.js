import React from "react";
import CategoryMenu from "./CategoryMenu";
import SearchInput from "./SearchInput";
const Navbar = () => {
  return (
    <div className="flex m-auto">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">
        GROUPON
      </h1>
      <CategoryMenu />
      <SearchInput />
    </div>
  );
};
export default Navbar;
