'use client';

import { CardInfo } from '@/components/ui/CardInfo';
import { useTesteDiscInscricao } from '@/hooks';
import {
  CloudAlert,
  Copy,
  CopyCheck,
  LinkIcon,
  LoaderCircle,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useCallback, useState } from 'react';

interface DashboardHeaderProps {
  inscricaoId: string;
}

export function DashboardHeader({ inscricaoId }: DashboardHeaderProps) {
  const [isTextCopied, setIsTextCopied] = useState(false);

  const sendToClipboard = useCallback(
    ({ textToCopy }: { textToCopy: string }) => {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            // Sucesso! Altera o texto do botão e o reseta depois de um tempo.
            setIsTextCopied(true);

            setTimeout(() => {
              setIsTextCopied(false);
            }, 2500);
          })
          .catch((err) => {
            // Caso ocorra algum erro
            console.error('Falha ao copiar o texto: ', err);
            alert('Erro ao copiar a URL.');
          });
      } else {
        // Fallback para navegadores mais antigos ou contextos não seguros
        // (Menos recomendado, mas funciona em alguns casos)
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;

        // Evita que a tela "pule" ao adicionar o textarea
        textArea.style.position = 'absolute';
        textArea.style.left = '-9999px';

        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          setIsTextCopied(true);

          setTimeout(() => {
            setIsTextCopied(false);
          }, 3000);
        } catch (err) {
          alert('Erro ao copiar a URL.');
          console.error('Fallback: Falha ao copiar o texto: ', err);
        }
        document.body.removeChild(textArea);
      }
    },
    [],
  );

  const {
    isLoading,
    isSuccess,
    isError,
    data: inscricao,
  } = useTesteDiscInscricao({ inscricaoId, refetchInterval: 30 });

  return (
    <>
      <div className="mt-6 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9">
          {isLoading ? (
            <CardInfo.Default
              icon={LoaderCircle}
              iconClassName="animate-spin"
              label="Link para o teste DISC"
              description="Compartilhe com a sua equipe"
            >
              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="text-inherit opacity-50 hover:underline"
                >
                  Carregando...
                </Link>
              </div>
            </CardInfo.Default>
          ) : isError ? (
            <CardInfo.Default
              icon={CloudAlert}
              label="Link para o teste DISC"
              description="Compartilhe com a sua equipe"
            >
              <div className="flex items-center gap-3">
                <Link href="#" className="text-inherit hover:underline">
                  Erro ao carregar o teste
                </Link>
              </div>
            </CardInfo.Default>
          ) : isSuccess && inscricao ? (
            <CardInfo.Default
              icon={LinkIcon}
              label="Link para o teste DISC"
              description="Compartilhe com a sua equipe"
            >
              <div className="flex items-center gap-3">
                <Link
                  href={inscricao.url_questionario}
                  className="text-inherit hover:underline"
                  target="_blank"
                >
                  {inscricao.url_questionario}
                </Link>
                <button
                  className="flex cursor-pointer items-center gap-1"
                  title="Copiar URL"
                  onClick={() =>
                    sendToClipboard({ textToCopy: inscricao.url_questionario })
                  }
                >
                  {isTextCopied ? (
                    <>
                      <CopyCheck
                        size={22}
                        strokeWidth={2}
                        className="text-emerald-500"
                      />
                      <span className="text-sm font-semibold text-emerald-500">
                        Copiado!
                      </span>
                    </>
                  ) : (
                    <Copy size={22} strokeWidth={2} />
                  )}
                </button>
              </div>
            </CardInfo.Default>
          ) : (
            <div>???</div>
          )}
        </div>
        <div className="col-span-12 md:col-span-3">
          {isLoading ? (
            <CardInfo.Default
              icon={LoaderCircle}
              iconClassName="animate-spin"
              label="Testes realizados"
            >
              ...
            </CardInfo.Default>
          ) : isError ? (
            <CardInfo.Default
              icon={CloudAlert}
              iconClassName="text-red-500"
              label="Testes realizados"
            >
              Erro
            </CardInfo.Default>
          ) : isSuccess && inscricao ? (
            <CardInfo.Default icon={Users} label="Testes realizados">
              {inscricao.usuarios}
            </CardInfo.Default>
          ) : (
            <div>???</div>
          )}
        </div>
      </div>
    </>
  );
}
