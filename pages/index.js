import Head from "next/head";
import {
  getBooks,
  getCategories,
  getBooksBestSeller,
  getBooksFetured,
  getBooksNotFeturedAndBest,
} from "../services";

import Newsletter from "../components/Newsletter";
import Alert from "../components/Alert";
import BookItem from "../components/BookItem";
import { useState } from "react";

export default function Home({
  booksBestSeller,
  booksFetured,
  booksNotFeturedAndBest,
}) {
  const [alertNotAviable, setAlertNotAviable] = useState(false);

  return (
    <div className=" py-6">

        <Head>
          <title>Book Store</title>
          <meta name="description" content="Book store made by Rei Habibi" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {alertNotAviable === true && (
          <Alert setAlertNotAviable={setAlertNotAviable} />
        )}

        <div>
          <h1 class="mb-8 text-2xl text-white ">Best Sellers</h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-y-10  gap-x-5 justify-items-center	">
            {booksBestSeller.map((book) => (
              <BookItem book={book} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h1 class="mb-8 text-2xl text-white ">Some Summer Books</h1> 
          <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-y-10 gap-x-5 justify-items-center	">
            {booksFetured.map((book) => (
              <BookItem book={book} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h1 class="mb-8 text-2xl text-white ">Latest Books</h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-y-10 gap-x-5 justify-items-center	">
            {booksNotFeturedAndBest.map((book) => (
              <BookItem book={book} />
            ))}
          </div>
        </div>

        <Newsletter/>
      </div>
  );
}

export async function getStaticProps() {
  const booksBestSeller = (await getBooksBestSeller()) || [];
  const booksFetured = (await getBooksFetured()) || [];
  const booksNotFeturedAndBest = (await getBooksNotFeturedAndBest()) || [];

  return {
    props: {
      booksBestSeller,
      booksFetured,
      booksNotFeturedAndBest,
    },
  };
}
