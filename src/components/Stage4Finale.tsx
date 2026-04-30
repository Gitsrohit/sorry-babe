"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "@/components/Confetti";

export default function Stage4Finale() {
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLetter(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="z-10 flex flex-col items-center text-center max-w-sm mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Confetti />

      <motion.div
        className="text-7xl mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: [0, 360] }}
        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
      >
        🎉
      </motion.div>

      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        YAAAY! Thank you Supu Baby! 🥰
      </motion.h2>

      <motion.p
        className="text-gray-500 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        I knew you couldn&apos;t stay mad at me
      </motion.p>

      {showLetter && (
        <motion.div
          className="bg-white rounded-3xl p-6 shadow-xl border border-pink-100 text-left"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-gray-700 leading-relaxed space-y-3">
            <span className="block font-semibold text-pink-500 text-base mb-2">
              Dear Supu Baby 💌
            </span>
            <span className="block">
              I&apos;m genuinely sorry for hurting you. You&apos;re the most
              important person in my life and I never want to be the reason
              you&apos;re sad.
            </span>
            <span className="block mt-2">
              I promise to be better, to listen more, and to always choose you
              — even when I&apos;m being dumb. 🙃
            </span>
            <span className="block mt-2">
              You deserve all the love in this world, and I&apos;m so lucky
              you&apos;re mine.
            </span>
            <span className="block mt-3 text-right font-medium text-pink-600">
              Forever yours 💕
            </span>
          </p>
        </motion.div>
      )}

      <motion.div
        className="mt-6 flex gap-2 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        {["💖", "🌹", "💕", "🥰", "💗"].map((emoji, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
