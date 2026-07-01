export interface RedeSocial {
  nome: string;
  url: string;
  rotulo: string;
}

export interface ConfiguracaoSite {
  perfil: {
    nome: string;
    bio: string;
    cargo: string;
  };
  redesSociais: RedeSocial[];
  github: {
    usuario: string;
  };
  seo: {
    titulo: string;
    descricao: string;
    url: string;
    locale: string;
  };
  site: {
    tituloProjetos: string;
    subtituloProjetos: string;
    rodape: string;
  };
}
