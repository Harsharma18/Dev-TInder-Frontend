import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Pagenotfound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-base-200 text-center px-4">
      {/* 404 animation */}
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-8xl font-extrabold text-error drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Text */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg mt-4 text-gray-600"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link to="/" className="btn btn-primary mt-6 btn-wide shadow-lg">
          Go Back Home
        </Link>
      </motion.div>

      {/* Decorative floating shapes */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-primary rounded-full opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 bg-secondary rounded-full opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
    </div>
  );
};

export default Pagenotfound;
