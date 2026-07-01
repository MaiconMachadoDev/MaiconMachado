/** @type {import('next').NextConfig} */

/** Domínio de produção (GitHub Pages com CNAME). */
const DOMINIO_PRODUCAO = 'maicondev.com';

/**
 * Com domínio próprio na raiz (maicondev.com), não há basePath.
 * Em dev local, também fica vazio → http://localhost:3000/
 */
function obterBasePath() {
  return '';
}

const basePath = obterBasePath();

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: `https://${DOMINIO_PRODUCAO}`,
  },
};

export default nextConfig;
