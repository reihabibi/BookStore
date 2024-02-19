import React, { useState } from "react";

import SearchInput from "./SearchInput";

import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { RiArrowDownSFill } from "react-icons/ri";
import { HiMenuAlt2 } from "react-icons/hi";


function NavBar({ setIsSidebarOpen, isSidebarOpen }: any) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div>
      <div className="w-full h-fit flex justify-between items-center text-white">
        <button
          className="w-6 h-6"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <HiMenuAlt2 className="h-full w-full cursor-pointer" />
        </button>
        <div className="flex items-center gap-x-4">
          <div className="hidden md:flex items-center">
            <SearchInput isSearchOpen={isSearchOpen}/>
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <AiOutlineSearch className="-ml-10 w-10 h-10 p-2 btnColorHover rounded-full " />
            </button>
          </div>
          <div className="h-fit py-2 px-4 flex items-center gap-x-4 rounded-2xl btnColorHover cursor-pointer">
            <div className="w-5 h-5">
              <AiOutlineUser className="w-full h-full"/>
            </div>            
            <div className="flex items-center gap-x-1">
              <h1 className="text-sm md:text-lg md:font-semibold">Alesia K.</h1>
              <RiArrowDownSFill className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
