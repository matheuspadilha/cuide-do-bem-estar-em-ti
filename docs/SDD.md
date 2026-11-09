# SDD — Cuide do Bem-Estar em TI

Documento de especificação do projeto. É a referência oficial para o desenvolvimento e substitui o prompt mestre original nos pontos em que o protótipo trouxe decisões novas.

- **Versão:** 2.0 (atualizada a partir do protótipo validado)
- **Protótipo de referência:** https://claude.ai/artifact/YKBXshpEqSHe2zNCozZaTP
- **Pasta do projeto:** `/Users/matheuspadilha/Workspace/Projects/cuide-do-bem-estar-em-ti`

---

## 1. Forma de trabalho

O desenvolvimento é incremental. Cada etapa é implementada, validada e apresentada antes da próxima.

### Regras obrigatórias

1. Implementar somente a etapa atual.
2. Não antecipar funcionalidades de etapas futuras.
3. Não criar funcionalidades fora dos requisitos deste documento.
4. Evitar dependências desnecessárias e abstrações prematuras.
5. Priorizar código simples, legível, tipado e de fácil manutenção.
6. Seguir as boas práticas de Next.js, React, TypeScript e Tailwind CSS.
7. Usar versões estáveis e compatíveis no momento da configuração.
8. Analisar a estrutura existente antes de modificar arquivos.
9. Não sobrescrever configurações sem necessidade.
10. Ao concluir cada etapa, apresentar arquivos modificados, validações feitas, resultado esperado e mensagem de commit sugerida.
11. Aguardar confirmação explícita antes de iniciar a próxima etapa.
12. Se surgir um problema relevante no planejamento, explicar o problema, a alternativa e o impacto antes de agir fora do escopo.

### Procedimento de cada etapa

1. **Objetivo:** o que será feito e por quê.
2. **Arquivos:** quais serão criados ou modificados.
3. **Implementação:** somente o necessário para a etapa.
4. **Validação:** comandos e verificações pertinentes.
5. **Resultado esperado:** como conferir o funcionamento.
6. **Commit:** mensagem curta e coerente (Conventional Commits, em inglês).

Se a validação falhar, corrigir antes de avançar.

---

## 2. Identificação do projeto

| Item | Definição |
|---|---|
| Título acadêmico | Cuide do Bem-Estar em TI: desenvolvimento de uma plataforma web para promoção da saúde e qualidade de vida de profissionais de Tecnologia da Informação |
| Nome da plataforma | Cuide do Bem-Estar em TI |
| Instituição | Uninter |
| Curso | Engenharia de Software |
| ODS | ODS 3 — Saúde e Bem-Estar |
| Contexto | Novo Hamburgo/RS: profissionais de TI e comunidade local que trabalha no computador |
| Publicação | Vercel, com URL pública para divulgação local |

**Objetivo:** reunir orientações de saúde publicadas por fontes oficiais, resumidas em linguagem simples, para que profissionais de TI e moradores de Novo Hamburgo encontrem orientação confiável em poucos minutos.

O título curto ("Cuide do Bem-Estar em TI") é usado na interface. O termo "Tecnologia da Informação" aparece por extenso nos metadados de busca, na primeira menção do "Sobre o projeto", no rodapé e nos documentos acadêmicos.

---

## 3. Conceito da aplicação

Landing page de página única, moderna e responsiva, com curadoria de artigos de fontes oficiais. Cada artigo é um cartão com fonte, título, resumo curto e link para o material original.

A plataforma não deve parecer site hospitalar, clínica ou blog genérico. Evitar a combinação azul, branco e vermelho.

### Princípios de conteúdo

- **Somente fontes oficiais:** Ministério da Saúde, Biblioteca Virtual em Saúde, Ministério do Trabalho e Emprego, OPAS/OMS, ONU, governos estaduais e órgãos públicos.
- **Resumo antes do link:** o visitante entende a ideia central antes de abrir o documento.
- **Caráter educativo e preventivo:** sem diagnóstico; aviso visível de que o conteúdo não substitui profissionais de saúde.
- **Tom positivo:** títulos em forma de ação ou ganho, sem esconder riscos. O home office é apresentado pelo que oferece de bom e por como fazê-lo bem, não como problema.
- **Rastreabilidade:** cada artigo registra fonte, URL e data de consulta.

