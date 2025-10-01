'use client';

import axios from 'axios';
import { MessageSquare, MessageSquareText, Trash2 } from 'lucide-react';
import { useCallback, useContext, useState } from 'react';

import { Textarea } from '@/components/form';
import { Button, Modal } from '@/components/ui';
import { ModalContext } from '@/components/ui/Modal/ModalContext';

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
    nome: string;
    codigo: string;
  };
  created_at: string;
};

interface QuestaoComentariosProps {
  avaliacaoId: string;
  questao: QuestaoProps;
}

export function QuestaoComentarios({
  avaliacaoId,
  questao,
}: QuestaoComentariosProps) {
  return (
    <Modal.Root>
      <Comentarios avaliacaoId={avaliacaoId} questao={questao} />
    </Modal.Root>
  );
}

interface ComentariosProps {
  avaliacaoId: string;
  questao: QuestaoProps;
}

function Comentarios({ avaliacaoId, questao }: ComentariosProps) {
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState(questao.comentarios);

  const { closeModal } = useContext(ModalContext);

  const handleNovoComentario = useCallback(
    async ({
      avaliacaoId,
      questaoId,
      comentario,
    }: {
      avaliacaoId: string;
      questaoId: string;
      comentario: string;
    }) => {
      await axios
        .post(
          `/api/trial/avcorp/canvas360/avaliacao/${avaliacaoId}/comentario`,
          {
            avaliacao_id: avaliacaoId,
            questao_id: questaoId,
            comentario: comentario,
          },
        )
        .then((response) => {
          const comentario = response.data.data;

          setComentarios([...comentarios, comentario]);
          setComentario('');
        });
    },
    [comentarios],
  );

  const handleExcluirComentario = useCallback(
    async ({
      avaliacaoId,
      comentarioId,
    }: {
      avaliacaoId: string;
      comentarioId: string;
    }) => {
      await axios
        .delete(
          `/api/trial/avcorp/canvas360/avaliacao/${avaliacaoId}/comentario/${comentarioId}`,
        )
        .then(() => {
          setComentarios(comentarios.filter((c) => c.id !== comentarioId));
        });
    },
    [comentarios],
  );

  return (
    <>
      <Modal.Trigger id={`modal-${questao.id}`}>
        <button
          className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded hover:bg-slate-300"
          title={
            comentarios.length == 0 ? 'Adicionar comentário' : 'Ver comentários'
          }
        >
          {comentarios.length > 0 ? (
            <MessageSquareText size={18} className="text-slate-400" />
          ) : (
            <MessageSquare size={18} className="text-slate-400" />
          )}
        </button>
      </Modal.Trigger>
      <Modal.Container>
        <Modal.Header
          label="Faça um comentário sobre sua nota"
          title={questao.nome}
          subtitle="O feedback sobre sua avaliação será mais rico se você fizer um comentário sobre a avaliação realizada."
        />
        <Modal.Body>
          {comentarios.length > 0 && (
            <ul className="mb-6 flex flex-col gap-2">
              {comentarios.map((comentario) => (
                <li
                  key={comentario.id}
                  className="mt-2 flex gap-2 border-t border-t-slate-300 pt-3 first:mt-0 first:border-t-0 first:pt-0"
                >
                  <span className="pt-1">
                    <MessageSquareText size={18} />
                  </span>
                  <p className="flex-1 text-sm">{comentario.comentario}</p>
                  <div>
                    <button
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-slate-200 hover:bg-red-200 hover:text-red-600"
                      onClick={() =>
                        handleExcluirComentario({
                          avaliacaoId,
                          comentarioId: comentario.id,
                        })
                      }
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div>
            <label className="text-sm font-medium text-slate-500">
              Cadastrar novo comentário:
            </label>
            <Textarea
              className="text-sm"
              onChange={(evt) => setComentario(evt.target.value)}
              value={comentario}
            />
            <div className="mt-2 flex items-center justify-end gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => closeModal()}
              >
                Fechar
              </Button>
              <Button
                size="sm"
                onClick={() =>
                  handleNovoComentario({
                    avaliacaoId,
                    questaoId: questao.id,
                    comentario,
                  })
                }
                disabled={comentario.length <= 10}
              >
                Salvar comentário
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal.Container>
    </>
  );
}
