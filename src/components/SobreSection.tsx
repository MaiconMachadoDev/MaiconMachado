import Image from 'next/image';

interface SobreSectionProps {
  titulo: string;
  paragrafos: readonly string[];
  foto: string;
  fotoAlt: string;
}

export function SobreSection({
  titulo,
  paragrafos,
  foto,
  fotoAlt,
}: SobreSectionProps) {
  return (
    <section
      id="sobre"
      aria-labelledby="titulo-sobre"
      className="border-t border-gray-100 px-4 py-16 sm:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="titulo-sobre"
          className="mb-8 text-2xl font-bold tracking-tight text-gray-900"
        >
          {titulo}
        </h2>

        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <figure className="shrink-0">
            <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-gray-200 shadow-md">
              <Image
                src={foto}
                alt={fotoAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, 288px"
                priority={false}
              />
            </div>
          </figure>

          <div className="w-full flex-1 space-y-4 text-center md:text-left">
            {paragrafos.map((paragrafo, indice) => (
              <p key={indice} className="leading-relaxed text-gray-600">
                {paragrafo}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
