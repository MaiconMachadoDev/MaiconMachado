'use client';

import { useState } from 'react';
import Image from 'next/image';

import { urlAsset } from '@/utils/assets';
import { renderizarTextoComNegrito } from '@/utils/texto';

interface EtapaTrajetoria {
  id: string;
  ano: string;
  titulo: string;
  resumo: string;
  detalhes: string;
  conquistas: readonly string[];
  stack: readonly string[];
  imagem: string;
  imagemAlt: string;
}

const ETAPAS: readonly EtapaTrajetoria[] = [
  {
    id: 'estagio',
    ano: '2025',
    titulo: 'Estágio e Desenvolvimento',
    resumo: 'Primeiros passos no mundo real...',
    detalhes:
      'Os primeiros contatos com desenvolvimento profissional consolidaram a ponte entre **teoria e prática**. Aprendi a ler código legado, participar de code reviews e entregar features com **qualidade e prazo** — habilidades que só o mercado ensina de verdade.\n\nFoi nessa fase que refinei fundamentos de **JavaScript, React e boas práticas de Git**, sempre com a mentalidade de quem já conhece o impacto que um sistema instável pode causar em um ambiente crítico como o hospital.',
    conquistas: [
      'Primeiras entregas em projetos reais com equipe ágil',
      'Evolução de fundamentos web para stack moderna',
      'Adaptação rápida entre contextos clínico e técnico',
    ],
    stack: ['JavaScript', 'React', 'Git', 'HTML/CSS'],
    imagem: 'estagio.jpeg',
    imagemAlt: 'Maicon trabalhando em estação de desenvolvimento durante estágio',
  },
  {
    id: 'inova-rise',
    ano: '2025',
    titulo: 'Inova Rise: HealthTech & Inovação',
    resumo: 'Liderando soluções robustas...',
    detalhes:
      'Na **Inova Rise**, atuo no desenvolvimento de produtos que unem **inteligência artificial e saúde**. Entre os principais projetos:\n\n**Unicirurgia** — mapas cirúrgicos visuais em tempo real, facilitando a coordenação de equipes no centro cirúrgico.\n\n**LabyWallet** — plataforma com foco em **segurança e IA** para gestão laboratorial.\n\nTambém implementei arquiteturas **Offline-First com PouchDB**, garantindo que profissionais continuem operando mesmo com conectividade instável — requisito essencial em ambientes hospitalares.',
    conquistas: [
      'Unicirurgia: mapas cirúrgicos visuais em tempo real',
      'LabyWallet: segurança e IA aplicada ao laboratório',
      'Arquitetura Offline-First com PouchDB em produção',
    ],
    stack: ['React', 'Next.js', 'PouchDB', 'IA', 'HealthTech'],
    imagem: 'inova rise.jpg',
    imagemAlt: 'Interface do produto Inova Rise com foco em saúde e inteligência artificial',
  },
  {
    id: 'atual',
    ano: '2026',
    titulo: 'Cenário Atual',
    resumo: 'Full Stack focado em saúde...',
    detalhes:
      'Hoje atuo como **Desenvolvedor Full Stack** com foco em soluções para a área da saúde — unindo experiência clínica, visão de produto e engenharia de software.\n\nMinha stack atual inclui **React, Next.js, Node.js, Python e AWS**, sempre buscando entregar sistemas **performáticos, acessíveis e confiáveis**. O objetivo final permanece o mesmo desde a enfermagem: **impactar positivamente a vida das pessoas**, agora através de código que resolve problemas reais.',
    conquistas: [
      'Full Stack com especialização em HealthTech',
      'Deploy e infraestrutura em AWS',
      'Produtos que conectam clínica, dados e experiência do usuário',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'Python', 'AWS'],
    imagem: 'hoje em dia.jpeg',
    imagemAlt: 'Maicon em setup de desenvolvimento full stack',
  },
] as const;

