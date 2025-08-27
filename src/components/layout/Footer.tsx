import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-darken text-sm text-white/60">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 lg:flex-row lg:items-end">
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

      {/* <div className="container mx-auto flex flex-col items-center gap-1">
        <p className="font-white/40 text-xs font-medium">Uma empresa do</p>
        <Image
          src="/images/jogroup.svg"
          alt=""
          width={6315}
          height={1341}
          className="h-[20px]"
        />
      </div>
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
      </div> */}
    </footer>
  );
}
