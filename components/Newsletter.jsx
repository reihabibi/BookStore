import React from "react";

export default function Newsletter() {
  return (
    <div class="flex py-6 flex-col lg:flex-row gap-y-12 items-center justify-center gap-x-20 ">
      <div>
        <img
          src="https://freepik.cdnpk.net/img/banner/microfunnel-flaticon.webp"
          alt=""
          srcset=""
        ></img>
      </div>
      <div>
        <h1 class="text-white text-4xl font-bold">Get the latest updates</h1>
        <p class="mt-2 text-white">Sign up for the latest updates on books</p>
        <div class="flex gap-4 mt-8">
          <input type="text"></input>
          <button class="py-2 px-6 text-white font-bold btnColor rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
