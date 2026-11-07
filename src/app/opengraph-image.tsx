import { ImageResponse } from "next/og";

// Imagem exibida ao compartilhar o link (WhatsApp, redes sociais).
export const alt = "Cuide do Bem-Estar em TI: saúde, equilíbrio e qualidade de vida para quem vive de tecnologia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "#05393a",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 600, color: "#5ef0c8", letterSpacing: 2 }}>
          FONTES OFICIAIS, EM LINGUAGEM SIMPLES
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.02, marginTop: 24, letterSpacing: -2 }}>
          Cuide do Bem-Estar em TI
        </div>
        <div style={{ fontSize: 36, marginTop: 28, color: "#cfe9e3", maxWidth: 900 }}>
          Saúde, equilíbrio e qualidade de vida para quem vive de tecnologia.
        </div>
        <svg
          width="1200"
          height="90"
          viewBox="0 0 1200 90"
          style={{ position: "absolute", left: 0, bottom: 28 }}
        >
          <path
            d="M0 52h250l18-8 14 8h60l16-44 22 76 18-52 12 20h180l18-8 14 8h70l16-44 22 76 18-52 12 20h190l18-8 14 8h218"
            fill="none"
            stroke="#5ef0c8"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
