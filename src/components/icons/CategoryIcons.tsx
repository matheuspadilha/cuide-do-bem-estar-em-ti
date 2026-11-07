import type { JSX, SVGProps } from "react";
import type { CategorySlug } from "@/types/content";

type IconProps = SVGProps<SVGSVGElement>;

const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

function MentalHealthIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
      <path d="M8.5 11.5h2l1-2 1.5 4 1-2h1.5" />
    </svg>
  );
}

function HomeOfficeIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 10v9h12v-9" />
      <rect x="9.5" y="12" width="5" height="4" rx="0.6" />
    </svg>
  );
}

function FoodIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M12 7c-3-2-7 0-7 5 0 4 3 9 7 9s7-5 7-9c0-5-4-7-7-5z" />
      <path d="M12 7c0-2 1-4 3-4" />
    </svg>
  );
}

function SleepIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    </svg>
  );
}

function MovementIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="13" cy="4.5" r="1.8" />
      <path d="M7 21l3-6 3 2v4" />
      <path d="M6 12l3-4 4 1 2 3 3 1" />
    </svg>
  );
}

function ProductivityIcon(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="M5 7l-2.5 6a3 3 0 0 0 5 0z" />
      <path d="M19 7l-2.5 6a3 3 0 0 0 5 0z" />
      <path d="M8 21h8" />
    </svg>
  );
}

export const categoryIcons: Record<CategorySlug, (props: IconProps) => JSX.Element> = {
  "saude-mental": MentalHealthIcon,
  "home-office": HomeOfficeIcon,
  alimentacao: FoodIcon,
  sono: SleepIcon,
  movimento: MovementIcon,
  produtividade: ProductivityIcon,
};
