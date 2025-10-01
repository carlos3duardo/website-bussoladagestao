'use client';

import axios from 'axios';
import { Circle, CircleCheck } from 'lucide-react';
import { useCallback, useState } from 'react';

import { QuestaoComentarios } from './QuestaoComentarios';

type ComentarioProps = {
  id: string;
  comentario: string;
  tipo: {
    id: number;
    nome: string;
    codigo: string;
  };
  created_at: string;
};

type QuestaoProps = {
  id: string;
  nome: string;
  resposta_id: string | null;
  comentarios: ComentarioProps[];
};

type OpcaoProps = {
  id: string;
  nome: string;
  descricao: string;
  peso: number;
  cor: string;
};

interface ComponentProps {
  avaliacaoId: string;
  questao: QuestaoProps;
  opcoes: OpcaoProps[];
  respostaId?: string | null;
}

type RespostaProps = {
  avaliacaoId: string;
  questaoId: string;
  opcaoId: string;
};

export function Questao({
  avaliacaoId,
  questao,
  opcoes,
  respostaId: respId = null,
}: ComponentProps) {
  const [respostaId, setRespostaId] = useState<string | null>(respId);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleResponder = useCallback(
    async ({ avaliacaoId, questaoId, opcaoId }: RespostaProps) => {
      setIsSubmiting(false);

      await axios
        .post(
          `/api/trial/avcorp/canvas360/avaliacao/${avaliacaoId}/responder`,
          {
            avaliacao_id: avaliacaoId,
            questao_id: questaoId,
            maturidade_id: opcaoId,
          },
        )
        .then(() => {
          setRespostaId(opcaoId);
        })
        .finally(() => setIsSubmiting(false));
    },
    [],
  );
  return (
    <div
      data-slot="questao"
      className="grid hover:bg-slate-100 lg:grid-cols-12"
    >
      <div className="flex items-center justify-between pr-4 lg:col-span-7 lg:pr-0">
        <p className="flex-1 px-4 py-2 text-balance">{questao.nome}</p>
        <QuestaoComentarios avaliacaoId={avaliacaoId} questao={questao} />
      </div>
      <div
        data-slot="questao-opcoes"
        data-is-submiting={isSubmiting}
        className="grid grid-cols-4 gap-2 data-[is-submiting=true]:opacity-40 lg:col-span-5"
      >
        {opcoes.map((opcao) => (
          <div
            key={`${questao.id}-${opcao.id}`}
            data-slot="opcao"
            className="place-self-center px-4 text-center text-xs leading-tight font-medium"
          >
            <button
              data-active={respostaId === opcao.id}
              className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded px-6 py-2 data-[active=false]:opacity-40"
              onClick={() =>
                handleResponder({
                  avaliacaoId,
                  questaoId: questao.id,
                  opcaoId: opcao.id,
                })
              }
            >
              {respostaId === opcao.id ? (
                <CircleCheck fill="#111" strokeWidth={0} size={18} />
              ) : (
                <Circle size={18} fill="#cacaca" className="opacity-40" />
              )}
              <span className="lg:hidden">{opcao.nome}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
