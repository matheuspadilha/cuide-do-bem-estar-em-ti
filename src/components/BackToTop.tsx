"use client";

import { useSyncExternalStore } from "react";
import { ArrowUpIcon } from "@/components/icons/InterfaceIcons";

const SHOW_AFTER = 600;

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const isScrolledDown = () => window.scrollY > SHOW_AFTER;

// Aparece depois de rolar a página; ao clicar, volta ao topo e leva o foco ao logo,
// para quem navega pelo teclado continuar do início.
export default function BackToTop() {
  const visible = useSyncExternalStore(subscribe, isScrolledDown, () => false);

  function goToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    document.getElementById("inicio")?.focus({ preventScroll: true });
  }

  return (
    <button
      type="button"
      onClick={goToTop}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      data-visible={visible}
      className="invisible fixed right-[clamp(16px,4vw,28px)] bottom-[clamp(16px,4vw,28px)] z-20 inline-flex size-[52px] translate-y-3 items-center justify-center rounded-full bg-primary text-on-primary opacity-0 shadow-[0_6px_20px_rgb(0_0_0/0.2)] transition-[opacity,translate,visibility] duration-200 hover:brightness-110 data-[visible=true]:visible data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none"
    >
      <ArrowUpIcon className="size-[22px]" />
    </button>
  );
}
