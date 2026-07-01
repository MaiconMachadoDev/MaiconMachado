import { FloatingTechIcons } from '@/components/FloatingTechIcons';
import { GlowBlobs } from '@/components/GlowBlobs';
import { HeroCodeCard } from '@/components/HeroCodeCard';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { SobreSection } from '@/components/SobreSection';
import { TrajetoriaSection } from '@/components/TrajetoriaSection';
import { TopCTA } from '@/components/TopCTA';
import { portfolioConfig } from '@/config/portfolio';
import { buscarRepositorios } from '@/services/github';
import { montarListaProjetos } from '@/utils/projetos';

const { hero, cta, tecnologias, projetos, sobre, github, rodape, perfil } =
  portfolioConfig;

export default async function PaginaInicial() {
  const repositorios = await buscarRepositorios(
    github.usuario,
    projetos.repositoriosOcultos
  );

  const projetosEnriquecidos = montarListaProjetos(
    repositorios,
    projetos.detalhesPorRepositorio,
    projetos.projetosManuais
  );

  return (
    <>
      {/* Área Hero com glow blobs e elementos flutuantes */}
      <div className="relative overflow-hidden bg-surface">
        <GlowBlobs />

        <div className="relative z-10">
          <FloatingTechIcons tecnologias={tecnologias} />
          <TopCTA texto={cta.texto} href={cta.href} rotulo={cta.rotulo} />
          <HeroCodeCard
            tituloArquivo={hero.tituloArquivo}
            linhas={hero.linhas}
            subtitulo={hero.subtitulo}
            scroll={hero.scroll}
          />
        </div>
      </div>

      {/* Projetos */}
      <section
        id="projetos"
        aria-labelledby="titulo-projetos"
        className="border-t border-gray-100 bg-white px-4 py-16 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <header className="mb-10">
            <div className="mb-3 flex items-center gap-3">
              <svg
                className="h-8 w-8 shrink-0 text-gray-900 md:h-9 md:w-9"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.16-1.11-1.47-1.11-1.47-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.53 2.36 1.09 2.94.83.09-.66.35-1.09.63-1.34-2.22-.26-4.56-1.11-4.56-4.94 0-1.09.38-1.98 1.01-2.68-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.72 1.02A9.3 9.3 0 0 1 12 6.8c.85.004 1.7.12 2.5.34 1.89-1.29 2.72-1.02 2.72-1.02.54 1.4.2 2.44.1 2.7.63.7 1 1.59 1 2.68 0 3.84-2.34 4.68-4.57 4.93.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
              </svg>
              <h2
                id="titulo-projetos"
                className="text-3xl font-bold tracking-tight text-blue-950 md:text-4xl"
              >
                {projetos.titulo}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              {projetos.subtitulo}
            </p>
          </header>

          {projetosEnriquecidos.length === 0 ? (
            <p className="rounded-xl border border-dashed border-gray-200 p-8 text-center text-sm text-gray-400">
              Nenhum repositório encontrado no momento.
            </p>
          ) : (
            <ProjectCarousel projetos={projetosEnriquecidos} />
          )}
        </div>
      </section>

      <TrajetoriaSection />

      <SobreSection
        titulo={sobre.titulo}
        paragrafos={sobre.paragrafos}
        foto={perfil.foto}
        fotoAlt={perfil.fotoAlt}
      />

      {/* Rodapé */}
      <footer className="border-t border-gray-100 px-4 py-8 text-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} {portfolioConfig.perfil.nome}. {rodape.texto}</p>
      </footer>
    </>
  );
}
