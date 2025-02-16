"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 text-gray-800 overflow-hidden">
      {/* Animation principale */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-[2]"
      >
        <h1 className="text-3xl font-bold font-poppins text-purple-600">
          Oops! Page Not Found 😢
        </h1>
        <p className="text-lg mt-4 text-gray-600">
          It seems the page you're looking for doesn't exist.
        </p>
      </motion.div>

      {/* Bouton de retour */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 z-[2]"
      >
        <a
          href="/"
          className="px-6 py-3 rounded-full bg-purple-500 text-white font-bold hover:bg-purple-600 shadow-lg"
        >
          Go Back Home
        </a>
      </motion.div>

      {/* Effet visuel en arrière-plan */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-[1] flex justify-center items-center"
      >
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
      </motion.div>
    </div>
  );
}
