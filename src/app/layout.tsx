import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteDescription, siteName, siteUrl } from "@/data/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} · Saúde para profissionais de Tecnologia da Informação`,
    template: `%s · ${siteName}`,
  },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName,
    url: "/",
    title: siteName,
    description: siteDescription,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2faf7" },
    { media: "(prefers-color-scheme: dark)", color: "#07161a" },
  ],
};

// Aplica o tema salvo antes da primeira pintura, para a página não "piscar" no tema errado.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${figtree.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#conteudo"
          className="sr-only rounded-full bg-primary px-5 py-3 font-semibold text-on-primary no-underline focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 hover:text-on-primary"
        >
          Pular para o conteúdo
        </a>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
