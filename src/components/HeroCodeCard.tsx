import type { LinhaCodigo } from '@/config/portfolio';

interface HeroCodeCardProps {
  tituloArquivo: string;
  linhas: readonly LinhaCodigo[];
  subtitulo: string;
  scroll: {
    texto: string;
    href: string;
  };
}

function LinhaDestaque({ linha }: { linha: LinhaCodigo }) {
  const corBase =
    linha.destaque === 'tag'
      ? 'text-code-tag'
      : linha.destaque === 'emoji'
        ? 'text-code-string'
        : 'text-code-text';

  return (
    <div className="flex gap-3 sm:gap-4">
      <span
        className="w-6 shrink-0 select-none text-right text-xs text-gray-500 sm:w-8 sm:text-sm"
        aria-hidden="true"
      >
        {linha.numero}
      </span>
      <code className={`text-xs leading-relaxed sm:text-sm ${corBase}`}>
        {linha.conteudo}
      </code>
    </div>
  );
}

export function HeroCodeCard({
  tituloArquivo,
  linhas,
  subtitulo,
  scroll,
}: HeroCodeCardProps) {
  return (
    <section
      id="home"
      aria-labelledby="hero-code-card"
      className="flex min-h-[calc(100vh-2rem)] flex-col items-center justify-center px-4 py-16 sm:px-8"
    >
      <div className="relative z-10 w-full max-w-xl">
        {/* Card estilo editor */}
        <article
          className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-xl shadow-gray-200/50"
          aria-labelledby="hero-code-card"
        >
          {/* Barra do editor */}
          <header className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/80 px-4 py-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
            </div>
            <p
              id="hero-code-card"
              className="ml-2 font-mono text-xs text-gray-600"
            >
              {tituloArquivo}
            </p>
          </header>

          {/* Conteúdo do código */}
          <div className="space-y-2 px-4 py-6 font-mono sm:px-6 sm:py-8">
            {linhas.map((linha) => (
              <LinhaDestaque key={linha.numero} linha={linha} />
            ))}
          </div>
        </article>

        {/* Subtítulo */}
        <p className="mt-6 text-center text-sm leading-relaxed text-gray-700 sm:text-base">
          {subtitulo}
        </p>

        {/* Scroll CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href={scroll.href}
            className="group flex flex-col items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-accent"
            aria-label={`${scroll.texto} — rolar para a próxima seção`}
          >
            <span>{scroll.texto}</span>
            <svg
              className="h-5 w-5 animate-bounce-slow text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
