'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { arrayShuffle } from '@/lib/helpers';
import { ApiTesteDiscUsuarioQuestionario } from '@/types';

interface QuestionarioProps {
  inscricaoId: string;
  usuarioId: string;
  questionario: ApiTesteDiscUsuarioQuestionario;
}

type RespostaProps = {
  id: number;
  valor: string;
  descricao: string | null;
  peso: number;
};

type OpcaoProps = {
  id: number;
  valor: string;
  descricao: string | null;
  perfil: {
    id: number;
    nome: string;
  };
  selecionado: boolean;
};

type QuestaoProps = {
  id: number;
  descricao: string;
  opcoes: OpcaoProps[];
  resposta: RespostaProps | RespostaProps[] | null;
};

export function Questionario({
  inscricaoId,
  usuarioId,
  questionario,
}: QuestionarioProps) {
  const router = useRouter();

  const [questoesPendentes, setQuestoesPendentes] = useState<QuestaoProps[]>(
    [],
  );
  const [questoesRespondidas, setQuestoesRespondidas] = useState<
    QuestaoProps[]
  >([]);
  const [questaoAtual, setQuestaoAtual] = useState<QuestaoProps | undefined>(
    undefined,
  );

  const [progresso, setProgresso] = useState(0);

  const handleResponder = useCallback(
    async ({ questaoId, opcaoId }: { questaoId: number; opcaoId: number }) => {
      const resposta = {
        inscricaoId,
        usuarioId,
        questaoId,
        opcaoId,
      };

      await axios
        .post('/api/disc/responder', resposta)
        .then(() => {
          setQuestoesPendentes(
            questoesPendentes.filter((q) => q.id !== questaoId),
          );
          setQuestoesRespondidas([...questoesRespondidas, questaoAtual!]);
        })
        .catch(() => {
          console.log('Erro ao responder questão');
        });
    },
    [
      inscricaoId,
      questaoAtual,
      questoesPendentes,
      questoesRespondidas,
      usuarioId,
    ],
  );

  useEffect(() => {
    setQuestoesPendentes(questionario.questoes.filter((q) => !q.resposta));
    setQuestoesRespondidas(questionario.questoes.filter((q) => q.resposta));
  }, [questionario.questoes]);

  useEffect(() => {
    if (questoesPendentes.length === 0) {
      setQuestaoAtual(undefined);
      return;
    }

    const index = Math.floor(Math.random() * questoesPendentes.length);
    const questao = questoesPendentes[index];

    setQuestaoAtual({
      ...questao,
      opcoes: arrayShuffle(questao.opcoes),
    });
  }, [questoesPendentes]);

  useEffect(() => {
    setProgresso(
      Math.round(
        (questoesRespondidas.length / questionario.questoes.length) * 100,
      ),
    );
  }, [questionario.questoes.length, questoesRespondidas.length]);

  useEffect(() => {
    if (progresso === 100) {
      router.refresh();
      return;
    }
  }, [progresso, router]);

  // 🔒 Alerta de saída enquanto o teste não for concluído
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Só alerta se o teste não estiver completo
      if (progresso < 100) {
        event.preventDefault();
        event.returnValue = ''; // Necessário para ativar o alerta
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup: remove o listener quando o componente desmontar
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [progresso]);

  return (
    <div className="">
      <div className="mx-auto mt-4 w-full max-w-[720px] py-8">
        <div className="flex flex-col gap-6">
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {questaoAtual?.opcoes.map((opcao) => (
              <li key={opcao.id}>
                <button
                  className="border-primary-200 bg-primary-50 hover:bg-primary-100 hover:text-primary-500 flex w-full cursor-pointer items-center justify-center rounded border px-6 py-4 text-sm font-semibold uppercase transition-colors duration-200"
                  onClick={() =>
                    handleResponder({
                      questaoId: questaoAtual.id,
                      opcaoId: opcao.id,
                    })
                  }
                >
                  {opcao.valor}
                </button>
              </li>
            ))}
          </ul>

          <div data-slot="progress-bar" className="flex items-center gap-1">
            <div className="h-3 flex-1 rounded-full bg-slate-200">
              <div
                className="bg-primary-400 h-3 rounded-full transition-all duration-200"
                style={{ width: `${progresso}%` }}
              />
            </div>
            <span
              data-slot="progress-bar-indicator"
              className="text-primary-800 flex h-4 items-center justify-center px-1 text-xs font-semibold"
            >
              {questoesRespondidas.length}/{questionario.questoes.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
