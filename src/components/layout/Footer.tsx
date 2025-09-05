import Image from 'next/image';
import Link from 'next/link';

const socialnetworks = [
  {
    title: 'Istagram',
    href: 'https://www.instagram.com/bussoladagestao',
    iconUrl: '/images/brands/instagram.svg',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/company/bussola-da-gestao',
    iconUrl: '/images/brands/linkedin.svg',
  },
  {
    title: 'Youtube',
    href: 'https://www.youtube.com/@bussolacast',
    iconUrl: '/images/brands/youtube.svg',
  },
];

export function Footer() {
  return (
    <footer className="bg-darken text-sm text-white/60">
      <div className="dark bg-dark py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 lg:grid-cols-4 2xl:gap-6">
            <div className="flex flex-col gap-4">
              <figure>
                <Image
                  src="/images/logotipo-darkmode.png"
                  width={1750}
                  height={647}
                  alt="Bussola da Gestão"
                  className="h-[60px] w-[162px]"
                />
              </figure>
              <p className="text-base">
                We make this belief a reality by putting clients first, leading
                with exceptional ideas, doing the right thing, and giving back.
              </p>
              <ul className="flex gap-2">
                {socialnetworks.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="group hover:bg-primary-500 flex h-9 w-9 items-center justify-center rounded bg-black/20"
                      target="_blank"
                    >
                      <Image
                        src={item.iconUrl}
                        alt={item.title}
                        width={18}
                        height={18}
                        className="brightness-0 invert transition-all duration-200"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5">
              <h4 className="text-xl font-bold">Sobre nós</h4>
              <ul>
                <li>
                  <Link href="#">Quem somos</Link>
                </li>
                <li>
                  <Link href="#">Serviços</Link>
                </li>
                <li>
                  <Link href="#">Relacionamento com o cliente</Link>
                </li>
                <li>
                  <Link href="#">Cases</Link>
                </li>
                <li>
                  <Link href="#">Contato</Link>
                </li>
              </ul>
            </div>
            <div className="">c</div>
            <div className="">d</div>
          </div>
        </div>
      </div>

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
