import axios from '@/utilities/axiosConfig'

import { BookCategoryParamsType , BookSearchParamsType} from "@/types/bookParamsTypes"

export async function getSearchedBooks({searchQuery, startIndex, maxResults}: BookSearchParamsType) {

    searchQuery = searchQuery
    startIndex = startIndex ?? '1';
    maxResults = maxResults ?? '20';     

    try {
      const res = await axios(
        `books/v1/volumes?q=${searchQuery}&startIndex=${startIndex}&maxResults=${maxResults}`
      );

      const data = await res.data.items;      
      return data;

    } catch (error) {
      console.error("[ Error on getSearchedBooks ]");
      console.log(error);
    }
  }

export async function getSingleBook (id: string) {
    try {
      const res = await axios(
        "books/v1/volumes/" + id
      );
      const data = await res.data;
      return data;
    } catch (error) {
      console.error("[ Error on getSingleBook ]");
      console.log(error);
    }
  }

export async function getBooksByCategories ({subject, startIndex, maxResults}: BookCategoryParamsType) {

    startIndex = startIndex ?? 1;
    maxResults = maxResults ?? 20;

    try {
      const res = await axios(
        `books/v1/volumes?q=subject:${subject}&startIndex=${startIndex}&maxResults=${maxResults}`
      );
      const data = await res.data;
      return data;
    } catch (error) {
      console.error("[ Error on getBooksByCategories ]");
      console.log(error);
    }
  }


