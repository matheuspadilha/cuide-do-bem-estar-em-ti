import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import { PulseIcon } from "@/components/icons/InterfaceIcons";
import { navLinks } from "@/data/navigation";

export default function Header() {
  return (
    <header className="border-b border-line bg-surface">
      <div className="page-container flex flex-wrap items-center gap-x-2 gap-y-2 py-3">
        <Link
          href="/"
          className="mr-auto flex min-h-11 min-w-0 pr-2 items-center gap-2.5 text-ink no-underline max-[380px]:gap-2 hover:text-ink max-[960px]:flex-1"
        >
          <span className="inline-flex size-9 max-[380px]:size-8 shrink-0 items-center justify-center rounded-[12px_12px_12px_4px] bg-primary text-on-primary">
            <PulseIcon className="size-[22px]" />
          </span>
          <span className="truncate font-display text-[clamp(14px,3.9vw,19px)] font-bold tracking-[-0.01em]">
            Cuide do Bem-Estar em TI
          </span>
        </Link>

        <nav aria-label="Principal" className="max-[960px]:hidden">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-2.5 font-medium text-ink no-underline hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ficam soltos na linha para o painel do menu do celular ocupar a largura toda abaixo. */}
        <ThemeToggle />
        <MobileMenu />
      </div>
    </header>
  );
}
