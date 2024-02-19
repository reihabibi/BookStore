"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useRouter, usePathname } from "next/navigation";


const searchHook = () => {
    const router = useRouter();
    const pathname = usePathname();
  
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

export default searchHook