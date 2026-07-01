import { ProjectCard } from '@/components/ProjectCard';
import config from '@/data/config.json';
import { buscarRepositorios } from '@/services/github';
import type { ConfiguracaoSite } from '@/types/config';

const configuracao = config as ConfiguracaoSite;

export default async function PaginaInicial() {
  const repositorios = await buscarRepositorios(configuracao.github.usuario);

  return (
    <section aria-labelledby="titulo-projetos">
      <header className="mb-8">
        <h2
          id="titulo-projetos"
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900"
        >
          {configuracao.site.tituloProjetos}
        </h2>
        <p className="text-sm leading-relaxed text-gray-600">
          {configuracao.site.subtituloProjetos}
        </p>
      </header>

      {repositorios.length === 0 ? (
        <p className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center text-sm text-gray-500">
          Nenhum repositório encontrado no momento. Verifique o usuário do
          GitHub em{' '}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">
            src/data/config.json
          </code>
          .
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {repositorios.map((repositorio) => (
            <li key={repositorio.nome}>
              <ProjectCard repositorio={repositorio} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
