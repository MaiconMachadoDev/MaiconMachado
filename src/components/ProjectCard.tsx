import type { RepositorioGitHub } from '@/services/github';

interface ProjectCardProps {
  repositorio: RepositorioGitHub;
}

export function ProjectCard({ repositorio }: ProjectCardProps) {
  const { nome, descricao, url, estrelas, linguagem } = repositorio;

  return (
    <article className="group flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
      <header className="mb-3">
        <h3 className="text-lg font-semibold text-gray-900">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors group-hover:text-gray-600"
          >
            {nome}
          </a>
        </h3>
      </header>

      <p className="mb-4 flex-grow text-sm leading-relaxed text-gray-600">
        {descricao ?? 'Sem descrição disponível.'}
      </p>

      <footer className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
        {linguagem && (
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full bg-gray-400"
              aria-hidden="true"
            />
            {linguagem}
          </span>
        )}
        <span aria-label={`${estrelas} estrelas`}>
          ★ {estrelas}
        </span>
      </footer>
    </article>
  );
}
