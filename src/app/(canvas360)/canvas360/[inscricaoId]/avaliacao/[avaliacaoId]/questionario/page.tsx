import Color from 'color';
import Image from 'next/image';

import { PageMain } from '@/app/(canvas360)/components';
import { BtnFinalizar } from '@/app/(canvas360)/components/BtnFinalizar';
import { Questao } from '@/app/(canvas360)/components/Questao';
import { getAvCorpQuestionario } from '@/lib/api';

interface PageProps {
  params: Promise<{
    inscricaoId: string;
    avaliacaoId: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { inscricaoId, avaliacaoId } = await params;
  const { action = '' } = await searchParams;

  const avaliacao = await getAvCorpQuestionario({ avaliacaoId });

  return (
    <PageMain>
      <div className="mx-auto w-full max-w-7xl px-4 2xl:px-6">
        <div className="flex flex-col gap-4">
          {avaliacao.blocos.map((bloco) => (
            <section
              key={bloco.id}
              className="rounded-lg bg-white p-2 shadow-md"
            >
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
                      {categoria.questoes.map((questao) => {
                        if (
                          action === 'revisao' &&
                          questao.resposta_id !== null
                        ) {
                          return null;
                        }

                        return (
                          <Questao
                            key={questao.id}
                            avaliacaoId={avaliacaoId}
                            questao={questao}
                            opcoes={avaliacao.modelo.opcoes}
                            respostaId={questao.resposta_id}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        <br />
        <BtnFinalizar inscricaoId={inscricaoId} avaliacaoId={avaliacaoId} />
      </div>
    </PageMain>
  );
}
