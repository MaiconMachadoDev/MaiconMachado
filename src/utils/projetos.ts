import type { RepositorioGitHub } from '@/services/github';
import type { ProjetoEstendido } from '@/types/projeto';

export interface DetalhesRepositorio {
  nome?: string;
  descricao?: string;
  url?: string;
  linguagem?: string;
  estrelas?: number;
  imagemUrl?: string;
  repositorioConfidencial?: boolean;
  linkDeploy?: string;
  textoBotaoDeploy?: string;
}

/**
 * Enriquece repositórios do GitHub com dados customizados do config.
 */
export function enriquecerProjetos(
  repositorios: RepositorioGitHub[],
  detalhesPorRepositorio: Record<string, DetalhesRepositorio>
): ProjetoEstendido[] {
  return repositorios.map((repo) => {
    const detalhes = detalhesPorRepositorio[repo.nome];

    return {
      ...repo,
      nome: detalhes?.nome ?? repo.nome,
      descricao: detalhes?.descricao ?? repo.descricao,
      url: detalhes?.url ?? repo.url,
      linguagem: detalhes?.linguagem ?? repo.linguagem,
      estrelas: detalhes?.estrelas ?? repo.estrelas,
      imagemUrl: detalhes?.imagemUrl,
      repositorioConfidencial: detalhes?.repositorioConfidencial,
      linkDeploy: detalhes?.linkDeploy,
      textoBotaoDeploy: detalhes?.textoBotaoDeploy,
    };
  });
}

/**
 * Combina projetos manuais (sem GitHub) com repositórios enriquecidos da API.
 */
export function montarListaProjetos(
  repositorios: RepositorioGitHub[],
  detalhesPorRepositorio: Record<string, DetalhesRepositorio>,
  projetosManuais: readonly (DetalhesRepositorio & { nome: string })[]
): ProjetoEstendido[] {
  const doGithub = enriquecerProjetos(repositorios, detalhesPorRepositorio);

  const manuais: ProjetoEstendido[] = projetosManuais.map((projeto) => ({
    nome: projeto.nome,
    descricao: projeto.descricao ?? null,
    url: projeto.url ?? '#',
    estrelas: projeto.estrelas ?? 0,
    linguagem: projeto.linguagem ?? null,
    imagemUrl: projeto.imagemUrl,
    repositorioConfidencial: projeto.repositorioConfidencial,
    linkDeploy: projeto.linkDeploy,
    textoBotaoDeploy: projeto.textoBotaoDeploy,
  }));

  return [...manuais, ...doGithub];
}
