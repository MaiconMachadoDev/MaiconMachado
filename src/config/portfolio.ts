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
    foto: '/avatar.svg',
    fotoAlt: 'Foto de perfil de Maicon Machado',
  },

  seo: {
    titulo: 'Portfólio | Maicon Machado',
    descricao:
      'Desenvolvedor Full-stack com 11 anos de experiência na área da saúde, transformando vivência clínica em soluções Health Tech de alta performance.',
    url: 'https://maiconmachadodev.github.io/MaiconMachado',
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
      url: 'https://linkedin.com/in/seu-perfil',
      rotulo: 'Perfil no LinkedIn',
      icone: 'linkedin',
    },
    {
      nome: 'E-mail',
      url: 'mailto:seu@email.com',
      rotulo: 'Enviar e-mail',
      icone: 'email',
    },
  ] satisfies RedeSocial[],

  cta: {
    texto: 'Baixar CV',
    href: '/cv.pdf',
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
    titulo: 'Projetos',
    subtitulo:
      'Repositórios públicos buscados automaticamente via API do GitHub no momento do build.',
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
