'use client';

import { useCallback, useEffect, useState } from 'react';

import type { ProjetoEstendido } from '@/types/projeto';
import { urlAsset } from '@/utils/assets';
import { renderizarTextoComNegrito } from '@/utils/texto';

interface ProjectCarouselProps {
  projetos: ProjetoEstendido[];
}

export function ProjectCarousel({ projetos }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const total = projetos.length;

  const updateCarousel = useCallback(
    (newIndex: number) => {
      if (isAnimating) return;
      setIsAnimating(true);

      setCurrentIndex((newIndex + total) % total);

      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    },
    [isAnimating, total]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') updateCarousel(currentIndex - 1);
      if (e.key === 'ArrowDown') updateCarousel(currentIndex + 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, updateCarousel]);

  if (!projetos || total === 0) return null;

  const projetoAtivo = projetos[currentIndex];

  const getCardPositionClass = (index: number) => {
    const offset = (index - currentIndex + total) % total;
    if (offset === 0) return 'card-center';
    if (offset === 1) return 'card-down-1';
    if (offset === 2) return 'card-down-2';
    if (offset === total - 1) return 'card-up-1';
    if (offset === total - 2) return 'card-up-2';
    return 'card-hidden';
  };

  return (
    <div
      className="relative flex min-h-[85vh] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-gray-50 py-10 md:flex-row md:gap-20"
      aria-label="Carrossel de projetos em 3D"
      aria-live="polite"
    >
      {/* SEÇÃO ESQUERDA/TOPO: CARROSSEL 3D */}
      <div className="flex min-h-[320px] w-full flex-none items-center justify-center md:h-[70vh] md:max-w-[500px] md:flex-1">
        <div className="relative flex h-full w-[280px] flex-col items-center justify-center perspective-[1000px] md:w-[450px]">
          <div className="preserve-3d relative flex h-full w-full flex-col items-center justify-center transition-transform duration-800">
            {projetos.map((projeto, i) => (
              <div
                key={`${projeto.nome}-${i}`}
                onClick={() => updateCarousel(i)}
                className={`absolute h-[160px] w-[280px] cursor-pointer overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-800 ease-carousel md:h-[225px] md:w-[400px] ${getCardPositionClass(i)}`}
                role="button"
                tabIndex={0}
                aria-label={`Selecionar projeto ${projeto.nome}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') updateCarousel(i);
                }}
              >
                {projeto.imagemUrl ? (
                  <img
                    src={urlAsset(projeto.imagemUrl)}
                    alt={`Capa do projeto ${projeto.nome}`}
                    className="h-full w-full object-cover transition-all duration-800 ease-carousel"
                    draggable={false}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
                    Sem imagem
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEÇÃO DIREITA/BAIXO: TEXTOS E BOTÕES */}
      <div className="flex h-[55vh] min-h-[420px] w-full flex-1 flex-col gap-4 px-6 py-2 text-center md:h-[70vh] md:gap-5 md:px-12 md:py-8 md:text-left">
        {/* Cabeçalho fixo — setas, título e stack */}
        <header className="flex w-full max-w-2xl shrink-0 flex-col gap-4 md:items-start">
          <div className="hidden shrink-0 gap-4 md:flex">
            <button
              type="button"
              onClick={() => updateCarousel(currentIndex - 1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-900 text-blue-900 transition-colors hover:bg-blue-900 hover:text-white"
              aria-label="Projeto anterior"
            >
              ↑
            </button>
            <button
              type="button"
              onClick={() => updateCarousel(currentIndex + 1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-900 text-blue-900 transition-colors hover:bg-blue-900 hover:text-white"
              aria-label="Próximo projeto"
            >
              ↓
            </button>
          </div>

          <h2 className="line-clamp-2 min-h-[4rem] text-3xl font-bold leading-tight text-blue-950 md:min-h-[5.5rem] md:text-5xl">
            {projetoAtivo.nome}
          </h2>

          <div className="flex min-h-[1.25rem] flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-500 md:justify-start">
            {projetoAtivo.linguagem && (
              <span>STACK: {projetoAtivo.linguagem}</span>
            )}
            <span>★ {projetoAtivo.estrelas || 0}</span>
          </div>
        </header>

        {/* Descrição — ocupa todo o espaço central restante */}
        <div className="custom-scrollbar flex min-h-0 w-full max-w-2xl flex-1 overflow-y-auto pr-2 text-left md:pr-4">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-600 md:text-base">
            {projetoAtivo.descricao
              ? renderizarTextoComNegrito(projetoAtivo.descricao)
              : 'Sem descrição disponível para este projeto no momento.'}
          </p>
        </div>

        {/* Rodapé fixo — botões e indicadores */}
        <footer className="mt-auto flex w-full max-w-2xl shrink-0 flex-col gap-6 md:gap-8">
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            {projetoAtivo.repositorioConfidencial ? (
              <span
                className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-gray-300 px-8 py-3 text-sm font-semibold text-gray-600 md:w-auto"
                aria-disabled="true"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path strokeLinecap="round" d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                Repositório Confidencial
              </span>
            ) : (
              <a
                href={projetoAtivo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 md:w-auto"
              >
                Acessar Repositório →
              </a>
            )}

            {projetoAtivo.linkDeploy && projetoAtivo.textoBotaoDeploy && (
              <a
                href={projetoAtivo.linkDeploy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-blue-600 bg-white px-8 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50 md:w-auto"
              >
                {projetoAtivo.textoBotaoDeploy} →
              </a>
            )}
          </div>

          <div
            className="flex items-center justify-center gap-3 md:justify-start"
            role="tablist"
            aria-label="Indicadores de projetos"
          >
            {projetos.map((projeto, i) => (
              <button
                key={projeto.nome}
                type="button"
                role="tab"
                aria-selected={currentIndex === i}
                onClick={() => updateCarousel(i)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  currentIndex === i
                    ? 'scale-125 bg-blue-900'
                    : 'bg-blue-300 hover:bg-blue-500'
                }`}
                aria-label={`Ir para projeto ${i + 1}`}
              />
            ))}
          </div>
        </footer>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }

        .ease-carousel { transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .preserve-3d { transform-style: preserve-3d; }
        .perspective-\\[1000px\\] { perspective: 1000px; }

        .card-center { z-index: 10; transform: scale(1.1) translateZ(0); }
        .card-center img { filter: none; }

        /* Ajustes MOBILE: Translações menores no eixo Y para não vazar */
        .card-up-1 { z-index: 5; transform: translateY(-70px) scale(0.9) translateZ(-100px); opacity: 0.9; }
        .card-down-1 { z-index: 5; transform: translateY(70px) scale(0.9) translateZ(-100px); opacity: 0.9; }
        .card-up-2 { z-index: 1; transform: translateY(-130px) scale(0.8) translateZ(-300px); opacity: 0.6; }
        .card-down-2 { z-index: 1; transform: translateY(130px) scale(0.8) translateZ(-300px); opacity: 0.6; }

        .card-up-1 img, .card-down-1 img, .card-up-2 img, .card-down-2 img {
          filter: grayscale(80%) brightness(70%);
        }

        .card-hidden { opacity: 0; pointer-events: none; transform: scale(0.5) translateZ(-500px); }

        /* Ajustes DESKTOP: Translações completas */
        @media (min-width: 768px) {
          .card-up-1 { transform: translateY(-150px) scale(0.9) translateZ(-100px); }
          .card-down-1 { transform: translateY(150px) scale(0.9) translateZ(-100px); }
          .card-up-2 { transform: translateY(-300px) scale(0.8) translateZ(-300px); }
          .card-down-2 { transform: translateY(300px) scale(0.8) translateZ(-300px); }
        }
      `}</style>
    </div>
  );
}
