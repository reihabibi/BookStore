export type BookCategoryParamsType = {
    subject: string;
    startIndex?: number;
    maxResults?: number;
  };

  export type BookSearchParamsType = {
    searchQuery: string | null;
    startIndex?: string | null;
    maxResults?: string | null;
  };