export function TrajetoriaSection() {
  const [etapaAtiva, setEtapaAtiva] = useState(0);
  const etapa = ETAPAS[etapaAtiva];

  return (
    <section
      id="trajetoria"
      aria-labelledby="titulo-trajetoria"
      className="border-t border-gray-100 bg-white px-4 py-16 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <h2
            id="titulo-trajetoria"
            className="text-3xl font-bold tracking-tight text-blue-950"
          >
            Minha Trajetória
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
            Da enfermagem ao desenvolvimento — uma linha do tempo da minha
            transição de carreira em tecnologia para a saúde.
          </p>
        </header>

        {/* Desktop: 1/3 abas + 2/3 painel | Mobile: abas no topo, painel abaixo */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Coluna esquerda — abas verticais */}
          <div
            className="flex gap-3 overflow-x-auto pb-2 lg:col-span-1 lg:flex-col lg:overflow-visible lg:pb-0"
            role="tablist"
            aria-label="Etapas da trajetória profissional"
          >
            {ETAPAS.map((item, indice) => {
              const ativo = indice === etapaAtiva;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={ativo}
                  aria-controls={`painel-${item.id}`}
                  id={`tab-${item.id}`}
                  onClick={() => setEtapaAtiva(indice)}
                  className={`min-w-[220px] shrink-0 rounded-xl border p-4 text-left transition-all duration-300 lg:min-w-0 lg:w-full ${
                    ativo
                      ? 'border-blue-600 bg-white shadow-sm'
                      : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <span
                    className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      ativo
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    {item.ano}
                  </span>
                  <h3 className="text-sm font-bold text-blue-950 lg:text-base">
                    {item.titulo}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                    {item.resumo}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Coluna direita — painel de detalhes */}
          <article
            className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 md:h-[600px] lg:col-span-2 lg:p-8"
            role="tabpanel"
            id={`painel-${etapa.id}`}
            aria-labelledby={`tab-${etapa.id}`}
          >
            <div className="flex h-full min-h-0 flex-1 flex-col gap-6 md:flex-row md:items-stretch md:gap-8">
              {/* Imagem — altura fixa no desktop, proporção consistente no mobile */}
              <figure className="w-full shrink-0 md:h-full md:w-2/5">
                <div className="relative aspect-[3/4] h-full w-full overflow-hidden rounded-xl md:aspect-auto">
                  <Image
                    src={urlAsset(etapa.imagem)}
                    alt={etapa.imagemAlt}
                    fill
                    className="h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority={etapaAtiva === 0}
                  />
                </div>
              </figure>

              {/* Conteúdo — scroll interno sem alterar o card pai */}
              <div className="flex h-full min-h-0 flex-1 flex-col overflow-y-auto pb-4 pr-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300">
                <h3 className="mb-4 text-2xl font-bold text-blue-950">
                  {etapa.titulo}
                </h3>

                <div className="whitespace-pre-wrap text-base leading-relaxed text-gray-600">
                  {renderizarTextoComNegrito(etapa.detalhes)}
                </div>

                {etapa.conquistas.length > 0 && (
                  <div>
                    <h4 className="mb-3 mt-6 text-xs font-bold uppercase tracking-widest text-gray-500">
                      Conquistas
                    </h4>
                    <ul className="space-y-2">
                      {etapa.conquistas.map((conquista) => (
                        <li
                          key={conquista}
                          className="flex items-start gap-2 text-sm leading-relaxed text-gray-600"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                            aria-hidden="true"
                          />
                          {conquista}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {etapa.stack.length > 0 && (
                  <div>
                    <h4 className="mb-3 mt-6 text-xs font-bold uppercase tracking-widest text-gray-500">
                      Stack &amp; Foco
                    </h4>
                    <div className="flex flex-wrap">
                      {etapa.stack.map((item) => (
                        <span
                          key={item}
                          className="mr-4 text-sm font-semibold text-blue-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
