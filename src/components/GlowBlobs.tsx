export function GlowBlobs() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    >
      <div className="animate-blob absolute -left-16 top-0 h-80 w-80 rounded-full bg-blue-300 opacity-40 mix-blend-multiply blur-3xl filter sm:h-96 sm:w-96" />
      <div className="animate-blob absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-purple-300 opacity-40 mix-blend-multiply blur-3xl filter [animation-delay:2s] sm:h-96 sm:w-96" />
      <div className="animate-blob absolute -bottom-16 left-1/4 h-80 w-80 rounded-full bg-cyan-300 opacity-40 mix-blend-multiply blur-3xl filter [animation-delay:4s] sm:h-[28rem] sm:w-[28rem]" />
      <div className="animate-blob absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-300 opacity-30 mix-blend-multiply blur-3xl filter [animation-delay:6s] sm:h-80 sm:w-80" />
    </div>
  );
}
