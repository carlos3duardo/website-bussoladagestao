import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-darken py-4 text-sm text-white/60">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="copyright">
          {new Date().getFullYear()} &copy; Todos os direitos reservados.
        </div>
        <div className="links">
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary-400/90">
              Termos de uso
            </Link>
            <Link href="#" className="hover:text-primary-400/90">
              Política de privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
