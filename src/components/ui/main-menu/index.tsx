import { ChevronRight, Menu, X } from 'lucide-react';

import { useSiteContext } from '@/providers/SiteProvider';

import icone from './icone.svg';
import Image from 'next/image';
import Link from 'next/link';

const menu = [
  {
    title: 'Quem somos',
    href: '/quem-somos',
    target: '_self',
    layout: 'default',
  },
  {
    title: 'Produtos',
    href: '/produtos',
    target: '_self',
    layout: 'default',
  },
  {
    title: 'Clientes',
    href: '/clientes',
    target: '_self',
    layout: 'default',
  },
  {
    title: 'Contato',
    href: '/contato',
    target: '_self',
    layout: 'default',
  },
  {
    title: 'Agende uma demonstração',
    href: '/contato?assunto=demonstracao',
    target: '_self',
    layout: 'cta',
  },
  {
    title: 'Login',
    href: 'https://idp.bussoladagestao.com.br',
    target: '_blank',
    layout: 'cta',
  },
];

export function MobileMenu() {
  const { menuIsOpen: isOpen, setMenuIsOpen: setIsOpen } = useSiteContext();
  return (
    <>
      <button
        className="hover:bg-primary-500 flex h-9 w-9 items-center justify-center rounded-md text-white transition duration-200 hover:cursor-pointer lg:hidden"
        aria-label="Abrir Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      <div
        data-is-open={isOpen}
        className="pointer-events-none fixed top-0 left-0 z-40 h-full w-full bg-black/50 opacity-0 transition-opacity duration-300 data-[is-open=true]:pointer-events-auto data-[is-open=true]:opacity-100"
        onClick={() => setIsOpen(false)}
      />
      <aside
        data-is-open={isOpen}
        className="bg-darken fixed top-0 right-0 z-50 h-full w-[60%] translate-x-full transform text-white opacity-0 shadow-lg transition-all duration-300 ease-in-out data-[is-open=true]:translate-x-0 data-[is-open=true]:opacity-100 md:w-[40%] lg:w-[24rem]"
      >
        <header className="flex items-center justify-between p-4 lg:p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="hover:cursor-pointer"
          >
            <X size={24} />
          </button>
          <figure className="flex h-[24px] w-[24px] items-center justify-center">
            <Image src={icone} alt="Franca Venda" width={18} height={18} />
          </figure>
        </header>
        <div className="my-2 h-[1px] w-full bg-white/20" />
        <ul className="flex flex-col gap-2 p-4">
          {menu.map((item) => (
            <li key={item.title} className="">
              {item.layout === 'default' ? (
                <Link
                  href={item.href}
                  target={item.target}
                  className="hover:bg-primary-500/20 hover:ring-primary-500 flex items-center gap-1 rounded bg-white/0 px-2 py-2 text-center text-sm font-bold text-white uppercase ring ring-white/0"
                >
                  <ChevronRight size={18} />
                  <span>{item.title}</span>
                </Link>
              ) : (
                <Link
                  href={item.href}
                  target={item.target}
                  className="ring-primary-500/40 bg-primary-500/20 hover:bg-primary-500 hover:ring-primary-500 block rounded px-4 py-3 text-center text-sm font-bold text-white uppercase ring"
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
