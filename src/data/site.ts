// URL pública do site. Na Vercel, usa o domínio de produção do projeto; pode ser
// sobrescrita com NEXT_PUBLIC_SITE_URL (por exemplo, ao usar um domínio próprio).
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

export const siteName = "Cuide do Bem-Estar em TI";

export const siteDescription =
  "Resumos curtos de orientações oficiais de saúde para profissionais de Tecnologia da Informação: saúde mental, home office, alimentação, sono, movimento e produtividade saudável.";
