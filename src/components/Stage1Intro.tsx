"use client";

import { motion } from "framer-motion";

interface Props {
  onNext: () => void;
}

export default function Stage1Intro({ onNext }: Props) {
  return (
    <motion.div
      className="z-10 flex flex-col items-center text-center max-w-sm mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="text-7xl mb-6"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🥺
      </motion.div>

      <motion.h1
        className="text-3xl font-bold text-gray-800 mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Hey Supu Baby...
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        I know I messed up and I&apos;m really sorry. Can you give me a minute
        to explain?
      </motion.p>

      <motion.button
        onClick={onNext}
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg shadow-pink-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        Okay, I&apos;m listening... 👀
      </motion.button>
    </motion.div>
  );
}
