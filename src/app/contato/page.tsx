import type { Metadata } from "next";
import { contactEmail } from "@/data/contact";
import { siteName } from "@/data/site";

const description =
  "Fale com o projeto Cuide do Bem-Estar em TI: sugestões de material, links que não abrem ou parcerias em Novo Hamburgo.";

// O openGraph da página substitui o do layout por inteiro, por isso repete os campos comuns.
export const metadata: Metadata = {
  title: "Contato",
  description,
  alternates: { canonical: "/contato" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName,
    url: "/contato",
    title: `Contato · ${siteName}`,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteName }],
  },
};

export default function ContactPage() {
  return (
    <main id="conteudo" tabIndex={-1} className="page-container py-[clamp(48px,8vw,96px)] focus:outline-none">
      <div className="flex max-w-[720px] flex-col gap-5">
        <h1 className="text-[clamp(36px,5vw,56px)] leading-none font-bold tracking-[-0.025em]">
          Contato
        </h1>
        <p className="text-lg text-muted">
          Tem uma sugestão de material, encontrou um link que não abre ou quer levar o projeto
          para a sua empresa ou comunidade em Novo Hamburgo? Escreva para a gente.
        </p>

        {contactEmail ? (
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex min-h-[50px] max-w-full items-center self-start rounded-full bg-primary px-[26px] font-semibold text-on-primary no-underline [overflow-wrap:anywhere] hover:text-on-primary hover:brightness-110 max-[380px]:px-4 max-[380px]:text-[15px]"
          >
            {contactEmail}
          </a>
        ) : (
          <p className="self-start rounded-full border border-line bg-surface px-[22px] py-3 font-semibold text-muted">
            E-mail do projeto em definição
          </p>
        )}

        <p className="rounded-card border border-line bg-surface p-5 text-[15px] text-muted">
          Este canal não oferece atendimento de saúde. Se precisar conversar agora, ligue{" "}
          <a href="tel:188" className="font-semibold">
            188
          </a>{" "}
          (CVV, gratuito e 24 horas) ou procure a unidade básica de saúde mais próxima.
        </p>
      </div>
    </main>
  );
}
