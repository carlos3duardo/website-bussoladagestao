import Image from 'next/image';
import Link from 'next/link';

const navigationMenu = [
  {
    title: 'Sobre nós',
    menu: [
      {
        title: 'Quem somos',
        href: '/quem-somos',
      },
      {
        title: 'Produtos',
        href: '/produtos',
      },
      {
        title: 'Clientes',
        href: '/clientes',
      },
      {
        title: 'Contato',
        href: '/contato',
      },
    ],
  },
  {
    title: 'Nossos Serviços',
    menu: [
      {
        title: 'RH Advanced',
        href: '/servicos/rh-advanced',
      },
      {
        title: 'Universidade Corporativa',
        href: '/servicos/universidade-corporativa',
      },
      {
        title: 'Diagnóstico Corporativo',
        href: '/servicos/diagnostico-corporativo',
      },
    ],
  },
  {
    title: 'Teste Grátis',
    menu: [
      {
        title: 'Diagnóstico Canvas 360',
        href: '/servicos/autodiagnostico/canvas-360',
      },
      {
        title: 'Teste DISC Corporativo',
        href: '/servicos/autodiagnostico/teste-perfil',
      },
    ],
  },
] as const;

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

const menuQuemSomos = [,] as const;

const menuServicos = [
  {
    title: 'RH Advanced',
    href: '/servicos/rh-advanced',
  },
  {
    title: 'Universidade Corporativa',
    href: '/servicos/universidade-corporativa',
  },
  {
    title: 'Diagnóstico Corporativo',
    href: '/servicos/diagnostico-corporativo',
  },
];

const menuTesteGratis = [
  {
    title: 'Diagnóstico Canvas 360',
    href: '/servicos/autodiagnostico/canvas-360',
  },
  {
    title: 'Teste DISC Corporativo',
    href: '/servicos/autodiagnostico/teste-perfil',
  },
] as const;

export function Footer() {
  return (
    <>
      <footer className="bg-dark text-sm text-white/60">
        <div className="container mx-auto py-16">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div data-slot="company" className="md:max-w-[360px]">
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
                  Temos o objetivo de fortalecer a sua gestão e impulsionar o
                  crescimento de seu negócio para alcançar seus objetivos.
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
            </div>

            <div data-slot="menu">
              <ul className="grid gap-8 lg:grid-cols-3">
                {navigationMenu.map((nav) => (
                  <li key={nav.title} className="">
                    <h4 className="text-base font-bold">{nav.title}</h4>
                    <ul>
                      {nav.menu.map((item) => (
                        <li key={item.title}>
                          <Link href={item.href}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
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
      </footer>
    </>
  );
}
