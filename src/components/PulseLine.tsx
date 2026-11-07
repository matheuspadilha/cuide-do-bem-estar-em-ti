"use client";

import { useState } from "react";
import { PauseIcon, PlayIcon } from "@/components/icons/InterfaceIcons";

// Um batimento a cada 400 px, repetido até 4000 px. A linha não é esticada: telas menores
// mostram o trecho central e telas maiores ampliam só um pouco, então o batimento mantém
// a mesma proporção do celular ao monitor ultrawide.
const BEAT = "h120l18-8 14 8h60l16-44 22 76 18-52 12 20h120";
const PULSE_PATH = `M0 52${BEAT.repeat(10)}`;

const pausedClass = "group-data-[paused=true]:[animation-play-state:paused]";

function Line({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 4000 88"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      className={`absolute bottom-3.5 left-0 h-[88px] w-full stroke-vital ${className}`}
    >
      <path d={PULSE_PATH} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Linha de batimento que atravessa o topo. O botão de pausa atende à WCAG 2.2.2;
// com "reduzir movimento" no sistema, a linha fica estática e o botão some.
export default function PulseLine() {
  const [paused, setPaused] = useState(false);

  return (
    <div data-paused={paused} className="group">
      <Line
        className={`animate-pulse-draw opacity-35 motion-reduce:animate-none motion-reduce:opacity-100 ${pausedClass}`}
      />
      <Line className={`animate-pulse-trace motion-reduce:hidden ${pausedClass}`} />

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
