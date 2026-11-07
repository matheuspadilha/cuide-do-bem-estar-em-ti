"use client";

import { useState } from "react";
import { categoryIcons } from "@/components/icons/CategoryIcons";
import { categories } from "@/data/categories";
import type { CategorySlug } from "@/types/content";

export default function CategoryExplorer() {
  const [selected, setSelected] = useState<CategorySlug>("saude-mental");

  return (
    <section id="categorias" className="scroll-mt-4 border-b border-line bg-surface">
      <div className="page-container flex flex-col gap-6 pt-[clamp(36px,6vw,64px)] pb-[clamp(28px,4vw,40px)]">
        <div className="flex max-w-[640px] flex-col gap-2">
          <h2 className="text-[clamp(27px,3.6vw,36px)] font-bold">Escolha por onde começar</h2>
          <p className="text-muted">Seis frentes de cuidado. Toque em uma para ver os artigos.</p>
        </div>

        <ul className="grid grid-cols-3 gap-4 max-[1000px]:grid-cols-2 max-[640px]:gap-2.5">
          {categories.map((category) => {
            const Icon = categoryIcons[category.slug];
            const isSelected = category.slug === selected;
            return (
              <li key={category.slug} className="flex">
                <button
                  type="button"
                  onClick={() => setSelected(category.slug)}
                  aria-pressed={isSelected}
                  className="group flex w-full flex-col items-start gap-2.5 rounded-card border border-line bg-page p-[22px] text-left text-ink transition-[border-color,transform] duration-150 hover:border-primary motion-safe:hover:-translate-y-0.5 aria-pressed:border-primary aria-pressed:bg-tag aria-pressed:shadow-[inset_0_0_0_1px_var(--color-primary)] max-[640px]:p-4"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-[14px] bg-tag text-on-tag group-aria-pressed:bg-surface">
                    <Icon className="size-[26px]" />
                  </span>
                  <span className="font-display text-[21px] leading-tight font-semibold max-[640px]:text-[17px]">
                    {category.name}
                  </span>
                  <span className="text-[15px] text-muted max-[640px]:hidden">
                    {category.description}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
