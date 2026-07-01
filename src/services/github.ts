export interface RepositorioGitHub {
  nome: string;
  descricao: string | null;
  url: string;
  estrelas: number;
  linguagem: string | null;
}

interface GitHubApiRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

/**
 * Busca repositórios públicos de um usuário na API do GitHub.
 * Retorna array vazio em caso de falha (rate limit, rede, etc.).
 */
export async function buscarRepositorios(
  usuario: string,
  repositoriosOcultos: readonly string[] = []
): Promise<RepositorioGitHub[]> {
  try {
    const resposta = await fetch(
      `https://api.github.com/users/${usuario}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
        },
        next: { revalidate: false },
      }
    );

    if (!resposta.ok) {
      console.warn(
        `[github] Falha ao buscar repositórios (${resposta.status}): ${resposta.statusText}`
      );
      return [];
    }

    const dados: GitHubApiRepo[] = await resposta.json();

    const ocultos = new Set(
      repositoriosOcultos.map((nome) => nome.toLowerCase())
    );

    return dados
      .filter(
        (repo) =>
          !repo.fork && !ocultos.has(repo.name.toLowerCase())
      )
      .map((repo) => ({
        nome: repo.name,
        descricao: repo.description,
        url: repo.html_url,
        estrelas: repo.stargazers_count,
        linguagem: repo.language,
      }));
  } catch (erro) {
    console.warn('[github] Erro ao consumir a API:', erro);
    return [];
  }
}
