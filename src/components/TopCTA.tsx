import { urlAsset } from '@/utils/assets';

interface TopCTAProps {
  texto: string;
  href: string;
  rotulo: string;
}

export function TopCTA({ texto, href, rotulo }: TopCTAProps) {
  const hrefComBase = urlAsset(href);

  return (
    <a
      href={hrefComBase}
      download={href.endsWith('.pdf') ? true : undefined}
      className="absolute right-4 top-4 z-20 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/40 sm:right-8 sm:top-8 sm:px-6 sm:py-3"
      aria-label={rotulo}
    >
      {texto}
    </a>
  );
}
