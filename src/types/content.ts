export type CategorySlug =
  | "saude-mental"
  | "home-office"
  | "alimentacao"
  | "sono"
  | "movimento"
  | "produtividade";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
}

export interface Article {
  id: string;
  category: CategorySlug;
  title: string;
  summary: string;
  /** Órgão ou instituição que publicou o material original. */
  source: string;
  url: string;
  /** Data em que a fonte foi consultada, no formato AAAA-MM-DD. */
  accessedAt: string;
}