---

## 4. Identidade visual

### Conceito

Saúde e tecnologia sem aparência de clínica. Assinatura visual: a linha de batimento cardíaco, presente no logo e atravessando o topo da página.

### Cores

Tokens definidos como variáveis CSS e trocados pelo tema.

| Token | Claro | Escuro | Uso |
|---|---|---|---|
| `bg` | `#F2FAF7` | `#07161A` | Fundo da página |
| `surface` | `#FFFFFF` | `#0E2328` | Cartões, cabeçalho, seções alternadas |
| `surface2` | `#E4F4EF` | `#143033` | Botões secundários do cabeçalho |
| `ink` | `#0B2A30` | `#E8F4F1` | Texto principal |
| `muted` | `#3F585B` | `#A8C3BE` | Texto secundário |
| `line` | `#CDE2DC` | `#21403F` | Bordas e divisores |
| `primary` | `#08706B` | `#4FD6BC` | Links, botões primários, seleção |
| `primary-ink` | `#FFFFFF` | `#06211F` | Texto sobre `primary` |
| `tag-bg` / `tag-ink` | `#D8F0E9` / `#07504C` | `#173A37` / `#9BE6D5` | Etiquetas de fonte e ícones |
| `panel` / `panel-ink` | `#0B2A30` / `#E6F3F0` | `#12302F` / `#E8F4F1` | Faixa de apoio emocional |
| `hero` / `hero-card` / `hero-line` | `#05393A` / `#0B4A4A` / `#1C6462` | `#0A2E2F` / `#103D3D` / `#1F5553` | Topo da página |
| `focus` | `#1D5FD1` | `#9CC2FF` | Contorno de foco |

Cores fixas nos dois temas: `vital` `#5EF0C8` (linha de batimento e destaques no topo), `cta` `#FF6B4A` com texto `#2A0E07` (somente o botão principal do topo).

### Tipografia

- **Títulos:** Bricolage Grotesque (500, 600, 700).
- **Texto:** Figtree (400, 500, 600).
- Carregadas com `next/font/google`.

### Forma

- Cartões com canto assimétrico: `20px 20px 20px 6px`.
- Botões em pílula (`999px`), altura mínima de 44 px.
- Ícones em SVG inline, traço de 1,9 a 2,4 px, sem biblioteca externa.

### Movimento

- Linha de batimento: desenha-se ao carregar e um trecho brilhante percorre a linha em loop (3,2 s).
- Botão discreto de pausa no canto do topo (WCAG 2.2.2).
- Com `prefers-reduced-motion`, nenhuma animação: linha estática, botão de pausa oculto, rolagem instantânea.

---

## 5. Estrutura da página

Ordem das seções em `/`:

1. **Cabeçalho:** logo (ícone + nome), navegação (Categorias, Artigos, Sobre o projeto, Contato) e botão de tema. Abaixo de 960 px, a navegação vira menu em botão; o cabeçalho cabe em uma linha a partir de 360 px.
2. **Topo (hero):** fundo `hero` de ponta a ponta.
   - Faixa: "Fontes oficiais, em linguagem simples".
   - Título: "Cuide do Bem-Estar em TI" (sem quebra no hífen de "Bem-Estar").
   - Subtítulo: "Saúde, equilíbrio e qualidade de vida para quem vive de tecnologia."
   - Texto de apoio: "Resumos curtos e diretos do que o Ministério da Saúde e a OMS recomendam para quem trabalha no computador, sempre com o link para a fonte original."
   - Botões: "Ver os artigos" (coral, leva às categorias) e "Conhecer o projeto".
   - Painel: "Um bom começo — 150 min de atividade física por semana é a recomendação para adultos. Dá pouco mais de 20 minutos por dia." Fonte: Guia de Atividade Física, Ministério da Saúde.
   - Linha de batimento animada e botão de pausa.
