import Image from 'next/image';

export function Header() {
  return (
    <header>
      <div className="bg-darken flex h-[90px] items-center">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          <figure className="">
            <Image
              src="/images/logotipo-darkmode.png"
              width={1750}
              height={647}
              alt="Bussola da Gestão"
              className="h-[60px] w-[162px]"
            />
          </figure>
          <div className="lg:flex lg:items-center lg:gap-4">Canvas 360°</div>
        </div>
      </div>
    </header>
  );
}
