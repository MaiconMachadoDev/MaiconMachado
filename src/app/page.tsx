import { FloatingTechIcons } from '@/components/FloatingTechIcons';
import { GlowBlobs } from '@/components/GlowBlobs';
import { HeroCodeCard } from '@/components/HeroCodeCard';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { SobreSection } from '@/components/SobreSection';
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
          <header className="mb-4">
            <h2
              id="titulo-projetos"
              className="mb-2 text-2xl font-bold tracking-tight text-gray-900"
            >
              {projetos.titulo}
            </h2>
            <p className="text-sm leading-relaxed text-gray-500">
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
