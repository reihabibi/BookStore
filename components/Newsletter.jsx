import React from "react";

export default function Newsletter() {
  return (
    <div class="w-full flex py-12 mt-20 flex-col lg:flex-row gap-y-6 items-center justify-center gap-x-20 ">
      <div>
        <h1 class="text-white text-4xl font-bold">Get the latest updates</h1>
        <p class="mt-2 text-gray-300">Sign up for the latest updates on books</p>
      </div>
      <div>
        <div class="flex">
          <input type="email" placeholder="example@mail.com" className="w-48 md:w-96 searchColor px-2 md:px-8 py-1 md:py-2 text-white rounded-l-lg focus:outline-none"></input>
          <button class="py-2 px-6 text-white font-bold btnColor rounded-r-lg">
            Subscribe
          </button>
        </div>
        <p className="ml-1 mt-3 text-gray-300 text-xs">We care about the protection of your data. <span className="font-bold underline cursor-pointer">Read our Privacy Policy.</span> </p>
      </div>
    </div>
  );
}
