import { ExternalLinkIcon } from "@/components/icons/InterfaceIcons";
import type { Article } from "@/types/content";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-card border border-line bg-surface p-[22px]">
      <p className="self-start rounded-full bg-tag px-2.5 py-1 text-[13px] font-semibold text-on-tag">
        {article.source}
      </p>
      <h3 className="text-xl leading-tight font-semibold">{article.title}</h3>
      <p className="grow text-base text-muted">{article.summary}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-1.5 border-t border-line pt-2 text-base font-semibold"
      >
        Ler o material original
        <ExternalLinkIcon className="size-4" />
        <span className="sr-only">(abre em nova aba)</span>
      </a>
    </article>
  );
}
