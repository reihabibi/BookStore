const iso6391 = require('iso-639-1');

import { getSingleBook } from "@/services/bookService";

import { motion } from "framer-motion";


function Book({ data }: any) {

  let book = data.volumeInfo


  return (
    <div className="container mx-auto py-8 lg:py-0 px-4 md:px-12 min-h-screen">
      <div className="">
        <div className="flex flex-col lg:flex-row pt-6 items-center gap-x-28 gap-y-10">
          <div className="">
            <motion.div layoutId={data.id} className="h-48 md:w-48 md:h-72">
              <img
                className="w-full h-full rounded-xl border-2 border-transparent hover:border-white object-cover"
                src={book.imageLinks && book.imageLinks.thumbnail}
                alt=""
              ></img>
            </motion.div>
          </div>

          <div className="">
            <motion.div
              className="text-center lg:text-left "
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              <h1 className="text-3xl text-white">{book.title}</h1>
              <p className="mt-1 text-lg font-semibold text-gray-300">
                by {book.authors && book.authors[0]}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, }}
              transition={{ delay: 0.8, duration: 2 }}
            >
              <div className="flex items-center gap-x-10 md:gap-x-24 my-12">
                <div className="flex flex-col text-center gap-y-2">
                  <h1 className="md:text-xl font-medium text-white">{new Date(book.publishedDate).getFullYear()}</h1>
                  <p className="text-white">Release</p>
                </div>
                <div className="flex flex-col text-center gap-y-2">
                  <h1 className="md:text-xl font-medium text-white">{book.pageCount}</h1>
                  <p className="text-white">Nr of Pages</p>
                </div>
                <div className="flex flex-col text-center gap-y-2">
                  <h1 className="md:text-xl font-medium text-white">{iso6391.getName(book.language)}</h1>
                  <p className="text-white">Language</p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start items-center gap-6">
                <button
                  className="py-2 px-8 text-white font-bold btnColor rounded-lg hover:opacity-95"
                >
                  Read Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="my-16"
        initial={{ opacity: 0, }}
        animate={{ opacity: 0.8, }}
        transition={{ delay: 1, duration: 2 }}
      >
        <h1 className="mb-1 text-xl text-white font-semibold">
          {book.categories && book.categories[0]}
        </h1>
        <div
          className="text-gray-100"
          dangerouslySetInnerHTML={{ __html: book.description }}
        ></div>
        <p className="text-center text-gray-600 hover:text-gray-500 cursor-pointer">Read More</p>
      </motion.div>
    </div>

  );
}

export default Book;


// This gets called on every request
export async function getServerSideProps(context: { params: any; }) {

  const { params } = context;
  const { slug } = params;

  // Fetch data from external API
  const res = await getSingleBook(slug)
  const data = await res

  // Pass data to the page via props
  return { props: { data } }
}