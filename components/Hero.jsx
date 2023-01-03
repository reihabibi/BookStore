import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Hero({ booksFetured }) {
  return (
    <div class="flex flex-col items-center justify-center w-full w-full">
      <h1 class="text-4xl text-white">New & Trending</h1>
      <p class="my-2 text-lg text-white">Explore new worlds from authors</p>
      <input class="my-6 h-10 w-2/5 rounded-lg" type="text"></input>
    </div>
  );
}
