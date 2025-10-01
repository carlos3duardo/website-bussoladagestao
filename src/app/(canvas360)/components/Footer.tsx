import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      <div className="bg-darken text-xs">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 py-6 lg:flex-row lg:items-end">
          <div className="left font-medium text-white/60">
            <p className="text-center lg:text-left">
              {new Date().getFullYear()} &copy; Bússola da Gestão. Todos os
              direitos reservados.
            </p>
            <p className="flex items-center justify-center gap-2 lg:justify-start">
              <Link
                className="text-primary-400 hover:text-primary-600"
                href="/termos-de-uso"
              >
                Termos de uso
              </Link>
              <span>|</span>
              <Link
                className="text-primary-400 hover:text-primary-600"
                href="/aviso-de-privacidade"
              >
                Aviso de privacidade
              </Link>
              <span>|</span>
              <Link
                className="text-primary-400 hover:text-primary-600"
                href="/politica-de-cookies"
              >
                Política de cookies
              </Link>
            </p>
          </div>
          <div className="right">
            <Image
              src="/images/jogroup.svg"
              alt="Logotipo JoGroup"
              title="Uma empresa do grupo JoGroup"
              width={6315}
              height={1341}
              className="h-[20px] w-[94px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
