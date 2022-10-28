import Head from "next/head";
import {
  getBooks,
  getCategories,
  getBooksBestSeller,
  getBooksFetured,
  getBooksNotFeturedAndBest,
} from "../services";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import BooksDiplay from "../components/BookDisplay";
import Newsletter from "../components/Newsletter";
import SideBar from "../components/SideBar";
import Alert from "../components/Alert";
import { useState } from "react";

export default function Home({
  books,
  categories,
  booksBestSeller,
  booksFetured,
  booksNotFeturedAndBest,
}) {
  const [alertNotAviable, setAlertNotAviable] = useState(false);

  return (
    <div className="darkGradientBackground">
      <div className="container mx-auto w-sceen px-4">
        <Head>
          <title>Book Store</title>
          <meta name="description" content="Book store made by Rei Habibi" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {alertNotAviable === true && (
          <Alert setAlertNotAviable={setAlertNotAviable} />
        )}
        <NavBar />
        <Hero booksFetured={booksFetured} />
        <BooksDiplay books={booksBestSeller} title={"Best Sellers"} />
        <BooksDiplay books={booksNotFeturedAndBest} title={"Latest Books"} />
        <Newsletter />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const books = (await getBooks()) || [];
  const categories = (await getCategories()) || [];
  const booksBestSeller = (await getBooksBestSeller()) || [];
  const booksFetured = (await getBooksFetured()) || [];
  const booksNotFeturedAndBest = (await getBooksNotFeturedAndBest()) || [];

  return {
    props: {
      books,
      categories,
      booksBestSeller,
      booksFetured,
      booksNotFeturedAndBest,
    },
  };
}
