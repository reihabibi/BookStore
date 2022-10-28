import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div class="container mx-auto flex py-8 md:mb-6 w-full justify-between">
      <div>
        <Link href="/">
          <h1 class="text-white text-2xl cursor-pointer	">BOOKS</h1>
        </Link>
      </div>
      <div class="flex gap-8">
        <Link href="/Explore">
          <button
            class={
              "py-2 px-6 text-white rounded-lg font-medium cursor-pointer	 transition ease-in-out delay-100 " +
              (currentRoute === "/Explore"
                ? "btnColor shadow-xl "
                : " hover:text-slate-300")
            }
          >
            Explore
          </button>
        </Link>
        <button
          class="py-2 px-6 text-white font-medium  rounded-lg cursor-pointer	 transition ease-in-out delay-100 over:text-slate-300"
          x
        >
          My Books
        </button>
      </div>
      <div>
        <p class="text-white text-2xl"> = </p>
      </div>
    </div>
  );
}
