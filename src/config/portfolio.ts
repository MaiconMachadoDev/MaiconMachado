import type { DetalhesRepositorio } from '@/utils/projetos';

export type IconeNavegacao = 'home' | 'projetos' | 'sobre';
export type IconeSocial = 'github' | 'linkedin' | 'email';
export type TecnologiaId = 'react' | 'nextjs' | 'javascript' | 'tailwind' | 'git';

export interface ItemNavegacao {
  id: string;
  rotulo: string;
  href: string;
  icone: IconeNavegacao;
}

export interface RedeSocial {
  nome: string;
  url: string;
  rotulo: string;
  icone: IconeSocial;
}

export interface LinhaCodigo {
  numero: string;
  conteudo: string;
  destaque?: 'tag' | 'texto' | 'emoji';
}

export interface TecnologiaFlutuante {
  id: TecnologiaId;
  nome: string;
  posicao: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  atrasoAnimacao: string;
}

export const portfolioConfig = {
  perfil: {
    nome: 'Maicon Machado',
    cargo: 'Desenvolvedor Full-stack',
    foto: '/perfil.png',
    fotoAlt: 'Foto de perfil de Maicon Machado',
  },

  seo: {
    titulo: 'Portfólio | Maicon Machado',
    descricao:
      'Desenvolvedor Full-stack com 11 anos de experiência na área da saúde, transformando vivência clínica em soluções Health Tech de alta performance.',
    url: 'https://maicondev.com',
    locale: 'pt_BR',
  },

  navegacao: [
    { id: 'home', rotulo: 'Home', href: '#home', icone: 'home' },
    { id: 'projetos', rotulo: 'Projetos', href: '#projetos', icone: 'projetos' },
    { id: 'sobre', rotulo: 'Sobre Mim', href: '#sobre', icone: 'sobre' },
  ] satisfies ItemNavegacao[],

  redesSociais: [
    {
      nome: 'GitHub',
      url: 'https://github.com/MaiconMachadoDev',
      rotulo: 'Perfil no GitHub',
      icone: 'github',
    },
    {
      nome: 'LinkedIn',
      url: 'https://www.linkedin.com/in/maiconmachado/',
      rotulo: 'Perfil no LinkedIn',
      icone: 'linkedin',
    },
    {
      nome: 'E-mail',
      url: 'mailto:maiconcorporativo@outlook.com',
      rotulo: 'Enviar e-mail',
      icone: 'email',
    },
  ] satisfies RedeSocial[],

  cta: {
    texto: 'Baixar CV',
    href: '/CV_Maicon_Machado.pdf',
    rotulo: 'Baixar currículo em PDF',
  },

  hero: {
    tituloArquivo: 'maicon.tsx',
    linhas: [
      { numero: '01', conteudo: '< Olá, eu sou Maicon Machado ! >', destaque: 'tag' },
      {
        numero: '02',
        conteudo: '< Transformo 11 anos de experiência na área',
        destaque: 'tag',
      },
      {
        numero: '03',
        conteudo: 'da saúde em soluções Health Tech 💻 . >',
        destaque: 'texto',
      },
      {
        numero: '04',
        conteudo: '< Desenvolvedor Full-stack & Sócio na Inova Rise >',
        destaque: 'tag',
      },
    ] satisfies LinhaCodigo[],
    subtitulo:
      'Fundador de ferramentas como Unicirurgia e Laby Wallet, unindo vivência clínica e engenharia de software para resolver problemas reais.',
    scroll: {
      texto: 'Saiba mais',
      href: '#sobre',
    },
  },

  tecnologias: [
    {
      id: 'react',
      nome: 'React',
      posicao: { top: '12%', left: '8%' },
      atrasoAnimacao: '0s',
    },
    {
      id: 'nextjs',
      nome: 'Next.js',
      posicao: { top: '18%', right: '12%' },
      atrasoAnimacao: '1s',
    },
    {
      id: 'javascript',
      nome: 'JavaScript',
      posicao: { bottom: '28%', left: '6%' },
      atrasoAnimacao: '2s',
    },
    {
      id: 'tailwind',
      nome: 'Tailwind',
      posicao: { bottom: '18%', right: '8%' },
      atrasoAnimacao: '0.5s',
    },
    {
      id: 'git',
      nome: 'Git',
      posicao: { top: '42%', right: '5%' },
      atrasoAnimacao: '1.5s',
    },
  ] satisfies TecnologiaFlutuante[],

  github: {
    usuario: 'MaiconMachadoDev',
  },

  projetos: {
    titulo: 'Meus Projetos GitHub',
    subtitulo:
      'Uma vitrine dinâmica dos meus repositórios públicos, atualizados automaticamente.',
    pastaImagens: '/images/projects',
    repositoriosOcultos: [
      'demonstracaoAnestesio',
      'SiteSeuaquario',
      'william-contabilidade',
      'portifolio-site',
      'minibog_React',
      'MaiconMachado',
      'challenge-amigo-secreto_pt',
      'estudo-JS',
    ],
    /** Projetos adicionados manualmente (não vêm da API do GitHub) */
    projetosManuais: [
      {
        nome: 'Unicirurgia',
        descricao: `O **UniCirurgia** é uma plataforma completa de gestão cirúrgica e hospitalar desenvolvida para centralizar o gerenciamento de agendamentos, equipes médicas, pacientes, materiais, equipamentos e fluxos operacionais do centro cirúrgico.

Atuei como responsável pela arquitetura e desenvolvimento da aplicação, projetando uma solução escalável, segura e de alta disponibilidade para um ambiente crítico da área da saúde. Desenvolvi funcionalidades que abrangem desde o mapa cirúrgico em tempo real e controle de salas até dashboards gerenciais, gestão de convênios, médicos, equipamentos, materiais e processos administrativos.

A plataforma foi construída com **Next.js**, **React** e **TypeScript**, utilizando uma arquitetura moderna focada em desempenho, experiência do usuário e manutenção. Também implementei sincronização offline com **PouchDB/CouchDB**, integração com serviços em nuvem, autenticação, controle de permissões, geração de relatórios, dashboards analíticos e otimização de consultas e estado da aplicação para garantir rapidez e confiabilidade no uso diário.

Além do desenvolvimento técnico, participei da definição da arquitetura do produto, modelagem de dados, criação da experiência do usuário e evolução contínua da plataforma em conjunto com equipes hospitalares, transformando necessidades operacionais em funcionalidades que aumentam a eficiência, reduzem falhas e melhoram a rastreabilidade dos processos cirúrgicos.`,
        url: '#',
        linguagem: 'Next.js · React · TypeScript',
        imagemUrl: '/images/projects/unicirurgia.png',
        repositorioConfidencial: true,
        linkDeploy: 'https://unicirurgia.com/',
        textoBotaoDeploy: 'Acessar Plataforma',
      },
      {
        nome: 'LabyWallet',
        descricao:
          'Uma carteira digital inteligente desenvolvida para o armazenamento e gestão centralizada de exames, prescrições e laudos médicos. Este foi um projeto que originalmente seria descontinuado, mas propus e assumi a frente da sua remodelagem completa. A plataforma agora conta com integração avançada de Inteligência Artificial para gerar insights personalizados de saúde para o usuário, tudo construído sob rigorosos padrões de segurança e conformidade total com a LGPD.',
        url: '#',
        linguagem: 'Next.js · React',
        imagemUrl: '/images/projects/labywallet.png',
        repositorioConfidencial: true,
        linkDeploy: 'https://www.labywallet.com/',
        textoBotaoDeploy: 'Acessar LabyWallet',
      },
    ],
    /** Detalhes personalizados por repositório (capa, descrição, links) */
    detalhesPorRepositorio: {
      AluraProject: {
        nome: 'Amigo Secreto',
        descricao: `Projeto desenvolvido como desafio da Alura para realizar sorteios de Amigo Secreto. A aplicação permite adicionar participantes a uma lista e sortear nomes de forma aleatória, aplicando conceitos práticos de manipulação do DOM. Construído com HTML5, CSS3 e JavaScript Vanilla.`,
        url: 'https://github.com/MaiconMachadoDev/challenge-amigo-secreto_pt',
        linguagem: 'JavaScript',
        imagemUrl: '/images/projects/amigosecreto.png',
        linkDeploy: 'https://maiconmachadodev.github.io/challenge-amigo-secreto_pt/',
        textoBotaoDeploy: 'Ver site',
      },
      AquaQuiz: {
        imagemUrl: '/images/projects/aquaquiz.png',
        descricao: `AquaQuiz 🐠
Um jogo interativo de adivinhação focado no nicho de aquarismo, criado como projeto de estudo para consolidar fundamentos de desenvolvimento web front-end. O jogador é desafiado a identificar corretamente diversos itens e equipamentos relacionados a aquários.

🚀 Tecnologias e Técnicas Aplicadas:

• JavaScript (ES6+): Lógica principal do jogo, validação de respostas e controle de pontuação.
• Manipulação do DOM: Atualização dinâmica da interface do usuário em tempo real sem recarregar a página.
• Event Listeners: Captura de interações do usuário (cliques e teclado) de forma otimizada.
• HTML5 & CSS3: Estruturação semântica e estilização responsiva para garantir jogabilidade em diferentes tamanhos de tela.
• Gerenciamento de Estado: Controle do fluxo do jogo (início, acertos, erros e fim de jogo) utilizando variáveis locais.`,
        linkDeploy: 'https://maiconmachadodev.github.io/AquaQuiz/',
        textoBotaoDeploy: 'Jogue agora',
      },
    } as Record<string, DetalhesRepositorio>,
  },

  sobre: {
    titulo: 'Sobre Mim',
    paragrafos: [
      'Sou desenvolvedor Full-stack e sócio da Inova Rise, empresa Health Tech focada em soluções de alta performance para hospitais e clínicas.',
      'Com 11 anos de experiência na área da saúde — incluindo vivência como profissional de enfermagem — trago uma visão única para construir software que funciona no chão de operação.',
      'Atuo na criação de plataformas como Unicirurgia (gestão cirúrgica) e Laby Wallet (carteira digital para clínicas), sempre priorizando interfaces fluidas, segurança e escalabilidade.',
    ],
  },

  rodape: {
    texto: 'Construído com Next.js · Hospedado no GitHub Pages',
  },
} as const;
