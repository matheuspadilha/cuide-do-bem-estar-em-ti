# Cuide do Bem-Estar em TI

Plataforma web que reúne orientações de saúde de fontes oficiais, resumidas em linguagem simples, para profissionais de Tecnologia da Informação e para quem trabalha no computador.

**Acesse:** https://cuide-do-bem-estar-em-ti.vercel.app

> Projeto acadêmico do curso de Engenharia de Software da **Uninter**, alinhado ao **ODS 3 — Saúde e Bem-Estar** da ONU, com foco na comunidade de **Novo Hamburgo/RS**.

---

## Sobre o projeto

**Título acadêmico:** *Cuide do Bem-Estar em TI: desenvolvimento de uma plataforma web para promoção da saúde e qualidade de vida de profissionais de Tecnologia da Informação.*

Quem trabalha muitas horas no computador convive com sedentarismo, postura inadequada, sono irregular e sobrecarga mental. Há bastante orientação confiável sobre esses temas, mas ela fica espalhada em documentos longos de órgãos públicos. A plataforma faz a curadoria desse material: cada artigo traz a fonte, um resumo curto e o link para o documento original. Assim, o visitante entende a ideia central em poucos minutos e decide se quer se aprofundar.

### Princípios

- **Somente fontes oficiais:** Ministério da Saúde, Biblioteca Virtual em Saúde, Ministério do Trabalho e Emprego, OPAS/OMS, ONU e outros órgãos públicos.
- **Resumo antes do link:** a ideia principal aparece antes de abrir o documento.
- **Caráter educativo e preventivo:** o conteúdo não faz diagnóstico nem substitui profissionais de saúde.
- **Rastreabilidade:** cada artigo registra fonte, URL e data de consulta.

### Público

Profissionais de TI e moradores de Novo Hamburgo que trabalham no computador, seja em home office, no presencial ou no híbrido.

---

## Funcionalidades

- **Seis categorias:** Saúde Mental, Home Office Saudável, Alimentação, Sono e Descanso, Movimento e Exercícios, Produtividade Saudável.
- **19 artigos selecionados**, cada um com fonte, resumo e link para o material original.
- **Faixa de apoio emocional**, com o CVV (ligação para 188), UBS e CAPS.
- **Tema claro e escuro:** na primeira visita segue o sistema, a escolha fica salva e o tema certo aparece desde o carregamento, sem piscar.
- **Página de contato** (`/contato`), com o e-mail do projeto.
- **Acessibilidade:** navegação completa por teclado, foco visível, contraste WCAG AA, animação que pode ser pausada e respeito a `prefers-reduced-motion`.
- **Responsivo** de 320 px a monitores ultrawide.

---

## Tecnologias

| Tecnologia | Versão |
|---|---|
| [Next.js](https://nextjs.org) (App Router) | 16.4.5 |
| React | 19.3.0 |
| TypeScript | 5 |
| Tailwind CSS | 4.3.5 |
| ESLint | 9 |
| Hospedagem | Vercel |

Não há outras bibliotecas: os ícones são SVG inline e as fontes (Bricolage Grotesque e Figtree) são carregadas com `next/font`. O site é **só front-end** e não tem backend, banco de dados nem coleta de dados. Todas as páginas são geradas de forma estática.

---

## Como rodar localmente

Requisitos: **Node.js 20.9 ou superior** (desenvolvido com o 24) e npm.

```bash
git clone https://github.com/matheuspadilha/cuide-do-bem-estar-em-ti.git
cd cuide-do-bem-estar-em-ti
npm install
npm run dev
```

Depois, abra http://localhost:3000.

### Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Serve o build de produção |
| `npm run lint` | Verificação com ESLint |

---

## Estrutura

```
src/
  app/
    layout.tsx           fontes, metadados e script de tema
    page.tsx             página inicial
    contato/page.tsx     página de contato
    globals.css          Tailwind e tokens de cor dos dois temas
    opengraph-image.tsx  imagem de compartilhamento
    sitemap.ts, robots.ts
  components/            seções da página (Header, Hero, CategoryExplorer…)
    icons/               ícones SVG
  data/
    categories.ts        as seis categorias
    articles.ts          os artigos, com fonte, link e data de consulta
  types/
    content.ts           tipos Category e Article
docs/
  SDD.md                 especificação completa do projeto
  VALIDACAO.md           registro da validação dos requisitos
```

### Como adicionar um artigo

Inclua um objeto em [`src/data/articles.ts`](src/data/articles.ts) seguindo o tipo `Article`:

```ts
{
  id: "identificador-unico",
  category: "sono", // slug de uma das seis categorias
  title: "Título em forma de ação ou ganho",
  summary: "Resumo curto, fiel ao documento original.",
  source: "Ministério da Saúde",
  url: "https://www.gov.br/...", // link público, que abra sem login
  accessedAt: "AAAA-MM-DD", // data em que a fonte foi consultada
},
```

---

## Qualidade e validação

Validação registrada em [`docs/VALIDACAO.md`](docs/VALIDACAO.md):

| Verificação | Resultado |
|---|---|
| Lighthouse (desempenho) | 98 no celular e 100 no desktop |
| Lighthouse (acessibilidade) | 100 |
| axe-core (WCAG 2.2 AA) | Nenhuma violação |
| Navegadores | Chromium (Chrome e Edge) e WebKit (Safari) |
| Links dos artigos | Todos abrem sem login |

Requisitos funcionais (RF01 a RF05) e não funcionais (RNF01 a RNF06) estão descritos no [SDD](docs/SDD.md#7-requisitos-funcionais).

O `next.config.ts` também define cabeçalhos de segurança: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` e `Permissions-Policy`.

---

## Documentação

- [**SDD**](docs/SDD.md): especificação, identidade visual, requisitos, arquitetura, plano de execução e histórico de decisões.
- [**Validação**](docs/VALIDACAO.md): resultados dos testes de requisitos, desempenho e acessibilidade.

---

## Aviso

O conteúdo da plataforma é **educativo e preventivo** e não substitui a avaliação de profissionais de saúde. Se precisar conversar agora, ligue para o **CVV — 188**, gratuito e disponível 24 horas.

---

## Licença

O código está sob a [licença MIT](LICENSE). Os documentos citados nos artigos continuam pertencendo às fontes originais, e os links levam ao material oficial de cada uma.

---

## Autor e contato

**Matheus Padilha** · Engenharia de Software · Uninter

Contato do projeto: [cuidedobemestaremti@gmail.com](mailto:cuidedobemestaremti@gmail.com)
