import React, { useState } from "react";

export default function SideBar() {
  const [isExplore, setIsExplore] = useState(true);

  return (
    <div className="fixed top-0 right-0 py-10 px-4 h-screen w-80 colorLightOpacity border-l border-slate-700 shadow-2xl">
      <div>{">>"}</div>
      <div className="w-full my-8 grid grid-cols-1 justify-items-center">
        <img
          className="rounded-full w-24 h-24 object-cover"
          src="https://images.unsplash.com/photo-1527285286036-1ae743926077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmwlMjByZWFkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
        <h1>Name</h1>
      </div>
      <div class="w-full my-10 py-8 grid grid-cols-1 justify-items-center gap-y-4 border-y border-slate-500">
        <button
          class={
            "w-3/4 py-2 text-white rounded-lg font-medium  transition ease-in-out delay-100 " +
            (isExplore ? "btnColor " : " hover:text-slate-300")
          }
          onClick={() => setIsExplore(true)}
        >
          Explore
        </button>
        <button
          class={
            "w-3/4 py-2 px-6 text-white font-medium  rounded-lg transition ease-in-out delay-100 " +
            (isExplore ? " hover:text-slate-300" : "btnColor")
          }
          onClick={() => setIsExplore(false)}
        >
          My Books
        </button>
      </div>
      <div class="w-full grid grid-cols-1 justify-items-center gap-y-4">
        <button class="w-3/4 py-2 text-white rounded-lg font-medium transition ease-in-out delay-100 hover:bg-gray-500 hover:bg-opacity-10">
          Explore
        </button>
        <button class="w-3/4 py-2 px-6 text-white font-medium  rounded-lg transition ease-in-out delay-100 hover:bg-gray-500 hover:bg-opacity-10">
          My Books
        </button>
      </div>
    </div>
  );
}
