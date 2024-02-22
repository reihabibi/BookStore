"use client";

import React, { useEffect } from "react";
import SearchHook from "@/hooks/SearchHook"
import BookItem from "./BookItem";

import Typography from "@/components/ui/typography";
// import { Button } from "../_ui/button";

interface IBooksGrid {
  books: any[]
  title: string
  viewAll: true | false,
  category?: null | string
}

const BooksGrid: React.FC<IBooksGrid> = ({ books, title, viewAll, category }) => {

  const { searchText, setSearchText } = SearchHook();

  return (
    <div className="mb-14">
      <div className="flex items-center justify-between">
        <Typography variant="subheading">{title}</Typography>
        {viewAll && <Typography variant="body" className="hover:underline cursor-pointer" onClick={(e: any) => setSearchText(`subject:${category}`)}>view all</Typography>}
      </div>

      <div className="mt-9 grid grid-cols-2 gap-6 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {books.map((book) => (
          <BookItem bookData={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}

export default BooksGrid;
