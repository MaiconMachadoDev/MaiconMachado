import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import config from '@/data/config.json';
import type { ConfiguracaoSite } from '@/types/config';

import './globals.css';

const configuracao = config as ConfiguracaoSite;

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: configuracao.seo.titulo,
    template: `%s | ${configuracao.perfil.nome}`,
  },
  description: configuracao.seo.descricao,
  metadataBase: new URL(configuracao.seo.url),
  openGraph: {
    title: configuracao.seo.titulo,
    description: configuracao.seo.descricao,
    url: configuracao.seo.url,
    locale: configuracao.seo.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: configuracao.seo.titulo,
    description: configuracao.seo.descricao,
  },
  alternates: {
    canonical: configuracao.seo.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-sans`}
      >
        <SiteHeader
          perfil={configuracao.perfil}
          redesSociais={configuracao.redesSociais}
        />
        <main className="mx-auto min-h-[60vh] max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          {children}
        </main>
        <SiteFooter
          texto={configuracao.site.rodape}
          nome={configuracao.perfil.nome}
        />
      </body>
    </html>
  );
}
