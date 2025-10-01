import { Card } from '@/components/ui';
import { ApiTesteDiscInscricao } from '@/types';

import { Formulario } from './Formulario';

interface IntroProps {
  inscricao: ApiTesteDiscInscricao;
}

export function Intro({ inscricao }: IntroProps) {
  const hora = new Date().getHours();

  return (
    <Card.Root>
      <Card.Body className="p-8 2xl:p-12">
        <div className="flex flex-col gap-6 lg:flex-row 2xl:gap-8">
          <div className="flex flex-1 flex-col gap-3">
            <h1 className="text-xl font-semibold">
              Olá!{' '}
              {hora < 12 ? 'Bom dia' : hora < 18 ? 'Boa tarde' : 'Boa noite'}.
            </h1>
            <span></span>
            <p className="text-balance">
              Você foi convidado para participar do teste DISC pela empresa
              <strong className="uppercase"> {inscricao.empresa.nome}</strong>.
            </p>
            <p className="text-balance">
              No final deste teste, você e sua empresa receberão um relatório
              detalhado do seu perfil comportamental.
            </p>
            <p className="text-balance">
              Se você concorda em prosseguir, preencha seus dados no formulário{' '}
              <span className="lg:hidden">abaixo</span>
              <span className="hidden lg:inline">ao lado</span> para começar.
            </p>
          </div>
          <div className="h-px bg-slate-300 lg:h-auto lg:w-px"></div>
          <div className="flex-1">
            <Formulario inscricaoId={inscricao.id} />
          </div>
        </div>
      </Card.Body>
    </Card.Root>
  );
}
