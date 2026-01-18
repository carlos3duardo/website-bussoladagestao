import Image from 'next/image';

import { PageSection } from '@/components/ui';

export function CaseEnergisa() {
  return (
    <PageSection.Root>
      <header className="flex flex-col items-center justify-center gap-8">
        <Image
          src="/images/case-energisa-logotipo.png"
          alt="Logotipo Energisa"
          width={300}
          height={105}
          className="h-[64px] w-auto"
        />
        <div className="flex flex-col items-center justify-center">
          <label className="text-xs leading-none font-semibold text-slate-400 uppercase">
            Case de sucesso
          </label>
          <h2 className="text-2xl leading-none font-bold text-slate-600">
            Energisa
          </h2>
        </div>
      </header>

      <div className="mx-auto mt-12 flex w-full max-w-[920px] flex-col gap-6 px-4 lg:px-5 xl:px-6">
        <PageSection.Paragraph className="text-base">
          O <strong>Grupo Energisa</strong> vem buscando, ao longo da sua
          história, melhorias na sua gestão. Sabendo da importância que é o
          desenvolvimento dos fornecedores, criou um programa em que todos que
          participam evoluem de forma sustentável, melhorando assim todo
          ecossistema. No projeto piloto, foi aplicado o Modelo de Excelência da
          Gestão (na régua de 250 pontos), com os fornecedores das unidades
          Energisa Paraíba e Borborema.
        </PageSection.Paragraph>

        <PageSection.Paragraph className="text-base">
          Depois dessa iniciativa bem sucedida, o programa se tornou permanente
          no Estado da Paraíba e, agora, vem sendo difundido para todas as
          unidades de negócio da holding, tendo sido nomeado como
          <strong>Programa Sinergisa</strong>. Para o Sinergisa, que atualmente
          contempla fornecedores de mais de 10 estados do país, desenvolvemos um
          Modelo de Referência específico para as necessidades do Grupo
          Energisa, com uma avaliação baseada em 7 temas e 35 práticas
          gerenciais.
        </PageSection.Paragraph>

        <figure className="rounded-lg bg-slate-400/10 p-8">
          <Image
            src="/images/case-energisa-grafico-evolucao.svg"
            alt="Modelo Energisa"
            width={1375}
            height={554}
            className="h-auto w-full"
          />
        </figure>

        <PageSection.Paragraph className="text-base">
          Com o auxílio das mentorias da Bússola da Gestão e do acompanhamento
          da Energisa para com os seus fornecedores, houve uma evolução no
          desempenho das empresas, resultando em entrega de melhor qualidade,
          processos eficientes e economia de recursos.
        </PageSection.Paragraph>

        <PageSection.Paragraph className="text-base">
          Para cada fornecedor que participa do Sinergisa, são identificadas
          Oportunidades Para Melhoria nos processos avaliados, e a Energisa
          acompanha de perto, auxiliando onde os fornecedores precisarem. E no
          final de cada ciclo, os fornecedores que mais se destacarem são
          reconhecidos e premiados, servindo de exemplo e inspiração para todos
          os demais.
        </PageSection.Paragraph>

        <PageSection.Paragraph className="text-base">
          O Programa Sinergisa continua seu trabalho, capacitando e
          especialidando os fornecedores da Energisa, e a Bússola da Gestão tem
          orgulho de ter contribuido para a sua evolução.
        </PageSection.Paragraph>
      </div>
    </PageSection.Root>
  );
}
