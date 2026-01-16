import Image from 'next/image';

import { InstagramPost, PageSection } from '@/components/ui';

export function CaseEpasa() {
  return (
    <PageSection.Root>
      <div className="mx-auto max-w-[960px] px-4 md:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-[200px_1fr]">
          <div className="flex justify-center">
            <Image
              src="/images/case-epasa-logotipo.png"
              alt="Logotipo Epasa"
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
              EPASA - Centrais Elétricas da Paraíba
            </h2>
          </div>
          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1 lg:col-start-2">
            <PageSection.Paragraph className="text-base">
              A <strong>EPASA - Centrais Elétricas da Paraíba</strong> é uma
              empresa produtora independente de energia que sempre se preocupou
              na capacitação de seus colaboradores. Mas, como quase todo início
              de processo, a passagem de conhecimento acontece de forma
              informal, com o gestor realizando o treinamento de forma
              descentralizada, julgando ele próprio o que é melhor para a
              empresa e colaborador. Às vezes, sem estar conectado ao
              planejamento da organização.
            </PageSection.Paragraph>

            <PageSection.Paragraph className="text-base">
              Com a <strong>Universidade Corporativa</strong> da Bússola da
              Gestão, conseguimos transformar a cultura de aprendizado e
              crescimento contínuo da EPASA para um método padronizado,
              centralizando todo o treinamento dos colaboradores na plataforma.
            </PageSection.Paragraph>

            <PageSection.Paragraph className="text-base">
              Os gestores se tornaram multiplicadores de conhecimento.
              Aprenderam a produzir seus próprios materiais de treinamento, como
              vídeos, aposlitas e provas de assimilação de conhecimento. Seus
              liderados se tornaram também seus alunos, todo esse material
              passou a se tornar patrimônio intelectual da organização.
            </PageSection.Paragraph>

            <PageSection.Paragraph className="bg-primary-200 rounded-lg p-6 text-xl">
              Até o momento, mais de <strong>3 mill certificados</strong> foram
              produzidos para os mais de 190 treinamentos, realizados por mais
              de 180 colaboradores.
            </PageSection.Paragraph>

            <PageSection.Paragraph className="text-base">
              Além da capacitação, a EPASA também investe no desenvolvimento de
              seus colaboradores, ajudando-os a se destacarem no mercado de
              trabalho. Ela criou uma cultura de avaliação e reconhecimento para
              os colaboradores e seus líderes, aplicando avaliações de
              desempenho e feedacks.
            </PageSection.Paragraph>

            <PageSection.Paragraph className="text-base">
              O resultado destas avaliações geraram um rico conhecimento, que
              auxiliaram na criação de planos de desenvimentos (PDI) para os
              colaboradores que precisaram se adequar a expectativa da empresa.
            </PageSection.Paragraph>

            <PageSection.Paragraph className="bg-primary-200 rounded-lg p-6 text-xl">
              Em 6 ciclos de avaliação de desempenho, a EPASA realizou mais de{' '}
              <strong>700 avaliações</strong> com os seus colaboradores, e mais
              de 1300 feedbacks.
            </PageSection.Paragraph>

            <PageSection.Paragraph className="text-base">
              Todo esse empenho criou um cenário de transparência e confiança
              entre os líderes e seus colaboradores, melhorando o clima
              organizacional. Dessa forma, a EPASA foi reconhecida como uma das
              Melhores Empresas para Trabalhar, tanto na paraiba quanto no
              Brasil.
            </PageSection.Paragraph>

            <div className="grid gap-4 lg:grid-cols-2">
              <InstagramPost
                userName="Bússola da Gestão"
                userAccount="bussoladagestao"
                avatarUrl="/images/instagram-avatar.png"
                postImageUrl="/images/instagram-media-case-epasa-01.jpg"
                postUrl="https://www.instagram.com/reel/DN3W1FKYsHb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              />
              <InstagramPost
                userName="Bússola da Gestão"
                userAccount="bussoladagestao"
                avatarUrl="/images/instagram-avatar.png"
                postImageUrl="/images/instagram-media-case-epasa-02.jpg"
                postUrl="https://www.instagram.com/reel/DN1PtNFQqCp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              />
            </div>
          </div>
        </div>
      </div>
    </PageSection.Root>
  );
}
