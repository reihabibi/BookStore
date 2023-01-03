import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

function BookItem({ book }) {
  const router = useRouter();
  if (router.isFallback) {
    return <>Loading</>;
  }

  return (
    <div>
        <div key={book.node.slug}>
          <Link href={"/book/" + book.node.slug}>
            <div class="px-2 flex flex-col gap-4 cursor-pointer	w-fit">
              <motion.figure className="image" layoutId={book.node.title}>
                <img
                  class="w-44 rounded-lg border-2 border-transparent hover:border-white object-cover"
                  src={book.node.img.url}
                  alt=""
                  srcset=""
                ></img>
              </motion.figure>

              
              <motion.div class="flex flex-col">
                <div>
                  <h1 class="text- tracking-wider text-gray-100">
                    {book.node.title.length > 20
                      ? book.node.title.substring(0, 20) + "..."
                      : book.node.title}
                  </h1>
                  <p class="mt-1 font-semibold text-sm text-gray-300">
                    {book.node.author.name}
                  </p>
                  {/* <p class="mt-1 text-sm text-white">
                    {book.node.category.title}
                  </p> */}
                </div>
              </motion.div>
            </div>
          </Link>
        </div>
    </div>
  );
}

export default BookItem;
