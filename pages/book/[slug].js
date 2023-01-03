import React from "react";
import { useRouter } from "next/router";

import { useState } from "react";
import NavBar from "../../components/NavBar";
import Alert from "../../components/Alert";

import { motion } from "framer-motion";
import { AiOutlineHeart } from "react-icons/ai";

import { getBooks, getBookDetails } from "../../services";

export default function Book({ book }) {
  const [alertNotAviable, setAlertNotAviable] = useState(false);

  const router = useRouter();
  if (router.isFallback) {
    return <>Loading</>;
  }

  return (
    <div className="container mx-auto px-4 md:px-12 min-h-screen">
      <div className="">
        {alertNotAviable === true && (
          <Alert setAlertNotAviable={setAlertNotAviable} />
        )}

        <div class="flex pt-6 items-center gap-x-28">
          <div className="">
            <motion.figure layoutId={book.title}>
              <img className="w-64 rounded-lg" src={book.img.url} alt=""></img>
            </motion.figure>
          </div>

          <div class="">
            <div class="text-center lg:text-left ">
              <h1 class="text-3xl text-white">{book.title}</h1>
              <p class="mt-1 text-lg font-semibold text-gray-300">
                by {book.author.name}
              </p>
            </div>
            <motion.div
              class="flex items-center gap-x-24 my-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div class="flex flex-col text-center gap-y-2">
                <h1 class="text-xl font-medium text-white">2018</h1>
                <p class="text-white">Release</p>
              </div>
              <div class="flex flex-col text-center gap-y-2">
                <h1 class="text-xl font-medium text-white"> 124</h1>
                <p class="text-white">Number of Page</p>
              </div>
              <div class="flex flex-col text-center gap-y-2">
                <h1 class="text-xl font-medium text-white">English</h1>
                <p class="text-white">Language</p>
              </div>
            </motion.div>

            <div class="flex items-center gap-6">
              <button
                class="py-2 px-8 text-white font-bold btnColor rounded-lg hover:opacity-95"
                onClick={() => setAlertNotAviable(true)}>
                Read Now
              </button>
              <AiOutlineHeart
                onClick={() => setAlertNotAviable(true)}
                className="h-7 w-7 text-white hover:text-red-400"
              />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        class="my-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h1 class="mb-1 text-lg text-white font-medium">
          {book.category.title}
        </h1>
        <p class="text-gray-400">
          {book.description.length > 400
            ? book.description.substring(0, 320) + "..."
            : book.description}
        </p>
        <p class="text-center text-gray-600 hover:text-gray-500">Read More</p>
      </motion.div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getBookDetails(params.slug);
  return {
    props: {
      book: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const books = await getBooks();
  return {
    paths: books.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
