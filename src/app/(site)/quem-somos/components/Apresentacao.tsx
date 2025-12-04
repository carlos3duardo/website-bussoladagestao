import { Compass, Gem, Rocket } from 'lucide-react';

import { PageSection } from '@/components/ui';

export function Apresentacao() {
  const features = [
    {
      icon: Compass,
      title: 'Nosso propósito',
      description: 'Promover uma cultura vencedora.',
    },
    {
      icon: Rocket,
      title: 'Missão',
      description:
        'Aprimorar a gestão usando tecnologias e educação corporativa.',
    },
    {
      icon: Gem,
      title: 'Valores',
      description:
        'Confiança, Inovação, Adaptabilidade, Aprendizado e Sinergia.',
    },
  ] as const;
  return (
    <PageSection.Root>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <header className="flex flex-col items-center gap-4">
          <PageSection.Label>Sobre nós</PageSection.Label>
          <div className="flex flex-col items-center gap-4">
            <PageSection.Headline className="max-w-[960px] text-center text-balance">
              Disseminamos uma cultura de aprendizado e crescimento contínuo
            </PageSection.Headline>
          </div>
        </header>

        <div className="flex flex-col gap-6 py-12">
          <PageSection.Paragraph>
            A força de uma ideia se impõe quando ela precisa acontecer, na
            prática. Assim nasceu a Bússola da Gestão, no início de 2018, a
            partir da ideia de três sócios motivados pelo propósito de atuar na
            transformação da gestão das empresas brasileiras.
          </PageSection.Paragraph>
          <PageSection.Paragraph>
            Com clientes presentes em 11 estados brasileiros, a Bússola da
            Gestão alcançou um propósito: a satisfação de todos os clientes que
            usam as nossas plataformas. Sabe o que eles têm em comum? A sede de
            conhecimento para se solidificar no mercado.
          </PageSection.Paragraph>
          <PageSection.Paragraph>
            Unindo conceitos de tecnologia e gestão, com foco em inovação e
            resultados, nosso método acompanha nossas plataformas, desenvolvidas
            por um time próprio de desenvolvedores, que resultou na construção
            de um{' '}
            <strong>Sistema de Diagnóstico da Maturidade da Gestão</strong>,
            <strong>um sistema de Desenvolvimento Humano Organizacional</strong>
            , de uma <strong>Universidade Corporativa</strong>, e um sistema que
            mede a <strong>satisfação da qualidade do atendimento</strong>{' '}
            através de pesquisas aos clientes.
          </PageSection.Paragraph>
          <PageSection.Paragraph>
            Somos a bússola que orienta empresas rumo a uma gestão mais madura,
            estratégica e humana.
          </PageSection.Paragraph>
          <PageSection.Paragraph>
            Apoiamos empresas que desejam organizar a casa, alinhar o time e
            profissionalizar a gestão. Unimos diagnóstico, métodos práticos e
            acompanhamento próximo para transformar intenção em resultado
            concreto – da estratégia até a execução do dia a dia.
          </PageSection.Paragraph>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, i) => (
            <div
              className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              key={title}
            >
              <header className="flex flex-col items-center gap-2">
                <figure className="bg-primary-100 flex h-12 w-12 items-center justify-center rounded-full">
                  <Icon className="text-primary-500 h-6 w-6" />
                </figure>
                <h4 className="text-center text-lg font-semibold text-gray-900 lg:text-left">
                  {title}
                </h4>
              </header>
              <p className="text-center text-balance">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageSection.Root>
  );
}
