export interface NavLink {
  label: string;
  href: string;
}

// As âncoras apontam para "/" para funcionarem também a partir de /contato.
export const navLinks: NavLink[] = [
  { label: "Categorias", href: "/#categorias" },
  { label: "Artigos", href: "/#artigos" },
  { label: "Sobre o projeto", href: "/#sobre" },
  { label: "Contato", href: "/contato" },
];
