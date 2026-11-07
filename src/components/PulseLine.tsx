"use client";

import { useState } from "react";
import { PauseIcon, PlayIcon } from "@/components/icons/InterfaceIcons";

const PULSE_PATH =
  "M0 52h250l18-8 14 8h60l16-44 22 76 18-52 12 20h180l18-8 14 8h70l16-44 22 76 18-52 12 20h190l18-8 14 8h218";

const pausedClass = "group-data-[paused=true]:[animation-play-state:paused]";

// Linha de batimento que atravessa o topo. O botão de pausa atende à WCAG 2.2.2;
// com "reduzir movimento" no sistema, a linha fica estática e o botão some.
export default function PulseLine() {
  const [paused, setPaused] = useState(false);

  return (
    <div data-paused={paused} className="group">
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 88"
        preserveAspectRatio="none"
        fill="none"
        className="absolute bottom-3.5 left-0 h-[88px] w-full stroke-vital"
      >
        <path
          d={PULSE_PATH}
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`animate-pulse-draw opacity-35 [stroke-dasharray:2] [stroke-dashoffset:2] motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:[stroke-dashoffset:0] ${pausedClass}`}
        />
        <path
          d={PULSE_PATH}
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`animate-pulse-trace [stroke-dasharray:0.35_1.65] [stroke-dashoffset:2] motion-reduce:hidden ${pausedClass}`}
        />
      </svg>

      <button
        type="button"
        onClick={() => setPaused((value) => !value)}
        aria-label="Pausar animação"
        aria-pressed={paused}
        title={paused ? "Retomar animação" : "Pausar animação"}
        className="absolute right-[clamp(16px,4vw,24px)] bottom-6 inline-flex size-11 items-center justify-center rounded-full border border-[#2f7a75] bg-hero text-[#cfe9e3] hover:border-vital hover:text-white focus-visible:outline-white motion-reduce:hidden"
      >
        {paused ? <PlayIcon className="size-4" /> : <PauseIcon className="size-4" />}
      </button>
    </div>
  );
}
