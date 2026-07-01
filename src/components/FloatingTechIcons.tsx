import type { TecnologiaFlutuante, TecnologiaId } from '@/config/portfolio';

interface FloatingTechIconsProps {
  tecnologias: readonly TecnologiaFlutuante[];
}

function IconeTecnologia({ id }: { id: TecnologiaId }) {
  const base = 'h-8 w-8 sm:h-10 sm:w-10';

  switch (id) {
    case 'react':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="#61DAFB" aria-hidden="true">
          <circle cx="12" cy="12" r="2.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'nextjs':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="#000" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15V9l6 4-6 4z" />
        </svg>
      );
    case 'javascript':
      return (
        <svg className={base} viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <path d="M15.5 17.5c.5.8 1.5 1.5 2.5 1.5 1 0 1.5-.5 1.5-1.2 0-.8-.6-1.1-1.6-1.6l-.5-.3c-1.6-.8-2.7-1.8-2.7-3.9 0-1.9 1.5-3.4 3.8-3.4 1.1 0 2 .4 2.6 1.5l-1.4 1.4c-.3-.5-.7-.7-1.2-.7-.5 0-.8.3-.8.7 0 .5.3.7 1 1l.5.3c1.9 1 3 1.8 3 3.9 0 2.3-1.8 3.6-4.2 3.6-2.4 0-3.8-1-4.5-2.3l1.7-1.3zM8.5 17.3V8.7h2v8.6h-2z" fill="#000" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="#06B6D4" aria-hidden="true">
          <path d="M12 6c-2.5 0-4 1.25-4.5 3.75 1-1.25 2.17-1.72 3.5-1.41.76.19 1.3.74 1.9 1.35.98 1 2.12 2.16 4.6 2.16 2.5 0 4-1.25 4.5-3.75-1 1.25-2.17 1.72-3.5 1.41-.76-.19-1.3-.74-1.9-1.35C15.62 7.16 14.48 6 12 6zM6.5 12c-2.5 0-4 1.25-4.5 3.75 1-1.25 2.17-1.72 3.5-1.41.76.19 1.3.74 1.9 1.35.98 1 2.12 2.16 4.6 2.16 2.5 0 4-1.25 4.5-3.75-1 1.25-2.17 1.72-3.5 1.41-.76-.19-1.3-.74-1.9-1.35C10.12 13.16 8.98 12 6.5 12z" />
        </svg>
      );
    case 'git':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="#F05032" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.16-1.11-1.47-1.11-1.47-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.53 2.36 1.09 2.94.83.09-.66.35-1.09.63-1.34-2.22-.26-4.56-1.11-4.56-4.94 0-1.09.38-1.98 1.01-2.68-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.72 1.02A9.3 9.3 0 0 1 12 6.8c.85.004 1.7.12 2.5.34 1.89-1.29 2.72-1.02 2.72-1.02.54 1.4.2 2.44.1 2.7.63.7 1 1.59 1 2.68 0 3.84-2.34 4.68-4.57 4.93.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
        </svg>
      );
  }
}

export function FloatingTechIcons({ tecnologias }: FloatingTechIconsProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {tecnologias.map((tech) => (
        <div
          key={tech.id}
          className="absolute flex flex-col items-center gap-1 opacity-40 transition-opacity sm:opacity-50"
          style={{
            ...tech.posicao,
            animationDelay: tech.atrasoAnimacao,
          }}
        >
          <div className="animate-float rounded-2xl border border-gray-200/80 bg-white/80 p-3 shadow-sm backdrop-blur-sm">
            <IconeTecnologia id={tech.id} />
          </div>
          <span className="hidden text-[10px] font-medium text-gray-400 sm:block">
            {tech.nome}
          </span>
        </div>
      ))}
    </div>
  );
}
