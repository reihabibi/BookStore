import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { MdOutlineMenuBook, MdHomeFilled } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { TbBooks } from "react-icons/tb";
import { AiOutlineFileSearch, AiOutlineSearch } from "react-icons/ai";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

function SideBar({ setIsSidebarOpen, isSidebarOpen }) {
  const Pages = [
    { name: "Home", url: "/", icon: <MdHomeFilled /> },
    { name: "Find Books", url: "/Explore", icon: <AiOutlineFileSearch /> },
    { name: "My Books", url: "", icon: <MdOutlineMenuBook /> },
    { name: "My Notes", url: "", icon: <CgNotes /> },
  ];

  const router = useRouter();
  return (
    <div
      className={
        "fixed lg:sticky top-0 bottom-0 z-30 h-screen px-4 animation duration-500 ease-in-out " +
        (isSidebarOpen ? "w-full md:w-64" : "w-0 hidden")
      }
    >
      <div>
        <div className="flex items-center justify-between  ">
          <div className="flex items-center gap-x-2 ml-2 my-9 text-gray-100 text-2xl font-semibold hover:text-gray-300 cursor-pointer">
            <TbBooks />
            <h1>Book Store</h1>
          </div>
          <button
            className="block lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            X
          </button>
        </div>
        <div className="">
          {Pages.map((page, index) => (
            <Link key={index} href={page.url}>
              <div
                className={
                  "flex items-center gap-4 my-4 py-3 px-6 w-full rounded-xl text-left font-semibold cursor-pointer animation duration-200 ease-in-out " +
                  (router.pathname === page.url
                    ? " btnColor text-white"
                    : " text-white btnColorHover")
                }
              >
                <div className="text-xl">{page.icon}</div>
                {page.name}
              </div>
            </Link>
          ))}
          <div className="flex md:hidden items-center text-white">
            <input
              type="text"
              placeholder="Press Enter to Search...."
              className=
                "w-full h-9 bg-transparent px-2 border-b border-white focus:outline-none "

            />
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <AiOutlineSearch className="-ml-10 w-10 h-10 p-2 btnColorHover rounded-full " />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 w-5/6">
        <button className="flex items-center gap-4 my-2 py-2 px-6 w-full rounded-xl text-left text-white  btnColorHover font-semibold cursor-pointer ">
          <FiHelpCircle className="text-xl" />
          Get Help
        </button>
        <button className="flex items-center gap-4 my-2 py-2 px-6 w-full rounded-xl text-left text-white btnColorHover font-semibold cursor-pointer">
          <FiSettings className="text-xl" />
          Settings
        </button>
      </div>
    </div>
  );
}

export default SideBar;
