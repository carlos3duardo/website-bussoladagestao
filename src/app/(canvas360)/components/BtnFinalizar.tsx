'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import Swal from 'sweetalert2';

import { Button } from '@/components/ui';

interface ButtonProps {
  inscricaoId: string;
  avaliacaoId: string;
}

export function BtnFinalizar({ inscricaoId, avaliacaoId }: ButtonProps) {
  const router = useRouter();

  const handleFinalizarAvaliacao = useCallback(
    async (avaliacaoId: string) => {
      Swal.fire({
        icon: 'question',
        title: 'Confirmação',
        text: 'Confirma a conclusão desta avaliação? Essa ação não pode ser desfeita.',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          await axios
            .patch(
              `/api/trial/avcorp/canvas360/avaliacao/${avaliacaoId}/finalizar`,
              {},
            )
            .then(() => {
              Swal.fire({
                icon: 'success',
                title: 'Avaliação concluída',
                text: 'A avaliação foi finalizada com sucesso!',
                showConfirmButton: false,
                timer: 2000,
              }).then(() => {
                router.push(
                  `/canvas360/${inscricaoId}/avaliacao/${avaliacaoId}`,
                );
              });
            })
            .catch((err) => {
              if (err.response.status === 409) {
                Swal.fire({
                  icon: 'error',
                  title: 'Avaliação incompleta',
                  html: `
                  Há uma ou mais questões sem resposta. Por favor, verifique todas as questões e tente novamente.
                `,
                  footer: `<a href="/canvas360/${inscricaoId}/avaliacao/${avaliacaoId}/questionario?action=revisao">Mostrar apenas questões sem resposta</a>`,
                });
              }
            });
        },
      });
    },
    [inscricaoId, router],
  );

  return (
    <div className="items-center-justify-end flex">
      <Button onClick={() => handleFinalizarAvaliacao(avaliacaoId)}>
        Finalizar
      </Button>
    </div>
  );
}
