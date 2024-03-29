"use client";

import React , { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useRouter } from 'next/router';

const SearchHook = () => {
    const router = useRouter();
  
    const [searchText, setSearchText] = useState('');
    const [query] = useDebounce(searchText, 500);
  
    useEffect(() => {
      if (query) {
        console.log(searchText);
        console.log(query);
        router.push(`/explore?q=${searchText}&startIndex=1&maxResults=40`);
      }
    }, [query, router]);

    return {searchText, setSearchText}

}

export default SearchHook
