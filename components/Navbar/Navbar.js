import React from "react";
import CategoryMenu from "./CategoryMenu";
import SearchInput from "./SearchInput";
import LoginMenu from "./LoginMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="border-solid border-b border-gray-200">
      <div className="flex p-5 w-2/3 m-auto">
        <div className="ml-auto">
          <Image src="/logo.svg" width={128} height={35} />
        </div>
        <CategoryMenu />
        <SearchInput />
        <LoginMenu />
      </div>
    </div>
  );
};

export default Navbar;
