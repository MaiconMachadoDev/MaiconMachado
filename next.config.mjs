/** @type {import('next').NextConfig} */

/**
 * Detecta o basePath automaticamente no CI do GitHub Actions.
 * - Repositório de usuário (ex: usuario.github.io) → sem basePath
 * - Repositório de projeto (ex: usuario/portifolio) → basePath /portifolio
 * Sobrescreva com NEXT_PUBLIC_BASE_PATH se necessário.
 */
function obterBasePath() {
  if (process.env.NEXT_PUBLIC_BASE_PATH !== undefined) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }

  const nomeRepositorio = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const ehSiteDeUsuario = nomeRepositorio?.endsWith('.github.io');

  if (nomeRepositorio && !ehSiteDeUsuario) {
    return `/${nomeRepositorio}`;
  }

  return '';
}

const basePath = obterBasePath();

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(basePath
    ? { basePath, assetPrefix: basePath }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
