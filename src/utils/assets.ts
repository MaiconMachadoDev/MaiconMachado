/**
 * Monta URL de asset estático (raiz do domínio em produção).
 */
export function urlAsset(caminho: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const normalizado = caminho.startsWith('/') ? caminho : `/${caminho}`;
  return `${basePath}${normalizado}`;
}
