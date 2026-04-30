"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  onNext: () => void;
}

const reasons = [
  { emoji: "😔", text: "I was wrong and I know it" },
  { emoji: "💭", text: "I hate seeing you upset because of me" },
  { emoji: "🤦", text: "I was being stupid, not mean" },
  { emoji: "💝", text: "You mean the world to me" },
  { emoji: "🌙", text: "I can't sleep knowing you're upset" },
  { emoji: "🥺", text: "Your smile is all I want to see" },
];

export default function Stage2Reasons({ onNext }: Props) {
  const [revealed, setRevealed] = useState<number[]>([]);

  const revealCard = (index: number) => {
    if (!revealed.includes(index)) {
      setRevealed([...revealed, index]);
    }
  };

  const allRevealed = revealed.length === reasons.length;

  return (
    <motion.div
      className="z-10 flex flex-col items-center text-center max-w-sm mx-auto w-full"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Tap each card to reveal 💌
      </motion.h2>
      <p className="text-sm text-gray-500 mb-6">
        {revealed.length}/{reasons.length} revealed
      </p>

      <div className="grid grid-cols-2 gap-3 w-full mb-6">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            onClick={() => revealCard(i)}
            className={`relative rounded-2xl p-4 h-28 flex items-center justify-center cursor-pointer select-none ${
              revealed.includes(i)
                ? "bg-white shadow-md border border-pink-100"
                : "bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg"
            }`}
            whileTap={{ scale: 0.95 }}
            layout
          >
            {revealed.includes(i) ? (
              <motion.div
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-2xl">{reason.emoji}</span>
                <span className="text-xs text-gray-700 font-medium leading-tight">
                  {reason.text}
                </span>
              </motion.div>
            ) : (
              <motion.span
                className="text-3xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎁
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>

      {allRevealed && (
        <motion.button
          onClick={onNext}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg shadow-pink-200"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          One more thing... 🙈
        </motion.button>
      )}
    </motion.div>
  );
}
