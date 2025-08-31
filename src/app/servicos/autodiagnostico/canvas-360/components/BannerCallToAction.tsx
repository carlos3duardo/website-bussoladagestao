import { CtaButton, PageSection } from '@/components/ui';

export function BannerCallToAction() {
  return (
    <PageSection.Root className="bg-[url(/images/bg-typing-keyboard.jpg)] bg-cover bg-center text-white">
      <div className="bg-primary-900/40 absolute top-0 left-0 h-full w-full backdrop-blur-sm" />
      <div className="relative mx-auto max-w-7xl px-4 2xl:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div>
            <PageSection.Headline className="text-center lg:text-left">
              Pronto para medir e acelerar seu crescimento?
            </PageSection.Headline>
            <PageSection.Description className="text-center lg:text-left">
              Responda agora e receba seu score por dimensão com um plano
              inicial de ação.
            </PageSection.Description>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:justify-center lg:items-center">
            <CtaButton linkUrl="" label="Fazer avaliação" />
            <CtaButton
              variant="secondary"
              linkUrl=""
              label="Exemplo de relatório"
            />
          </div>
        </div>
      </div>
    </PageSection.Root>
  );
}
