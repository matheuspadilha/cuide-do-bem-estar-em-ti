import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/InterfaceIcons";

export default function ContactCallout() {
  return (
    <section aria-labelledby="contato-titulo" className="border-t border-line bg-surface">
      <div className="page-container flex flex-wrap items-center justify-between gap-x-10 gap-y-6 py-[clamp(40px,7vw,72px)]">
        <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-2">
          <h2 id="contato-titulo" className="text-[clamp(27px,3.6vw,36px)] font-bold">
            Contato
          </h2>
          <p className="text-muted">
            Tem uma sugestão de material ou quer levar o projeto para a sua empresa ou comunidade
            em Novo Hamburgo? Escreva para a gente.
          </p>
        </div>
        <Link
          href="/contato"
          className="inline-flex min-h-[50px] items-center gap-2 rounded-full bg-primary px-[26px] font-semibold text-on-primary no-underline hover:text-on-primary hover:brightness-110"
        >
          Falar com o projeto
          <ArrowRightIcon className="size-[18px]" />
        </Link>
      </div>
    </section>
  );
}
