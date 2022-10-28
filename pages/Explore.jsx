import React from "react";
import { useState } from "react";
import Link from "next/link";

import NavBar from "../components/NavBar";
import Alert from "../components/Alert";
import { getBooks, getCategories, GetAuthors } from "../services";

import { motion } from "framer-motion";

export default function Explore({ books, categories, authors }) {
  const [alertNotAviable, setAlertNotAviable] = useState(false);

  return (
    <div className="darkBackground">
      <div className="container mx-auto w-screen min-h-screen px-4 pb-12">
        <NavBar />
        {alertNotAviable === true && (
          <Alert setAlertNotAviable={setAlertNotAviable} />
        )}

        <div className="sticky top-0 py-8 darkBackground">
          <div className="flex gap-6 items-center">
            <h1 className="text-xl text-white">Browse By</h1>
            <button class=" w-fit py-2 px-6 text-sm text-white btnColor rounded-lg hover:opacity-90">
              Gener
            </button>
            <button
              onClick={() => setAlertNotAviable(true)}
              class=" w-fit py-2 px-6 text-sm text-white btnColorSecond"
            >
              Author
            </button>
          </div>

          <div className="flex gap-3 md:gap-6 py-6  whitespace-nowrap overflow-y-auto">
            <button class=" w-fit py-1 md:py-2 px-4 md:px-6 text-sm text-white btnColor rounded-lg hover:opacity-90">
              All
            </button>
            {categories.map((categorie) => (
              <button
                key={categorie.node.slug}
                onClick={() => setAlertNotAviable(true)}
                class=" w-fit py-1 px-6 text-sm text-white btnColorSecond"
              >
                {categorie.node.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {books.map((book) => (
            <div key={book.node.slug}>
              <div class="grid grid-cols-2">
                <div className="justify-self-center">
                  <motion.figure className="image" layoutId={book.node.title}>
                    <img
                      class="w-40 h-full "
                      src={book.node.img.url}
                      alt=""
                      srcset=""
                    ></img>
                  </motion.figure>
                </div>
                <div class="flex flex-col my-auto gap-8">
                  <div>
                    <p class="mb-2 text-sm text-white">
                      {book.node.category.title}
                    </p>
                    <h1 class="text-2xl text-white">{book.node.title}</h1>
                    <p class=" text-white">by {book.node.author.name}</p>
                  </div>
                  <Link href={"/book/" + book.node.slug}>
                    <button class=" w-fit py-2 px-6 text-white font-medium btnColor rounded-lg hover:opacity-90">
                      Read Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const books = (await getBooks()) || [];
  const categories = (await getCategories()) || [];
  const authors = (await GetAuthors()) || [];

  return {
    props: {
      books,
      categories,
      authors,
    },
  };
}
