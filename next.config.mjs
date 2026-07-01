/** @type {import('next').NextConfig} */

/**
 * Detecta o basePath automaticamente no CI do GitHub Actions.
 * - Repositório de usuário (ex: usuario.github.io) → sem basePath
 * - Repositório de projeto (ex: usuario/portifolio) → basePath /portifolio
 * Sobrescreva com NEXT_PUBLIC_BASE_PATH se necessário.
 */
function obterBasePath() {
  const nomeRepositorio = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const ehSiteDeUsuario = nomeRepositorio?.endsWith('.github.io');

  if (nomeRepositorio && !ehSiteDeUsuario) {
    return `/${nomeRepositorio}`;
  }

  // Build de produção (local ou CI): basePath do repositório no GitHub Pages
  if (process.env.NODE_ENV === 'production') {
    return '/MaiconMachado';
  }

  // Dev local: sem basePath → http://localhost:3000/
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
  },
};

export default nextConfig;
