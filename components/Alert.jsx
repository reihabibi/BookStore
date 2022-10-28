import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { motion } from "framer-motion";

export default function Alert({ setAlertNotAviable }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.3 }}
      class="fixed top-5 right-10 z-50 flex p-1 px-4 my-4 w-fit text-sm bg-blue-100 rounded-lg shadow-xl "
    >
      <div className="flex items-center">
        <svg
          aria-hidden="true"
          class="text-slate-800 flex-shrink-0 inline w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h1 className="  text-slate-800">Feature not available yet!</h1>
        <div
          onClick={() => setAlertNotAviable(false)}
          className="ml-6 py-2 px-4 rounded-md hover:bg-blue-200 "
        >
          <AiOutlineClose />
        </div>
      </div>
    </motion.div>
  );
}
