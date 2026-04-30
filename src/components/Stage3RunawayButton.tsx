"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";

interface Props {
  onNext: () => void;
}

export default function Stage3RunawayButton({ onNext }: Props) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("Do you forgive me?");

  const messages = [
    "Do you forgive me?",
    "Pretty please? 🥺",
    "I'll do anything!",
    "Come onnn 😭",
    "You can't stay mad forever!",
    "I'll buy you food! 🍕",
    "Okay fine... catch the No button 😤",
  ];

  const moveButton = useCallback(() => {
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (newAttempts < messages.length) {
      setMessage(messages[newAttempts]);
    }

    const maxX = 200;
    const maxY = 300;
    setNoPosition({
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY,
    });
  }, [attempts, messages]);

  return (
    <motion.div
      className="z-10 flex flex-col items-center text-center max-w-sm mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-6xl mb-4"
        animate={
          attempts > 3
            ? { rotate: [0, -10, 10, -10, 0] }
            : { scale: [1, 1.1, 1] }
        }
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {attempts > 4 ? "😤" : attempts > 2 ? "😢" : "🥹"}
      </motion.div>

      <motion.h2
        key={message}
        className="text-2xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {message}
      </motion.h2>

      <div className="relative flex flex-col items-center gap-4 w-full h-48">
        <motion.button
          onClick={onNext}
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-full text-xl shadow-lg"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          animate={
            attempts > 3
              ? { scale: [1, 1.15, 1] }
              : {}
          }
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          Yes, I forgive you 💖
        </motion.button>

        <motion.button
          onTouchStart={moveButton}
          onMouseEnter={moveButton}
          className="bg-gray-300 text-gray-600 font-semibold px-6 py-3 rounded-full text-sm absolute bottom-0"
          animate={{
            x: noPosition.x,
            y: noPosition.y,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          No 😒
        </motion.button>
      </div>

      {attempts > 2 && (
        <motion.p
          className="text-xs text-gray-400 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          (the No button is scared of you 😂)
        </motion.p>
      )}
    </motion.div>
  );
}
