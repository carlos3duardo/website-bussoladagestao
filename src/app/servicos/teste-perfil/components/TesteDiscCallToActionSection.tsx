'use client';

import { CircleCheckBig, TriangleAlert } from 'lucide-react';
import { useCallback, useState } from 'react';
import Swal from 'sweetalert2';

import { PageSection } from '@/components/ui';
import { isEmail } from '@/lib/helpers';

export function TesteDiscCallToActionSection() {
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = useCallback(() => {
    if (!email) return;

    if (!isEmail(email)) {
      setIsInvalidEmail(true);
      return;
    }

    setIsInvalidEmail(false);

    Swal.fire({
      icon: 'success',
      title: 'Pronto',
      html: `Enviamos para o endereço de e-mail informado um link
        para a realização do teste, com mais intruções a seguir.`,
      confirmButtonText: 'Fechar',
      confirmButtonColor: '#fe5314',
    });
  }, [email]);

  return (
    <PageSection.Root className="text-darken bg-primary-100">
      <div className="relative mx-auto max-w-7xl px-4 2xl:px-6">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <div data-slot="headline" className="flex flex-col gap-1 lg:w-1/2">
            <PageSection.Headline className="text-center text-balance lg:text-left">
              <span className="text-primary-500">Faça agora</span> o teste DISC
              de sua equipe
            </PageSection.Headline>
            <PageSection.Description className="text-center text-balance lg:text-left">
              Descubra seu estilo comportamental e entenda como potencializar
              suas habilidades naturais no trabalho e na vida pessoal.
            </PageSection.Description>
          </div>
          <div data-slot="formulario" className="w-3/4 md:w-1/2 xl:w-[480px]">
            <div className="flex flex-col gap-2">
              <div data-slot="input">
                <div className="border-primary-500 flex items-center justify-between overflow-hidden rounded-lg border bg-white">
                  <input
                    type="text"
                    className="h-11 w-full flex-1 px-3 text-sm font-medium focus:outline-0"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <button
                    type="button"
                    className="bg-primary-500 hover:bg-primary-700 h-11 px-6 text-white outline-0 hover:cursor-pointer"
                    onClick={handleSubscribe}
                  >
                    Enviar
                  </button>
                </div>
              </div>
              {isInvalidEmail ? (
                <p className="flex items-center gap-2 text-sm font-medium text-red-400">
                  <TriangleAlert
                    size={16}
                    strokeWidth={2}
                    className="text-red-500"
                  />
                  Enderço de e-mail inválido
                </p>
              ) : (
                <ul
                  data-slot="vantagens"
                  className="flex items-center justify-center gap-3 pl-2 lg:justify-start"
                >
                  <li className="flex items-center gap-2 text-sm font-medium">
                    <CircleCheckBig
                      size={16}
                      strokeWidth={3}
                      className="text-primary-500"
                    />
                    É grátis
                  </li>
                  <li className="flex items-center gap-2 text-sm font-medium">
                    <CircleCheckBig
                      size={16}
                      strokeWidth={3}
                      className="text-primary-500"
                    />
                    É simples
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageSection.Root>
  );
}
