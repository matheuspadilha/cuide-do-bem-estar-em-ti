"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/icons/InterfaceIcons";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const darkQuery = "(prefers-color-scheme: dark)";

// O tema vem do atributo data-theme (escolha salva) ou, sem ele, da preferência do sistema.
function getTheme(): Theme {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "light" || chosen === "dark") return chosen;
  return window.matchMedia(darkQuery).matches ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ["data-theme"] });
  const media = window.matchMedia(darkQuery);
  media.addEventListener("change", onChange);
  return () => {
    observer.disconnect();
    media.removeEventListener("change", onChange);
  };
}

export default function ThemeToggle() {
  // No servidor o tema é desconhecido; o botão assume o claro até a hidratação.
  const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, () => null);
  const isDark = theme === "dark";

  function toggleTheme() {
    const next: Theme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Sem armazenamento disponível, a escolha vale só nesta visita.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar tema escuro"
      aria-pressed={isDark}
      className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-line bg-surface-alt px-3 text-[15px] font-medium text-ink"
    >
      {isDark ? <SunIcon className="size-[18px]" /> : <MoonIcon className="size-[18px]" />}
      <span className="max-[960px]:hidden">{isDark ? "Tema claro" : "Tema escuro"}</span>
    </button>
  );
}
