import Image from 'next/image';

import { HomeSection } from '@/components/ui';

import imageBackground from './assets/images/bg-contato.jpg';
import { ContatoFormulario } from './ContatoFormulario';

export function Contato() {
  return (
    <HomeSection.Root className="bg-darken text-white">
      <Image
        src={imageBackground}
        alt=""
        width={1920}
        height={1080}
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60" />
      <div className="relative container mx-auto grid grid-cols-1 gap-16 lg:grid-cols-2">
        <header className="flex flex-col items-center gap-4 lg:items-start">
          <HomeSection.Label>Fale conosco</HomeSection.Label>
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <HomeSection.Headline>Entre em contato</HomeSection.Headline>
            <HomeSection.Description className="w-full max-w-[600px] text-center lg:text-left">
              Preencha o formulário e descubra como podemos ajudar sua empresa a
              evoluir.
            </HomeSection.Description>
          </div>
        </header>

        <div>
          <div className="bg-darken/90 rounded-lg p-12">
            <ContatoFormulario />
          </div>
        </div>
      </div>
    </HomeSection.Root>
  );
}