3. **Categorias:** "Escolha por onde começar". Seis cartões; o selecionado fica destacado. Três colunas no desktop, duas no tablet, duas compactas (só ícone e nome) no celular.
4. **Artigos:** nome da categoria selecionada, contagem e cartões (fonte, título, resumo, "Ler o material original" em nova aba). Aviso de caráter educativo ao final. Categoria inicial: Saúde Mental.
5. **Apoio emocional:** "Precisa conversar agora?" com CVV 188 (link `tel:188`), UBS e CAPS.
6. **Sobre o projeto:** proposta, público, Novo Hamburgo e três destaques (fontes oficiais, resumo antes do link, ODS 3).
7. **Chamada de contato:** texto curto e link para `/contato`.
8. **Rodapé:** "Cuide do Bem-Estar em TI · Projeto acadêmico de Matheus Padilha · Uninter · Engenharia de Software · ODS 3 · Novo Hamburgo/RS" e aviso de conteúdo educativo.
9. **Botão flutuante "Voltar ao topo":** aparece após cerca de 600 px de rolagem; sobe a página e move o foco para o logo do cabeçalho. Quando oculto, não recebe foco.

Página `/contato`: título, texto de convite e link `mailto:` para o e-mail do projeto.

---

## 6. Categorias

| Ordem | Slug | Nome | Descrição |
|---|---|---|---|
| 1 | `saude-mental` | Saúde Mental | Reconhecer os sinais de sobrecarga e saber onde encontrar apoio. |
| 2 | `home-office` | Home Office Saudável | Ergonomia, postura e um espaço confortável para aproveitar o melhor do trabalho remoto. |
| 3 | `alimentacao` | Alimentação | Comer bem em dias corridos, com base no Guia Alimentar brasileiro. |
| 4 | `sono` | Sono e Descanso | Dormir melhor e recuperar a mente depois de um dia de tela. |
| 5 | `movimento` | Movimento e Exercícios | Mais movimento no dia a dia, mesmo com a agenda cheia. |
| 6 | `produtividade` | Produtividade Saudável | Jornada, pausas e o equilíbrio entre entrega e qualidade de vida. |

A categoria "Cuidados no Home Office" do documento original foi renomeada para "Home Office Saudável".

Meta de conteúdo: 3 ou 4 artigos por categoria. Conteúdo inicial: 19 artigos (Apêndice A).

---

## 7. Requisitos funcionais

| Código | Requisito | Como é atendido |
|---|---|---|
| RF01 | Exibir a landing page inicial | Página `/` com todas as seções da seção 5 |
| RF02 | Permitir a navegação pelas categorias | Seis cartões de categoria selecionáveis em `/` |
| RF03 | Exibir o conteúdo da categoria selecionada | Lista de artigos da categoria escolhida, logo abaixo dos cartões |
| RF04 | Permitir o acesso à página de contato | Página `/contato`, acessível pelo menu e pela chamada na página inicial |
| RF05 | Disponibilizar dicas e orientações | Artigos resumidos de fontes oficiais e faixa de apoio emocional |

## 8. Requisitos não funcionais

| Código | Requisito | Critério de aceite |
|---|---|---|
| RNF01 | Responsividade | Sem rolagem horizontal em 360, 768 e 1280 px; cabeçalho em uma linha no celular |
| RNF02 | Usabilidade | Navegação por teclado completa, foco visível, alvos de toque de 44 px ou mais |
| RNF03 | Desempenho | Lighthouse com nota 90 ou mais em desempenho, na versão publicada |
| RNF04 | Compatibilidade | Funciona em Chrome, Firefox, Safari e Edge atuais |
| RNF05 | Tema claro e escuro | Segue a preferência do sistema na primeira visita; o botão alterna e a escolha é lembrada; sem "piscar" o tema errado ao carregar |
| RNF06 | Acessibilidade | Contraste AA, `lang="pt-BR"`, hierarquia de títulos correta, animação pausável e respeito a `prefers-reduced-motion` |

---

## 9. Escopo e restrições

Somente front-end. Não implementar:

- Backend próprio, banco de dados ou API.
- Autenticação, cadastro ou perfis.
- Comentários, curtidas ou avaliações.
- Painel administrativo ou notificações.
- Formulário de contato com envio (o contato é por `mailto:`).
- Integrações externas além das fontes do Google Fonts via `next/font`.

