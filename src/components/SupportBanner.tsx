export default function SupportBanner() {
  return (
    <section aria-labelledby="apoio-titulo" className="bg-panel text-on-panel">
      <div className="page-container flex flex-wrap items-center justify-between gap-x-10 gap-y-5 py-9">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-1.5">
          <h2 id="apoio-titulo" className="text-2xl font-semibold">
            Precisa conversar agora?
          </h2>
          <p className="text-base">
            O CVV oferece apoio emocional gratuito, 24 horas por dia, pelo telefone 188. No SUS, as
            unidades básicas de saúde e os CAPS fazem o acolhimento inicial.
          </p>
        </div>
        <a
          href="tel:188"
          className="inline-flex min-h-[50px] items-center rounded-full bg-white px-[26px] font-semibold text-[#0b2a30] no-underline hover:text-[#0b2a30] hover:brightness-95"
        >
          Ligar 188
        </a>
      </div>
    </section>
  );
}
