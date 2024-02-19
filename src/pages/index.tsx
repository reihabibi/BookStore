import Image from "next/image";
import React from "react";
import BooksGrid from "@/components/Books/BooksGrid";

import Trending_Books from "@/data/Home Page/Books_Trending.json"
import Our_Recommendations from "@/data/Home Page/Our_Recommendations.json"
import { getSearchedBooks } from "@/services/bookService";


export default function Home({fantasyBooks, romanceBooks, thrillersBooks } : any) {

  const trendingBooks: any[] = Trending_Books
  const recommendationBooks: any[] = Our_Recommendations

  return (
    <main className="py-6">

      <BooksGrid books={trendingBooks} title="Trending Books" viewAll={false}/>

      <BooksGrid books={recommendationBooks} title="Our Recommendation" viewAll={false}/>

      <BooksGrid books={fantasyBooks} title="Fantasy" category={'fantasy'} viewAll={true}/>
      <BooksGrid books={romanceBooks} title="Romance" category={'romance'} viewAll={true}/>
      <BooksGrid books={thrillersBooks} title="Thrillers" category={'thrillers'} viewAll={true}/>



    </main>
  );
}


export async function getServerSideProps() {


  const fantasyBooks = await getSearchedBooks({ searchQuery: 'subject:fantasy' , maxResults: '12' })
  const romanceBooks = await getSearchedBooks({ searchQuery: 'subject:romance' , maxResults: '12' })
  const thrillersBooks = await getSearchedBooks({ searchQuery: 'subject:thrillers' , maxResults: '12' })
  


  // Pass data to the page via props
  return { props: { fantasyBooks, romanceBooks, thrillersBooks } }

}

