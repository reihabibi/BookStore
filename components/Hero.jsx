import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Hero({ booksFetured }) {
  return (
    <div class="flex flex-col w-full lg:flex-row mt-8 lg:mt-16 gap-x-8 gap-y-4 ">
      <div class="flex flex-col justify-center w-full lg:w-1/3">
        <h1 class="text-6xl text-white">New & Trending</h1>
        <p class="my-2 text-lg text-white">Explore new worlds from authors</p>
        <input class="my-6 h-10 rounded-lg" type="text"></input>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        {booksFetured.map((book) => (
          <Link key={book.node.slug} href={"/book/" + book.node.slug}>
            <motion.figure layoutId={book.node.title}>
              <img
                class="w-full h-full cursor-pointer hover:drop-shadow-2xl	transition ease-in-out delay-100 "
                src={book.node.img.url}
                alt=""
                srcset=""
              ></img>
            </motion.figure>
          </Link>
        ))}
      </div>
    </div>
  );
}
