# Validação dos requisitos — Cuide do Bem-Estar em TI

Registro da Etapa 13 (docs/SDD.md, seção 11). Validação feita em 07/11/2026, sobre o build de produção (`npm run build` + `next start`), na máquina de desenvolvimento.

## Ambiente

| Item | Versão |
|---|---|
| Next.js | 16.4.5 |
| React | 19.3.0 |
| Tailwind CSS | 4.3.5 |
| Node.js | 24.21.0 |
| Navegadores de teste | Chromium 158, WebKit 27.2 (motor do Safari), via Playwright |
| Auditorias | Lighthouse 12, axe-core 4 |

## Qualidade do código e build

| Verificação | Resultado |
|---|---|
| `npm run lint` | Sem erros nem avisos |
| `npx tsc --noEmit` | Sem erros de tipo |
| `npm run build` (limpo) | Todas as rotas estáticas: `/`, `/contato`, `/opengraph-image`, `/icon.svg`, `/robots.txt`, `/sitemap.xml` |
| CSS enviado | 6,4 KB (gzip) |
| Links dos 19 artigos | Todos abrem sem login (HTTP 200) |

## Requisitos funcionais

Testados em Chromium e WebKit, no desktop (1360 px) e no celular (390 px).

| Requisito | Como foi verificado | Chromium | WebKit |
|---|---|---|---|
| RF01 — Landing page inicial | Título, categorias e "Sobre o projeto" visíveis em `/` | ok | ok |
| RF02 — Navegação pelas categorias | Clique em "Sono e Descanso" marca a categoria como selecionada | ok | ok |
| RF03 — Conteúdo da categoria selecionada | Título da lista vira "Sono e Descanso" e mostra os 3 artigos dela | ok | ok |
| RF04 — Acesso à página de contato | Menu "Contato" leva a `/contato` | ok | ok |
| RF05 — Dicas e orientações | Artigos com fonte e link externo seguro; faixa do CVV 188 | ok | ok |

## Requisitos não funcionais

| Requisito | Critério (SDD) | Resultado |
|---|---|---|
| RNF01 — Responsividade | Sem rolagem horizontal em 360, 768 e 1280 px; cabeçalho em uma linha no celular | Sem rolagem horizontal de 320 a 1920 px nas duas páginas; cabeçalho em uma linha a partir de 320 px; linha de batimento completa também em monitores ultrawide (2560 e 3440 px) |
| RNF02 — Usabilidade | Teclado completo, foco visível, alvos de 44 px ou mais | Ordem de Tab lógica, "Pular para o conteúdo", foco visível; nenhum botão ou link isolado menor que 44 × 44 px |
| RNF03 — Desempenho | Lighthouse 90 ou mais em desempenho | 98 no celular e 100 no desktop, nas duas páginas (ver tabela abaixo) |
| RNF04 — Compatibilidade | Chrome, Firefox, Safari e Edge atuais | Chromium (base do Chrome e do Edge) e WebKit (base do Safari) aprovados; Firefox pendente de teste manual |
| RNF05 — Tema claro e escuro | Segue o sistema, alterna e lembra a escolha, sem piscar | Aprovado em Chromium e WebKit |
| RNF06 — Acessibilidade | Contraste AA, `lang="pt-BR"`, títulos corretos, animação pausável, movimento reduzido | axe sem violações (WCAG 2.2 AA) em 7 estados da página; Lighthouse acessibilidade 100 |

## Lighthouse (build de produção local)

| Página | Modo | Desempenho | Acessibilidade | Boas práticas | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| `/` | Celular | 98 | 100 | 100 | 100 | 2,3 s | 0 | 20 ms |
| `/contato` | Celular | 98 | 100 | 100 | 100 | 2,3 s | 0 | 10 ms |
| `/` | Desktop | 100 | 100 | 100 | 100 | 0,5 s | 0 | 0 ms |
| `/contato` | Desktop | 100 | 100 | 100 | 100 | 0,5 s | 0 | 0 ms |

O modo celular simula rede 4G lenta e CPU limitada. Repetir a medição na URL da Vercel na Etapa 14.

## Correção feita durante a validação

Em monitor ultrawide (34", 3440 px), a linha de batimento do topo terminava por volta de 80% da largura. A animação dependia do comprimento do traço, calculado antes de a linha ser esticada. Ela passou a revelar a linha por recorte da área visível (`clip-path`), e a linha virou um padrão repetido que não é esticado. Conferido em 390, 1360, 2560 e 3440 px, com e sem movimento reduzido, e os testes de requisitos foram repetidos no Chromium e no WebKit.

## Atualização posterior

O link da NR-17 apontava para o texto anterior à revisão de 2021 (Portaria MTP nº 423). Foi trocado pelo texto vigente consolidado, publicado na página de normas regulamentadoras vigentes do Ministério do Trabalho e Emprego, e o resumo foi conferido contra ele.

## Pendências

- **Firefox:** o navegador de teste não abre no ambiente isolado usado na validação. Testar manualmente no Firefox atual.
- **Medição na produção:** repetir o Lighthouse na URL publicada na Vercel.
- **E-mail do projeto:** preencher `src/data/contact.ts` quando o endereço existir.
