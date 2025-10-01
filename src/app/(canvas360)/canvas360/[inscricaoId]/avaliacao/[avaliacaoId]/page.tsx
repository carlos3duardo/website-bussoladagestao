import Color from 'color';
import { AlignLeft, Sparkles } from 'lucide-react';
import Image from 'next/image';
import slug from 'slug';

import { PageMain } from '@/app/(canvas360)/components';
import { getAvCorpAvaliacao } from '@/lib/api/getAvCorpAvaliacao';
import { firstName } from '@/lib/helpers';

interface PageProps {
  params: Promise<{
    inscricaoId: string;
    avaliacaoId: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { avaliacaoId } = await params;

  const avaliacao = await getAvCorpAvaliacao({ avaliacaoId });

  return (
    <PageMain className="bg-[url(/images/bg-icon-pattern-01.png)]">
      <div className="mx-auto w-full max-w-7xl px-4 2xl:px-6">
        <div className="flex flex-col gap-6 rounded-lg bg-white p-4 shadow-md">
          <div className="grid gap-8 lg:grid-cols-2">
            <figure>
              <Image
                src="/images/canvas360-foguete.png"
                alt=""
                width={680}
                height={780}
              />
            </figure>
            <div data-slot="introducao" className="p-6">
              Olá,{' '}
              {firstName({
                fullName: avaliacao.inscricao.usuario,
                ucfirst: true,
              })}
              !<br />A Avaliação Canvas 360° da sua empresa está pronta!
              <br />
              <br />
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <figure>
                  <ul className="flex flex-col gap-2">
                    {avaliacao.resultado.blocos.map((bloco) => (
                      <li key={bloco.id}>
                        <span className="text-sm font-semibold">
                          {bloco.nome}
                        </span>{' '}
                        <div className="h-6 rounded-md bg-slate-200">
                          <div
                            className="flex h-6 items-center justify-end rounded-md px-2 text-xs font-semibold text-black/80"
                            style={{
                              backgroundColor: bloco.cor,
                              width: `${bloco.maturidade}%`,
                              color: Color(bloco.cor).darken(0.6).hex(),
                            }}
                          >
                            {bloco.maturidade}%
                          </div>
                        </div>
                        <ul className="flex flex-col gap-1 py-1">
                          {bloco.categorias.map((cat) => (
                            <li key={cat.id} className="flex items-center">
                              <span className="flex-1 text-xs font-medium">
                                {cat.nome}
                              </span>
                              <div className="flex items-center gap-1">
                                <span className="text-xs font-medium">
                                  {cat.maturidade}%
                                </span>
                                <div className="w-[200px]">
                                  <div
                                    className="h-2 rounded-md"
                                    style={{
                                      backgroundColor: bloco.cor,
                                      width: `${cat.maturidade}%`,
                                    }}
                                  />
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </figure>
              </div>
            </div>
          </div>

          <section
            data-slot="card"
            className="border-primary-100 bg-primary-50 flex flex-col gap-6 rounded-md border p-8"
          >
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <figure className="bg-primary-100 flex h-8 w-8 items-center justify-center rounded-sm">
                  <AlignLeft
                    size={18}
                    strokeWidth={2}
                    className="text-primary-500/50"
                  />
                </figure>
                <h2 className="text-xl font-bold">
                  Feedback de sua avaliação Canvas 360°
                </h2>
              </div>
              <div className="text-primary-500/50 flex items-center gap-2 text-xs font-semibold">
                Gerada por IA <Sparkles size={16} strokeWidth={1.5} />
              </div>
            </header>
            <div>{avaliacao.analise?.feedback}</div>

            <ul className="flex flex-col gap-6">
              {avaliacao.resultado.blocos.map((bloco) => (
                <li key={bloco.id} className="flex gap-4">
                  <aside className="bg-primary-100 rounded-lg p-6">
                    <Image
                      src={`http://jarvis.localhost/${bloco.icone}`}
                      width={64}
                      height={64}
                      alt=""
                      className="h-8 w-8 opacity-80"
                    />
                  </aside>
                  <div className="flex-1 py-4">
                    <h3 className="text-xl font-bold">{bloco.nome}</h3>
                    {bloco.categorias.map((cat) => (
                      <div key={cat.id} className="mt-2">
                        <h4 className="text-base font-semibold">{cat.nome}</h4>
                        {avaliacao.analise &&
                          Object.entries(avaliacao.analise.categorias)
                            .filter(([key]) => key === slug(cat.nome))
                            .map(([key, value]) => (
                              <p key={key} className="text-sm">
                                {value as string}
                              </p>
                            ))}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <pre className="bg-white p-4 text-xs font-semibold shadow">
          {JSON.stringify(avaliacao.analise?.['sugestao-bmc'], null, 2)}
        </pre>
      </div>
    </PageMain>
  );
}
