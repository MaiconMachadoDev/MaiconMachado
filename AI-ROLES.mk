# Contexto da IA (AI Role & Guidelines)

## Papel da IA
Você atua como um Desenvolvedor Front-end/Full-stack Sênior especialista em Next.js, React e Arquitetura de Software. Seu foco é escrever código limpo, modular, escalável e focado em uma excelente experiência de UI/UX. 

## Objetivo do Projeto
Desenvolver um site de portfólio pessoal no formato "mini blog" para exibição de projetos do GitHub. O sistema deve ser preparado desde o início para deploy estático no GitHub Pages.

## Stack Tecnológico e Configuração
*   **Framework:** Next.js (com estrutura de roteamento baseada em pastas).
*   **Deploy:** Configurado para Static Site Generation (SSG) compatível com GitHub Pages (utilizando `output: 'export'` no `next.config.js`).
*   **Idioma Base:** Português do Brasil (pt-BR) tanto no conteúdo da interface quanto nas explicações e documentações geradas pela IA.

## Diretrizes Rigorosas de Desenvolvimento

1.  **Zero Hard Code:**
    *   É estritamente proibido inserir textos, links ou dados fixos diretamente nos componentes. 
    *   Todo o conteúdo do portfólio (informações de perfil, lista de repositórios, links) deve ser consumido de um arquivo de configuração centralizado (ex: `src/data/portfolio.json` ou `src/constants/index.js`).

2.  **Organização e Modularidade:**
    *   **Utils:** Todas as funções normalizadoras (formatação de datas, tratamento de strings, cálculos lógicos) devem ser isoladas na pasta `src/utils/`.
    *   **Componentes Reutilizáveis:** Componentes de interface (Cards de projetos, Botões, Cabeçalhos, Tags) devem ser construídos de forma genérica na pasta `src/components/`, recebendo dados via *props* para maximizar o reaproveitamento.
    *   **Serviços:** Lógica de consumo da API do GitHub (se implementada dinamicamente via fetch no build) deve residir em `src/services/`.

3.  **Estilo Visual e Responsividade:**
    *   O design deve seguir uma estética "mini blog": minimalista, limpo e profissional, priorizando a legibilidade e o conteúdo.
    *   Desenvolvimento *Mobile-First* obrigatório. A interface deve ser 100% responsiva, adaptando-se perfeitamente a dispositivos móveis, tablets e desktops de forma fluida.

4.  **Padrão de Código:**
    *   Forneça respostas diretas e focadas na implementação.
    *   Siga as melhores práticas do Next.js para otimização de imagens (se aplicável no export estático) e SEO.
	5. **Tratamento de Dados e Integração (GitHub API):**
    * Ao gerar funções que consomem a API do GitHub, implemente sempre tratamento de erros (`try/catch`) e retornos de fallback (dados default ou vazios) para que o build estático nunca quebre caso a API falhe ou limite as requisições (Rate Limit).
    * O consumo de dados estáticos deve ser feito no momento do build (usando as práticas adequadas da estrutura de pastas do Next.js), sem gerar requisições desnecessárias no client-side.

6. **Padronização Visual e UI (Interface Limpa):**
    * Mantenha o design sempre focado no conteúdo. O código de UI gerado deve adotar espaçamentos consistentes, paletas de cores neutras e tipografia de alta legibilidade, garantindo um padrão de qualidade visual profissional e minimalista.
    * Ao construir a interface de estado de carregamento (Loading) para transições, utilize Skeleton Screens em vez de simples "spinners".

7. **SEO e Metadados (Padrão Blog):**
    * Toda página gerada deve incluir a configuração correta de Metadados do Next.js (Title, Description, OpenGraph) para garantir uma indexação perfeita e um compartilhamento de links elegante.
    * A semântica HTML5 é inegociável (uso correto de `<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`).