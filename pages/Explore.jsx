import React from "react";
import { useState } from "react";

import Alert from "../components/Alert";
import BookItem from "../components/BookItem";
import { getBooks, getCategories, GetAuthors } from "../services";

export default function Explore({ books, categories, authors }) {
  const [alertNotAviable, setAlertNotAviable] = useState(false);

  return (
    <div className="">
      <div className="container mx-auto px-4 py-6 pb-12">
        {alertNotAviable === true && (
          <Alert setAlertNotAviable={setAlertNotAviable} />
        )}

          <div className="mb-8 flex gap-3 md:gap-6 overflow-hidden">
            {categories.map((categorie) => (
              <button
                key={categorie.node.slug}
                onClick={() => setAlertNotAviable(true)}
                class=" w-fit h-fit py-1 px-6 text-sm text-gray-10 text-gray-200 colorLight rounded-lg whitespace-nowrap overflow-hiddwen tracking-wide"
              >
                {categorie.node.title}
              </button>
            ))}
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-12">
          {books.map((book) => (
            <BookItem book={book} />
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
