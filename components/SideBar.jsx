import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";


import { MdOutlineMenuBook, MdHomeFilled } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { ImSearch, ImBooks } from "react-icons/Im";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

function SideBar({ setIsSidebarOpen }) {
  const Pages = [
    { name: "Home", url: "/", icon: <MdHomeFilled /> },
    { name: "Find Books", url: "/Explore", icon: <ImSearch /> },
    { name: "My Books", url: "", icon: <MdOutlineMenuBook /> },
    { name: "My Notes", url: "", icon: <CgNotes /> },
  ];

  const router = useRouter();
  return (
    <div className="fixed lg:sticky w-64 top-0 bottom-0 z-30 h-screen px-4 ">
      <div>
        <div className="flex items-center justify-between  ">
          <div className="flex items-center gap-x-2 ml-2 my-9 text-gray-100 text-2xl font-semibold hover:text-gray-300 cursor-pointer">
            <ImBooks />
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