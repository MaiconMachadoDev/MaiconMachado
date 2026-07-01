/**
 * Monta URL de asset estático respeitando o basePath do GitHub Pages.
 */
export function urlAsset(caminho: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const normalizado = caminho.startsWith('/') ? caminho : `/${caminho}`;
  return `${basePath}${normalizado}`;
}
