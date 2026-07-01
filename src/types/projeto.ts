import type { RepositorioGitHub } from '@/services/github';

export interface ProjetoEstendido extends RepositorioGitHub {
  imagemUrl?: string;
  repositorioConfidencial?: boolean;
  linkDeploy?: string;
  textoBotaoDeploy?: string;
}
