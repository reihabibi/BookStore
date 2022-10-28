import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BooksDiplay = ({ books, title }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <>Loading</>;
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="py-12 md:py-16 lg:py-24 max-w-full">
      <p class="mb-4 text-2xl text-white ">{title}</p>
      <Slider {...settings}>
        {books.map((book) => (
          <div key={book.node.slug}>
            <div class="flex gap-6">
              <motion.figure className="image" layoutId={book.node.title}>
                <img
                  class="h-52"
                  src={book.node.img.url}
                  alt=""
                  srcset=""
                ></img>
              </motion.figure>

              <div class="flex flex-col my-auto gap-8">
                <div>
                  <p class="mb-2 text-sm text-white">
                    {book.node.category.title}
                  </p>
                  <h1 class="text-xl text-white">
                    {book.node.title.length > 20
                      ? book.node.title.substring(0, 20) + "..."
                      : book.node.title}
                  </h1>
                  <p class=" text-white">by {book.node.author.name}</p>
                </div>
                <Link href={"/book/" + book.node.slug}>
                  <button class=" w-fit py-2 px-6 text-white font-medium btnColor rounded-lg hover:opacity-90 transition ease-in delay-150">
                    Read Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BooksDiplay;
