const highlights = [
  {
    title: "Só fontes oficiais",
    text: "Ministério da Saúde, Biblioteca Virtual em Saúde, Ministério do Trabalho e Emprego, OPAS/OMS, ONU e órgãos públicos estaduais.",
  },
  {
    title: "Resumo antes do link",
    text: "Você entende a ideia central antes de decidir se quer ler o documento completo.",
  },
  {
    title: "ODS 3 da ONU",
    text: "Projeto acadêmico da Uninter, em Novo Hamburgo/RS, alinhado ao objetivo de Saúde e Bem-Estar.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="page-container flex scroll-mt-4 flex-wrap gap-[clamp(24px,4vw,40px)] py-[clamp(40px,7vw,72px)]"
    >
      <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-4">
        <h2 id="sobre-titulo" className="text-[clamp(27px,3.6vw,36px)] font-bold">
          Sobre o projeto
        </h2>
        <p className="text-muted">
          Quem trabalha com Tecnologia da Informação passa boa parte do dia diante de telas,
          sentado e sob pressão de prazos. A informação de qualidade sobre saúde existe, mas está
          espalhada em guias longos e portais difíceis de navegar.
        </p>
        <p className="text-muted">
          Esta plataforma reúne esse material, resume o essencial e aponta para a fonte original,
          para que profissionais de TI e moradores de Novo Hamburgo encontrem orientação confiável
          em poucos minutos.
        </p>
      </div>

      <ul className="flex min-w-0 flex-[1_1_340px] flex-col gap-3">
        {highlights.map((item) => (
          <li key={item.title} className="rounded-card border border-line bg-surface px-[22px] py-5">
            <h3 className="font-display text-lg font-semibold">{item.title}</h3>
            <p className="text-[15px] text-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
