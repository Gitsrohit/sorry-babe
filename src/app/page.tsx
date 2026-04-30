"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Stage1Intro from "@/components/Stage1Intro";
import Stage2Reasons from "@/components/Stage2Reasons";
import Stage3RunawayButton from "@/components/Stage3RunawayButton";
import Stage4Finale from "@/components/Stage4Finale";
import FloatingHearts from "@/components/FloatingHearts";

export default function Home() {
  const [stage, setStage] = useState(0);

  return (
    <main className="relative min-h-screen flex items-center justify-center p-4">
      <FloatingHearts />
      <AnimatePresence mode="wait">
        {stage === 0 && <Stage1Intro key="intro" onNext={() => setStage(1)} />}
        {stage === 1 && (
          <Stage2Reasons key="reasons" onNext={() => setStage(2)} />
        )}
        {stage === 2 && (
          <Stage3RunawayButton key="button" onNext={() => setStage(3)} />
        )}
        {stage === 3 && <Stage4Finale key="finale" />}
      </AnimatePresence>
    </main>
  );
}
