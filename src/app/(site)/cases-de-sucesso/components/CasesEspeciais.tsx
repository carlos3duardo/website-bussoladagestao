import Image from 'next/image';
import Link from 'next/link';

import { PageSection } from '@/components/ui';

const cases = [
  {
    id: 'energisa',
    name: 'Energisa',
    link: 'https://www.energisa.com.br',
    image: '/images/case-energisa-logotipo.png',
  },
  {
    id: 'epasa',
    name: 'Epasa',
    link: 'https://www.epasa.com.br',
    image: '/images/case-epasa-logotipo.png',
  },
];

export function CasesEspeciais() {
  return (
    <PageSection.Root className="bg-white">
      <header className="flex flex-col items-center gap-4">
        <PageSection.Label>Grandes resultados</PageSection.Label>
        <div className="flex flex-col items-center gap-4">
          <PageSection.Headline className="text-center">
            Cases especiais
          </PageSection.Headline>
          <PageSection.Description className="w-full max-w-[600px] text-center">
            Separamos dois cases especiais que evidenciam o resultado do nosso
            trabalho junto aos nossos clientes e parceiros.
          </PageSection.Description>
        </div>
      </header>

      <div className="mx-auto mt-8 w-full max-w-[960px] px-4 md:px-6 xl:px-8">
        <ul className="grid w-full md:grid-cols-2">
          {cases.map((cliente) => (
            <li key={cliente.id}>
              <figure className="flex items-center justify-center p-8">
                <Link
                  href={`/cases-de-sucesso/${cliente.id}`}
                  className="hover:bg-primary-50 rounded-md p-6"
                >
                  <Image
                    src={cliente.image}
                    alt={`Logotipo ${cliente.name}`}
                    width={300}
                    height={105}
                    className="h-[64px] w-auto"
                  />
                </Link>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </PageSection.Root>
  );
}
