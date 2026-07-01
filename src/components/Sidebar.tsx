'use client';

import Image from 'next/image';
import { useState } from 'react';

import type { IconeNavegacao, IconeSocial, ItemNavegacao, RedeSocial } from '@/config/portfolio';
import { urlAsset } from '@/utils/assets';

interface SidebarProps {
  perfil: {
    nome: string;
    cargo: string;
    foto: string;
    fotoAlt: string;
  };
  navegacao: readonly ItemNavegacao[];
  redesSociais: readonly RedeSocial[];
}

function IconeNav({ tipo }: { tipo: IconeNavegacao }) {
  const cls = 'h-4 w-4 text-gray-400';

  switch (tipo) {
    case 'home':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" d="M3 12l9-9 9 9M5 10v10h14V10" />
        </svg>
      );
    case 'projetos':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      );
    case 'trajetoria':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="12" r="2" />
          <circle cx="6" cy="18" r="2" />
          <path strokeLinecap="round" d="M8 6h8M8 18h8M7.5 7.5l9 3M7.5 16.5l9-3" />
        </svg>
      );
    case 'sobre':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
      );
  }
}

function IconeSocial({ tipo }: { tipo: IconeSocial }) {
  const cls = 'h-5 w-5 text-gray-500 transition-colors hover:text-accent';

  switch (tipo) {
    case 'github':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.16-1.11-1.47-1.11-1.47-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.53 2.36 1.09 2.94.83.09-.66.35-1.09.63-1.34-2.22-.26-4.56-1.11-4.56-4.94 0-1.09.38-1.98 1.01-2.68-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.72 1.02A9.3 9.3 0 0 1 12 6.8c.85.004 1.7.12 2.5.34 1.89-1.29 2.72-1.02 2.72-1.02.54 1.4.2 2.44.1 2.7.63.7 1 1.59 1 2.68 0 3.84-2.34 4.68-4.57 4.93.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.42v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
        </svg>
      );
    case 'email':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path strokeLinecap="round" d="M3 7l9 6 9-6" />
        </svg>
      );
  }
}

function ConteudoSidebar({
  perfil,
  navegacao,
  redesSociais,
  onLinkClick,
}: SidebarProps & { onLinkClick?: () => void }) {
  return (
    <>
      <div className="flex flex-col items-center px-6 pt-10 text-center">
        <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-gray-100 shadow-sm">
          <Image
            src={urlAsset(perfil.foto)}
            alt={perfil.fotoAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-lg font-bold text-gray-900">{perfil.nome}</h1>
        <p className="mt-1 text-xs font-medium text-gray-400">{perfil.cargo}</p>
      </div>

      <nav className="mt-10 flex-1 px-4" aria-label="Navegação principal">
        <ul className="space-y-1" role="list">
          {navegacao.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={onLinkClick}
                className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
              >
                <IconeNav tipo={item.icone} />
                {item.rotulo}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-gray-100 px-6 py-6">
        <ul className="flex justify-center gap-5" role="list" aria-label="Redes sociais">
          {redesSociais.map((rede) => (
            <li key={rede.nome}>
              <a
                href={rede.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={rede.rotulo}
              >
                <IconeSocial tipo={rede.icone} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function Sidebar({ perfil, navegacao, redesSociais }: SidebarProps) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      {/* Sidebar desktop */}
      <aside
        className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-gray-100 bg-white lg:flex"
        aria-label="Barra lateral"
      >
        <ConteudoSidebar
          perfil={perfil}
          navegacao={navegacao}
          redesSociais={redesSociais}
        />
      </aside>

      {/* Header mobile */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3 lg:hidden">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-gray-100">
            <Image
              src={urlAsset(perfil.foto)}
              alt={perfil.fotoAlt}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-semibold text-gray-900">{perfil.nome}</span>
        </div>
        <button
          type="button"
          onClick={() => setMenuAberto((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600"
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {menuAberto ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Menu mobile */}
      {menuAberto && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuAberto(false)}
          aria-hidden="true"
        />
      )}
      <aside
        id="menu-mobile"
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-gray-100 bg-white transition-transform duration-300 lg:hidden ${
          menuAberto ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Menu de navegação mobile"
        aria-hidden={!menuAberto}
      >
        <ConteudoSidebar
          perfil={perfil}
          navegacao={navegacao}
          redesSociais={redesSociais}
          onLinkClick={() => setMenuAberto(false)}
        />
      </aside>
    </>
  );
}
