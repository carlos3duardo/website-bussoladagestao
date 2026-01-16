import Image from 'next/image';

import { PageSection } from '@/components/ui';

export function CaseEnergisa() {
  return (
    <PageSection.Root>
      <div className="mx-auto max-w-[960px] px-4 md:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-[200px_1fr]">
          <div className="flex justify-center">
            <Image
              src="/images/case-energisa-logotipo.png"
              alt="Logotipo Energisa"
              width={300}
              height={105}
              className="h-[64px] w-auto"
            />
          </div>
          <div className="flex flex-col items-center justify-center md:items-start">
            <label className="text-xs leading-none font-semibold text-slate-400 uppercase">
              Case de sucesso
            </label>
            <h2 className="text-2xl leading-none font-bold text-slate-600">
              Energisa
            </h2>
          </div>
          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1 lg:col-start-2">
            <PageSection.Paragraph className="text-base">
              O <strong>Grupo Energisa</strong> vem buscando, ao longo da sua
              história, melhorias na sua gestão. Sabendo da importância que é o
              desenvolvimento dos fornecedores, criou um programa em que todos
              que participam evoluem de forma sustentável, melhorando assim todo
              ecossistema. No projeto piloto, foi aplicado o Modelo de
              Excelência da Gestão (na régua de 250 pontos), com os fornecedores
              das unidades Energisa Paraíba e Borborema.
            </PageSection.Paragraph>

            <PageSection.Paragraph className="text-base">
              Depois dessa iniciativa bem sucedida, o programa se tornou
              permanente no Estado da Paraíba e, agora, vem sendo difundido para
              todas as unidades de negócio da holding, tendo sido nomeado como
              <strong>Programa Sinergisa</strong>. Para o Sinergisa, que
              atualmente contempla fornecedores de mais de 10 estados do país,
              desenvolvemos um Modelo de Referência específico para as
              necessidades do Grupo Energisa, com uma avaliação baseada em 7
              temas e 35 práticas gerenciais.
            </PageSection.Paragraph>

            <PageSection.Paragraph className="text-base">
              Para cada fornecedor que participa do Sinergisa, são identificadas
              Oportunidades Para Melhoria nos processos avaliados, e a Energisa
              acompanha de perto, auxiliando onde os fornecedores precisarem. E
              no final de cada ciclo, os fornecedores que mais se destacarem são
              reconhecidos e premiados, servindo de exemplo e inspiração para
              todos os demais.
            </PageSection.Paragraph>
          </div>
        </div>
      </div>
    </PageSection.Root>
  );
}
