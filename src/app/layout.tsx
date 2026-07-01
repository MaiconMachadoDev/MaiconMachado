import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { Sidebar } from '@/components/Sidebar';
import { portfolioConfig } from '@/config/portfolio';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const { seo, perfil, navegacao, redesSociais, cta } = portfolioConfig;

export const metadata: Metadata = {
  title: {
    default: seo.titulo,
    template: `%s | ${perfil.nome}`,
  },
  description: seo.descricao,
  metadataBase: new URL(seo.url),
  openGraph: {
    title: seo.titulo,
    description: seo.descricao,
    url: seo.url,
    locale: seo.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.titulo,
    description: seo.descricao,
  },
  alternates: {
    canonical: seo.url,
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-surface font-sans text-gray-800`}
      >
        <Sidebar
          perfil={perfil}
          navegacao={navegacao}
          redesSociais={redesSociais}
          cta={cta}
        />

        <div className="relative min-h-screen lg:pl-64">
          <main className="pt-14 lg:pt-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
