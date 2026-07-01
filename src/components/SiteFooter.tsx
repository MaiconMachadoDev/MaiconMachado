interface SiteFooterProps {
  texto: string;
  nome: string;
}

export function SiteFooter({ texto, nome }: SiteFooterProps) {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-8 text-center text-sm text-gray-500 sm:px-6">
        <p>
          © {ano} {nome}. {texto}
        </p>
      </div>
    </footer>
  );
}
