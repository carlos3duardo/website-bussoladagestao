'use client';

import { CtaButton, PageSection } from '@/components/ui';

export function AutodiagnosticoCanvas360Section() {
  return (
    <PageSection.Root className="bg-dark bg-[url(/images/bg-mulher-usando-laptop-com-copo-de-cafe.jpg)] bg-cover bg-center text-white">
      <div className="bg-darken/50 absolute top-0 left-0 h-full w-full" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <header className="flex flex-col items-center gap-4">
          <PageSection.Label>Teste Grátis</PageSection.Label>
          <div className="flex flex-col items-center gap-8">
            <PageSection.Headline className="max-w-[720px] text-center text-balance">
              Faça um autodiagnóstico gratuito e descubra o potencial de
              crescimento de sua empresa
            </PageSection.Headline>
            <PageSection.Description className="w-full max-w-[960px] text-center text-balance">
              Com base no Business Model Canvas (BMC), identifique forças e
              pontos de melhoria no seu negócio. Ao final, receba um relatório
              inteligente com insights práticos para elevar sua performance.
            </PageSection.Description>
            <div className="flex gap-4">
              <CtaButton
                label="Avaliar minha empresa"
                linkUrl="/servicos/autodiagnostico/canvas-360#formulario"
                variant="primary"
              />
              <CtaButton
                label="Visualizar modelo de exemplo"
                linkUrl="/modelo.avaliacao.canvas.360.pdf"
                variant="secondary"
                target="_blank"
              />
            </div>
          </div>
        </header>
      </div>
    </PageSection.Root>
  );
}
