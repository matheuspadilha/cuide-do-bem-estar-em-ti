import PulseLine from "@/components/PulseLine";
import { ArrowRightIcon } from "@/components/icons/InterfaceIcons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <div className="page-container relative flex flex-wrap items-center gap-[clamp(28px,5vw,64px)] pt-[clamp(44px,8vw,96px)] pb-[clamp(112px,13vw,168px)]">
        <div className="flex min-w-0 flex-[1_1_480px] flex-col items-start gap-5">
          <p className="text-[15px] font-semibold tracking-[0.04em] text-vital uppercase">
            Fontes oficiais, em linguagem simples
          </p>
          <h1 className="text-[clamp(40px,6.6vw,80px)] leading-none font-bold tracking-[-0.03em] text-white">
            Cuide do <span className="whitespace-nowrap">Bem-Estar</span> em TI
          </h1>
          <p className="text-[clamp(19px,2.2vw,24px)] leading-[1.35] font-medium">
            Saúde, equilíbrio e qualidade de vida para quem vive de tecnologia.
          </p>
          <p className="max-w-[540px] text-[#cfe9e3]">
            Resumos curtos e diretos do que o Ministério da Saúde e a OMS recomendam para quem
            trabalha no computador, sempre com o link para a fonte original.
          </p>
          <div className="mt-1.5 flex flex-wrap gap-3">
            <a
              href="#categorias"
              className="inline-flex min-h-[54px] items-center gap-2 rounded-full bg-cta px-[30px] text-lg font-semibold text-on-cta no-underline hover:text-on-cta hover:brightness-105 focus-visible:outline-white"
            >
              Ver os artigos
              <ArrowRightIcon className="size-[18px]" />
            </a>
            <a
              href="#sobre"
              className="inline-flex min-h-[54px] items-center rounded-full border border-[#6fa9a2] px-[26px] font-semibold text-white no-underline hover:border-vital hover:text-white focus-visible:outline-white"
            >
              Conhecer o projeto
            </a>
          </div>
        </div>

        <div className="flex min-w-0 flex-[0_1_340px] max-[900px]:flex-[1_1_340px] flex-col gap-2.5 rounded-[28px_28px_28px_8px] border border-hero-line bg-hero-card p-[clamp(22px,3vw,30px)]">
          <p className="text-[15px] font-semibold text-vital">Um bom começo</p>
          <p className="flex items-baseline gap-2.5 font-display font-bold whitespace-nowrap text-white">
            <span className="text-[clamp(64px,9vw,96px)] leading-[0.95] tracking-[-0.03em]">
              150
            </span>
            <span className="text-[26px]">min</span>
          </p>
          <p className="text-base leading-[1.45] text-[#e3f4f0]">
            de atividade física por semana é a recomendação para adultos. Dá pouco mais de 20
            minutos por dia.
          </p>
          <p className="text-[13px] text-[#a9d6cd]">
            Fonte: Guia de Atividade Física, Ministério da Saúde.
          </p>
        </div>
      </div>

      <PulseLine />
    </section>
  );
}
