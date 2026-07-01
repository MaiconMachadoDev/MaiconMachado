import type { ConfiguracaoSite } from '@/types/config';

interface SiteHeaderProps {
  perfil: ConfiguracaoSite['perfil'];
  redesSociais: ConfiguracaoSite['redesSociais'];
}

export function SiteHeader({ perfil, redesSociais }: SiteHeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">
          {perfil.cargo}
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {perfil.nome}
        </h1>
        <p className="mb-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          {perfil.bio}
        </p>

        <nav aria-label="Redes sociais">
          <ul className="flex flex-wrap gap-4">
            {redesSociais.map((rede) => (
              <li key={rede.nome}>
                <a
                  href={rede.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-800 underline-offset-4 transition-colors hover:text-gray-600 hover:underline"
                  aria-label={rede.rotulo}
                >
                  {rede.nome}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
