'use client';

import Color from 'color';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/ui';
import { ApiAvCorpCanvas360Questionario } from '@/types';

import { BtnFinalizar } from './BtnFinalizar';
import { Questao } from './Questao';

type BlocoProps = {
  id: string;
  nome: string;
  cor: string;
  icone: string;
  categorias: CategoriaProps[];
};

type CategoriaProps = {
  id: string;
  nome: string;
  questoes: QuestaoProps[];
};

type QuestaoProps = {
  id: string;
  nome: string;
  resposta_id: string | null;
  comentarios: ComentarioProps[];
};

type ComentarioProps = {
  id: string;
  comentario: string;
  tipo: {
    id: number;
    codigo: string;
    nome: string;
  };
  created_at: string;
};

interface QuestionarioProps {
  avaliacao: ApiAvCorpCanvas360Questionario;
  inscricaoId: string;
  exibirApenasQuestoesSemResposta?: boolean;
}

export function Questionario({
  avaliacao,
  inscricaoId,
  exibirApenasQuestoesSemResposta = false,
}: QuestionarioProps) {
  const router = useRouter();
  const [blocos, setBlocos] = useState([] as BlocoProps[]);

  useEffect(() => {
    if (exibirApenasQuestoesSemResposta) {
      const filteredBlocos: BlocoProps[] = avaliacao.blocos
        .map((bloco) => ({
          ...bloco,
          categorias: bloco.categorias
            .map((cat) => ({
              ...cat,
              questoes: cat.questoes.filter((qst) => !qst.resposta_id),
            }))
            .filter((cat) => cat.questoes.length > 0),
        }))
        .filter((b) => b.categorias.length > 0);

      setBlocos(filteredBlocos);
    } else {
      setBlocos(avaliacao.blocos);
    }
  }, [avaliacao.blocos, exibirApenasQuestoesSemResposta]);

  const handleQuestionarioCompleto = useCallback(() => {
    router.push(
      `/canvas360/${inscricaoId}/avaliacao/${avaliacao.id}/questionario`,
    );
  }, [avaliacao.id, inscricaoId, router]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 2xl:px-6">
      <div className="flex flex-col gap-4">
        {blocos.map((bloco) => (
          <section key={bloco.id} className="rounded-lg bg-white p-2 shadow-md">
            <header
              style={{
                background: `linear-gradient(to right, ${bloco.cor}, ${Color(bloco.cor).darken(0.4).hex()})`,
              }}
              className="flex items-center justify-between rounded"
            >
              <h2 className="px-4 py-2 text-2xl font-bold">{bloco.nome}</h2>
              <figure className="px-4 py-2">
                <Image
                  src={bloco.icone}
                  alt={bloco.nome}
                  width={256}
                  height={256}
                  className="h-[36px] w-[36px] brightness-0 invert"
                />
              </figure>
            </header>

            <div
              className="mt-2 overflow-hidden rounded border"
              style={{
                borderColor: bloco.cor,
              }}
            >
              {bloco.categorias.map((categoria) => (
                <div key={categoria.id} data-slot="categoria">
                  <div
                    data-slot="categoria-header"
                    className="grid lg:grid-cols-12"
                    style={{
                      backgroundColor: Color(bloco.cor).lighten(0.2).hex(),
                    }}
                  >
                    <h3 className="px-4 py-2 text-xl font-semibold lg:col-span-7">
                      {categoria.nome}
                    </h3>
                    <div
                      data-slot="bloco-opcoes"
                      className="hidden grid-cols-4 gap-2 lg:col-span-5 lg:grid"
                    >
                      {avaliacao.modelo.opcoes.map((opcao) => (
                        <div
                          key={opcao.id}
                          data-slot="opcao"
                          className="self-center text-center text-xs leading-tight font-medium"
                        >
                          <p>{opcao.nome}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div data-slot="categoria-questoes" className="py-2">
                    {categoria.questoes.map((questao) => (
                      <Questao
                        key={questao.id}
                        avaliacaoId={avaliacao.id}
                        questao={questao}
                        opcoes={avaliacao.modelo.opcoes}
                        respostaId={questao.resposta_id}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <br />
      <div className="flex gap-2">
        <BtnFinalizar inscricaoId={inscricaoId} avaliacaoId={avaliacao.id} />
        {exibirApenasQuestoesSemResposta && (
          <Button
            variant="secondary"
            onClick={() => handleQuestionarioCompleto()}
          >
            Visualizar todas as questões
          </Button>
        )}
      </div>
    </div>
  );
}