Conteúdo mantido em arquivos locais tipados.

---

## 10. Stack e arquitetura

### Stack

Versões estáveis verificadas em 07/11/2026 (confirmar na Etapa 01):

| Tecnologia | Versão |
|---|---|
| Node.js | 24.21.0 (instalado) |
| npm | 11.19.0 (instalado) |
| Next.js (App Router) | 16.4.5 |
| React | 19.3.1 |
| TypeScript | a definida pelo `create-next-app` |
| Tailwind CSS | 4.3.5 |
| ESLint | a definida pelo `create-next-app` |

Sem bibliotecas adicionais.

### Estrutura de pastas

```
src/
  app/
    layout.tsx           fontes, metadados, script de tema
    page.tsx             página inicial
    contato/page.tsx     página de contato
    globals.css          Tailwind e tokens de tema
    sitemap.ts, robots.ts
  components/
    Header.tsx
    MobileMenu.tsx       cliente
    ThemeToggle.tsx      cliente
    Hero.tsx
    PulseLine.tsx        cliente (pausa da animação)
    CategoryExplorer.tsx cliente (seleção e lista de artigos)
    ArticleCard.tsx
    SupportBanner.tsx
    AboutSection.tsx
    ContactCallout.tsx
    Footer.tsx
    BackToTop.tsx        cliente
    icons/               ícones SVG das categorias e da interface
  data/
    categories.ts
    articles.ts
  types/
    content.ts           Category, Article
docs/
  SDD.md
```

### Modelo de dados

```ts
type CategorySlug =
  | 'saude-mental' | 'home-office' | 'alimentacao'
  | 'sono' | 'movimento' | 'produtividade';

interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
}

interface Article {
  id: string;
  category: CategorySlug;
  title: string;
  summary: string;
  source: string;
  url: string;
  accessedAt: string; // AAAA-MM-DD, data de consulta da fonte
}
```

### Diretrizes técnicas

