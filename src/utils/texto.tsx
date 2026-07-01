import { Fragment } from 'react';

/**
 * Converte trechos **negrito** em elementos <strong>.
 */
export function renderizarTextoComNegrito(texto: string) {
  const partes = texto.split(/(\*\*[^*]+\*\*)/g);

  return partes.map((parte, indice) => {
    if (parte.startsWith('**') && parte.endsWith('**')) {
      return <strong key={indice}>{parte.slice(2, -2)}</strong>;
    }
    return <Fragment key={indice}>{parte}</Fragment>;
  });
}
