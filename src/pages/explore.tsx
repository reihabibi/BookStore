
import FilterBar from "@/components/Filters/FilterBar";
import BooksGrid from "@/components/Books/BooksGrid";
import { getSearchedBooks } from "../services/bookService";

import Trending_Books from "@/data/Home Page/Books_Trending.json"
import Our_Recommendations from "@/data/Home Page/Our_Recommendations.json"
import { FilterModal } from "@/components/Filters/FilterModal";

function Explore({ data }: any) {

  return (
    <div className="">
      <div className="container mx-auto px-4 py-6 pb-12">
        {/* <FilterBar /> */}
        <FilterModal />
        <BooksGrid books={data} title="" viewAll={false} />
      </div>
    </div>
  );
}

export default Explore;


// This gets called on every request
export async function getServerSideProps(context: { query: any; }) {

  const { query } = context;

  const searchQuery = {
    searchQuery: query.q || null,
    startIndex: query.startIndex || null,
    maxResults: query.maxResults || null,
  };

  let data

  console.log(searchQuery.searchQuery);
  

  if (searchQuery.searchQuery) {
    console.log(1);
    
    data = await getSearchedBooks(searchQuery)
  } else {
    console.log(2);
    
    data = [...Trending_Books, ...Our_Recommendations]
  } 

  // Pass data to the page via props
  return { props: { data } }

}
