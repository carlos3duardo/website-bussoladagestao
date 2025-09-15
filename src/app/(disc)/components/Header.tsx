import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header>
      <div className="bg-darken flex h-[90px] items-center">
        <div className="container mx-auto flex items-center justify-between px-6">
          <figure className="">
            <Image
              src="/images/logotipo-darkmode.png"
              width={1750}
              height={647}
              alt="Bussola da Gestão"
              className="h-[60px] w-[162px]"
            />
          </figure>
          <div className="hidden opacity-0 lg:flex lg:items-center lg:gap-4">
            <Link
              href="/"
              className="ring-primary-500/40 bg-primary-500/20 hover:bg-primary-500 hover:ring-primary-500 rounded px-4 py-3 text-sm font-bold text-white uppercase ring"
            >
              Agende uma demonstração
            </Link>

            <Link
              href="https://idp.bussoladagestao.com.br"
              target="_blank"
              className="ring-primary-500/40 bg-primary-500/20 hover:bg-primary-500 hover:ring-primary-500 rounded px-4 py-3 text-sm font-bold text-white uppercase ring"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