- Componentes de servidor por padrão; somente os cinco marcados como "cliente" usam `'use client'`.
- Tema: atributo `data-theme` no `<html>`, definido por um script inline curto no `layout.tsx` antes da pintura, lendo `localStorage` e a preferência do sistema.
- Tokens no `globals.css` com `@theme` do Tailwind 4 e variáveis CSS por tema.
- Links externos com `target="_blank"` e `rel="noopener noreferrer"`.
- Metadados: título, descrição, Open Graph, `sitemap` e `robots`.
- Cabeçalhos de segurança no `next.config.ts`, em todas as rotas: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` e `Permissions-Policy` sem câmera, microfone e localização. HTTPS e HSTS ficam por conta da Vercel.

---

## 11. Plano de execução

| # | Etapa | Entrega | Commit |
|---|---|---|---|
| 01 | Inicialização | `git init`; Next.js com TypeScript, ESLint, App Router e pasta `src/`, sem Tailwind; lint e build passando | `chore: initialize Next.js project` |
| 02 | Tailwind e estilos globais | Tailwind 4, tokens de cor dos dois temas, fontes, base tipográfica | `style: configure Tailwind and global styles` |
| 03 | Estrutura e dados | Pastas, tipos e os arquivos de categorias e dos 19 artigos | `refactor: organize application structure` |
| 04 | Cabeçalho, navegação e tema | Logo, navegação, menu do celular, botão de tema com script anti-piscada | `feat: add header and navigation` |
| 05 | Topo (hero) | Textos, botões, painel de 150 min, linha de batimento em loop e botão de pausa | `feat: add landing page hero` |
| 06 | Categorias | Seis cartões com ícones e estado selecionado | `feat: add health and wellbeing categories` |
| 07 | Artigos | Lista da categoria selecionada, cartões e aviso educativo | `feat: add category content and wellbeing tips` |
| 08 | Apresentação do projeto | Faixa de apoio emocional e "Sobre o projeto" | `feat: add project introduction section` |
| 09 | Contato | Página `/contato` e chamada na página inicial | `feat: add contact page` |
| 10 | Rodapé e voltar ao topo | Rodapé e botão flutuante com foco no topo | `feat: add footer` |
| 11 | Responsividade | Revisão em 360, 768 e 1280 px, nos dois temas, com capturas | `style: improve responsive layout` |
| 12 | Acessibilidade e SEO | Teclado, foco, contraste, movimento reduzido, metadados, `sitemap`, `robots` | `feat: improve accessibility and metadata` |
| 13 | Validação | Lint, build, links dos artigos, Lighthouse, checklist de RF e RNF | `chore: validate application requirements` |
| 14 | Refinamento e publicação | Ajustes finais; repositório no GitHub; deploy na Vercel | `style: refine final interface` |

Responsividade e acessibilidade são construídas desde a Etapa 04; as Etapas 11 e 12 são revisões.

### Conferência de conteúdo

Concluída em 07/11/2026, na Etapa 07: os 19 resumos foram conferidos contra os documentos originais.

- Três links do gov.br passaram a exigir login e foram trocados: o Guia Alimentar aponta para a mesma obra na BVS; "Dez passos" aponta para a versão resumida oficial; o artigo de 2018 sobre atividade física e sono deu lugar à notícia da OPAS/OMS sobre as diretrizes de atividade física.
- O artigo "Guia Alimentar em versão resumida" deu lugar à notícia do Ministério da Saúde sobre os 10 anos do Guia (2024).
- NR-17: link trocado pelo texto vigente (revisão de 2021, consolidado em 2023) e resumo ajustado a ele.
- Ajustes de texto: ONU News ("carga horária"), cartilha do TCE-SP (sem afirmar que é ilustrada) e "O sono é essencial para a saúde" (orientações concretas da página).

---

## 12. Pendências

| Item | Responsável | Necessário até |
|---|---|---|
| Repositório no GitHub | Matheus | Etapa 14 |
| Conta na Vercel | Matheus | Etapa 14 |

---

## 13. Histórico de decisões

| Decisão | Motivo |
|---|---|
| Curadoria de artigos de fontes oficiais com resumo e link | Reduz o risco de escrever conteúdo de saúde e dá credibilidade |
| Categorias e artigos na página inicial, contato em `/contato` | Mantém a experiência do protótipo e cumpre o RF04 literalmente |
| "Cuidados no Home Office" renomeada para "Home Office Saudável" | Evita apresentar o home office como algo ruim |
| Seção sobre trabalho remoto x presencial removida | Decisão do autor durante a prototipação |
| Topo escuro com botão coral e linha de batimento | Impacto visual nos primeiros segundos sem aparência de clínica |
| Título mantido com "TI" | Termo usado pelo público; título curto cabe no topo e no cabeçalho do celular |
| Tema escuro | Pedido do autor; comum entre profissionais de TI |
| Botão de pausa da animação | Exigência da WCAG 2.2.2 para movimento contínuo |
| Botão "Voltar ao topo" com foco no logo | Facilita a navegação em página longa, inclusive por teclado |
| E-mail do projeto: `cuidedobemestaremti@gmail.com` | Conta dedicada evita expor o e-mail pessoal e passa confiança |
| Cabeçalhos de segurança sem CSP completa | A CSP exigiria nonce no script de tema, o que tira a geração estática; o site não tem dados nem formulários |
| Autoria nos metadados (`authors`, `creator`) e no rodapé | Identifica o autor nos buscadores e para quem visita o site |
| Prefixo `chore:` na Etapa 13 | Não há testes automatizados no escopo |
| Textos com "ergonomia", "postura", "trabalho remoto", "programadores" e "desenvolvedores" (descrição do site, categoria Home Office Saudável e "Sobre o projeto") | Esses termos não apareciam no HTML indexado; ergonomia é um dos objetivos do projeto e os demais são como o público pesquisa |

---

## Apêndice A — Conteúdo

O conteúdo vigente fica em `src/data/articles.ts` (19 artigos: Saúde Mental 3, Home Office Saudável 4, Alimentação 3, Sono e Descanso 3, Movimento e Exercícios 3, Produtividade Saudável 3), com fonte, link e data de consulta de cada um.
