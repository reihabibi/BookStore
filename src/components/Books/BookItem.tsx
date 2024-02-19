"use client";
// ToDo: SSR motion.figure

import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

const BookItem = ({ bookData }: any) => {
  const book = bookData.volumeInfo;
  let bookImg;

  if (book.imageLinks) {
    bookImg = book.imageLinks.thumbnail;
  } else {
    bookImg =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAAMFBMVEXf39/e3t6goKDi4uKdnZ2bm5vJycmpqanOzs7Y2NiwsLDBwcHS0tK7u7u0tLTGxsYUsu1SAAAEqUlEQVR4nO3di3ajIBAGYBDIzWTz/m+7EBXBeIkwlVF/zp62RgU/ZhBMerpC7r4IW5qvbQle95vBhvAnhDWIqMKxl0erlFHL8QV0VQ33fR8bvTD4Hm7YI+Vgz+SxzU/SvzJ9Vv897saxc76b6y4sbkqGjcuvK1ncTVHVymZLEoia3TtBEtYFwokJtHWBAAIIBQmSsC4QQAChKEHsf6UKAggggAACKYG0O0A4L+EAYwEEEEBovpB2BwgggFCScIA7EggggNB8Ie0OEM5LOMBY2D1BEtYFwokJtHWBAAIIRQm7n9pA4EEg7Q4QUpsFAQSKZkm7AwQQQChJOMAdCQQQQGi/gwACRbMgcCDs/o4EAg8CaXeAkNosCCCAAAIbAl1dMnxFJu7ekED6V2kGZbtE+quyFQFRmCtbjYUDEA6WSCq/ZEUhn6Ae+SWssUQUKr2uVN8nZEUhcSyEUaiySxFCMPpUNdava4JS6azhTBMF/apTy8t1QFhhKcIz+WZ0N58oFE4kRxCJU4VoCeUT6SmSiq2oIcSvbRyFD8E4wvO2tjwFryiol9FmXXkoT8iIAsHs7Al67XTwT1EkUvbzgk+kLEJOIv1RFNyMZZZIZaMwT9BVLe3y87KgCKPAjKCvUjUH/tsrofKHqCvfRIpmZx0PZ/1W/o/7Ps2PBGbDWfYHzK7EuQ1n2RH0tX+OlGpuNHBJpG5e8ITKEXyW/UpITiT/jzAKVRX06Ox4JolCMmFudnYh6XbKMAhDDsnsTBiF4I7UD4Yoj3T91pOE7aMwR7CPoao5RF3CazZ3pfUEgVki2c2HdM+U8hXOCjY4qjYTBGaJ5Lb14/V6DPq8Vu49J+ooCCLC92K7fXslyiN7TD1BSB8LVIRfHnmuyp05lUh7IHzyKA5D2URa/dSmbR59hupEFDKWeZtFoZ0swpmC2zJvKQp1O9/d+vvqzgjm3gV9NJFyCNskkjbdoiNcu3IbznKSoE31enYPcmEmMV5sR9ev3fVHH6b5GbrsGum3RBq5/vCexGWZJyfnhfb65aD0mcR6mdde4KD/fSYxHc5Dgn60j9BxzNwJXSZFayR+s/NHMFG6TOK9zJsT+Ezikkijw9l9+DFd1NvQDWfCKITzwnwM7GhoHkC5LTACwrzA1dMYWI2FZoFhmo/zzZLApqE12AM5EVwUxO3dliXBJ5cu9sCb/7gw2rcN4XteiDpyuYhu3mM0O7eti+H/1DcdiJCQHgU6wnLyROf0b1nedaE3JKN5QdvHyktqeWseiWSX1Sbr95GC+lYSRCphMDtnlvKz89pP/ccIGVEgeAfjml+yEin/Q1uK31OV6Y//FIkUbRCUAgTqAsLJCBMbC7vXH7shIaEqomZBAAEEEECga5a0O0AAAQQQ8poFgQGBtDtAAAGEkoQD3JFAKE+QhHWBcGICbV0ggLBfgiSsC4QTE8T+FxgggACCrwUEEEiaBQEEimZJuwMEEHZLkIR1gXBigjjCvAACBwJpd4AAAggggLB7wgGmtgMQSLsDhPMSDjAWQOBAIO0OEFKbBQEEEI5CIO0OEEAAAYS8ZkFgQCDtDhBAAAEEEHZPOMDUBgIIRIT/FE9jnR5CDcEAAAAASUVORK5CYII=";
  }

  return (
    <div className="block m-auto" key={bookData.id}>
      <Link href={"/book/" + bookData.id}>
        <div className=" flex flex-col items-center md:items-start gap-4 cursor-pointer">
          <motion.div layoutId={bookData.id} 
          className="h-48 md:w-48 md:h-72">
            <img
            className="w-full h-full object-cover rounded-xl border-2 border-transparent hover:border-white"
              src={bookImg}
              alt=""
            ></img>
          </motion.div>

          <div className="flex flex-col overflow-hidden">
            <div>
              <h1 className="truncate md:text-clip tracking-wider text-gray-100">
                {book.title.length > 20
                  ? book.title.substring(0, 20) + "..."
                  : book.title}
              </h1>
              <p className="truncate md:text-clip mt-1 font-semibold text-sm text-gray-300">
                {book.authors && book.authors[0].length > 20
                  ? book.authors[0].substring(0, 20) + "..."
                  : book.authors}
              </p>
              {/* <p class="mt-1 text-sm text-white">
              {book.node.category.title}
            </p> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookItem;
