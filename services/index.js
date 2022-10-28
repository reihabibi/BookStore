import { request, gql } from "graphql-request";
const graphqlAPI =
  "https://api-ca-central-1.hygraph.com/v2/cl8w9k81l037r01t75qwpe9ce/master";

export const getBooks = async () => {
  const query = gql`
    query GetBooks {
      booksConnection {
        edges {
          cursor
          node {
            title
            slug
            description
            featuredBook
            img {
              url
            }
            author {
              name
              photo {
                url
              }
            }
            category {
              title
              slug
              photo {
                url
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.booksConnection.edges;
};

export const getBooksNotFeturedAndBest = async () => {
  const query = gql`
    query GetBooks {
      booksConnection(
        where: { featuredBook: false, AND: { bestSeller: false } }
      ) {
        edges {
          cursor
          node {
            title
            slug
            description
            language
            pages
            year
            featuredBook
            bestSeller
            img {
              url
            }
            author {
              name
              photo {
                url
              }
            }
            category {
              title
              slug
              photo {
                url
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.booksConnection.edges;
};

export const getBooksBestSeller = async () => {
  const query = gql`
    query GetBooksBestSeller {
      booksConnection(where: { bestSeller: true }) {
        edges {
          cursor
          node {
            title
            slug
            description
            language
            pages
            year
            featuredBook
            bestSeller
            img {
              url
            }
            author {
              name
              photo {
                url
              }
            }
            category {
              title
              slug
              photo {
                url
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.booksConnection.edges;
};

export const getBooksFetured = async () => {
  const query = gql`
    query GetBooksBestSeller {
      booksConnection(where: { featuredBook: true }) {
        edges {
          cursor
          node {
            title
            slug
            description
            language
            pages
            year
            featuredBook
            bestSeller
            img {
              url
            }
            author {
              name
              photo {
                url
              }
            }
            category {
              title
              slug
              photo {
                url
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.booksConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categoriesConnection {
        edges {
          node {
            title
            slug
            photo {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categoriesConnection.edges;
};

export const getBookDetails = async (slug) => {
  const query = gql`
    query GetBookDetails($slug: String!) {
      book(where: { slug: $slug }) {
        title
        description
        img {
          url
        }
        author {
          name
        }
        category {
          slug
          title
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.book;
};

export const GetAuthors = async () => {
  const query = gql`
    query GetAuthors {
      authorsConnection {
        edges {
          node {
            slug
            name
            photo {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.authorsConnection.edges;
};
