'use client';

import Color from 'color';
import { AlignLeft, Columns3Cog, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Lottie from 'react-lottie';
import slug from 'slug';

import { useResultadoAvaliacaoCanvas360 } from '@/hooks/useResultadoAvaliacaoCanvas360';
import { firstName } from '@/lib/helpers';
import analytics from '@/resources/animations/analytics.json';
import { Button } from '@/components/ui';
import Link from 'next/link';

interface ResultadoProps {
  avaliacaoId: string;
}
export function Resultado({ avaliacaoId }: ResultadoProps) {
  const {
    data: avaliacao,
    isLoading,
    isError,
  } = useResultadoAvaliacaoCanvas360({ avaliacaoId });

  if (isError) {
    return (
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 2xl:px-6">
        <div className="flex flex-col gap-6 rounded-lg bg-red-100 p-8 lg:flex-row lg:items-center lg:justify-center">
          <figure>
            <Image
              src="/images/icons/error-browser.png"
              width={512}
              height={512}
              alt=""
              className="h-[64px] w-[64px]"
            />
          </figure>
          <div className="text-center lg:text-left">
            <strong>error</strong>
            <br />
            <span>Erro desconhecido ao consultar resultado a avaliação.</span>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 2xl:px-6">
        <div className="flex flex-col gap-2 rounded-lg bg-white p-8 shadow-md lg:flex-row lg:items-center lg:justify-center">
          <figure>
            <Lottie
              options={{ loop: true, autoplay: true, animationData: analytics }}
              height={96}
              width={96}
            />
          </figure>
          <div className="text-center lg:text-left">
            <strong>Aguarde</strong>
            <br />
            <span>Consultando o resultado da avaliação de sua empresa.</span>
          </div>
        </div>
      </div>
    );
  }

  if (avaliacao) {
    return (
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 2xl:px-6">
        <div className="flex flex-col gap-6 rounded-lg bg-white p-4 shadow-md">
          <div className="grid gap-6 lg:grid-cols-2">
            <figure
              className="flex w-full items-center justify-center"
              data-slot="image"
            >
              <Image
                src="/images/canvas360-foguete.png"
                alt=""
                width={680}
                height={780}
              />
            </figure>
            <div data-slot="metricas" className="flex flex-col gap-6">
              <div>
                Olá,{' '}
                {firstName({
                  fullName: avaliacao.inscricao.usuario,
                  ucfirst: true,
                })}
                !<br />A Avaliação Canvas 360° da sua empresa está pronta!
              </div>
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
                              width: `${Math.floor((bloco.pontos / bloco.maximo) * 100)}%`,
                              color: Color(bloco.cor).darken(0.6).hex(),
                            }}
                          >
                            {Math.floor((bloco.pontos / bloco.maximo) * 100)}%
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
                                  {Math.floor((cat.pontos / cat.maximo) * 100)}%
                                </span>
                                <div className="w-[200px]">
                                  <div
                                    className="h-2 rounded-md"
                                    style={{
                                      backgroundColor: bloco.cor,
                                      width: `${Math.floor((cat.pontos / cat.maximo) * 100)}%`,
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

          {avaliacao.analise === null ? (
            <section className="border-primary-100 bg-primary-50 flex flex-col gap-2 rounded-lg border p-8 lg:flex-row lg:items-center lg:justify-center">
              <figure>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: analytics,
                  }}
                  height={96}
                  width={96}
                />
              </figure>
              <div className="text-center lg:text-left">
                <strong>Aguarde</strong>
                <br />
                <span>
                  Aguardando nosso agente de IA finalizar a análise da sua
                  avaliação.
                </span>
              </div>
            </section>
          ) : (
            <>
              <section className="border-primary-100 bg-primary-50 flex flex-col gap-6 rounded-md border p-8">
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
                          src={bloco.icone}
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
                            <h4 className="text-base font-semibold">
                              {cat.nome}
                            </h4>
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

              {avaliacao.analise?.['sugestao-bmc'] && (
                <>
                  <section className="flex flex-col gap-6">
                    <header className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <figure className="bg-primary-100 flex h-8 w-8 items-center justify-center rounded-sm">
                          <Columns3Cog
                            size={18}
                            strokeWidth={2}
                            className="text-primary-500/50"
                          />
                        </figure>
                        <h2 className="text-xl font-bold">
                          Business Model Canvas
                        </h2>
                      </div>
                      <div className="text-primary-500/50 flex items-center gap-2 text-xs font-semibold">
                        Gerado por IA <Sparkles size={16} strokeWidth={1.5} />
                      </div>
                    </header>
                    <p>
                      Montamos um <em>Business Model Canvas</em> (BMC) com
                      algumas sugestões de como você pode criar um para sua
                      empresa. Ele foi gerado através da área de atuação que
                      vocẽ preencheu no formulário de inscrição.
                    </p>
                    <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-10">
                      <div className="grid gap-2 lg:col-span-4 lg:grid-cols-2">
                        <div className="rounded-md border border-blue-200 bg-blue-100 p-3 text-sm">
                          <h4 className="mb-3 font-bold">Parcerias chave</h4>
                          <ul>
                            {avaliacao.analise['sugestao-bmc'][
                              'parcerias-chave'
                            ].map((parceria) => (
                              <li
                                key={parceria}
                                className="first: mt-2 border-t border-t-black/10 pt-2 first:border-t-0"
                              >
                                {parceria}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex-1 rounded-md border border-blue-200 bg-blue-100 p-3 text-sm">
                            <h4 className="mb-3 font-bold">Atividades chave</h4>
                            <ul>
                              {avaliacao.analise['sugestao-bmc'][
                                'atividades-chave'
                              ].map((atividade) => (
                                <li
                                  key={atividade}
                                  className="first: mt-2 border-t border-t-black/10 pt-2 first:border-t-0"
                                >
                                  {atividade}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex-1 rounded-md border border-blue-200 bg-blue-100 p-3 text-sm">
                            <h4 className="mb-3 font-bold">Recursos chave</h4>
                            <ul>
                              {avaliacao.analise['sugestao-bmc'][
                                'recursos-chave'
                              ].map((item) => (
                                <li
                                  key={item}
                                  className="first: mt-2 border-t border-t-black/10 pt-2 first:border-t-0"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-2">
                        <div className="h-full rounded-md border border-orange-200 bg-orange-100 p-3 text-sm">
                          <h4 className="mb-3 font-bold">Proposta de valor</h4>
                          <ul>
                            {avaliacao.analise['sugestao-bmc'][
                              'proposta-de-valor'
                            ].map((item) => (
                              <li
                                key={item}
                                className="first: mt-2 border-t border-t-black/10 pt-2 first:border-t-0"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="grid gap-2 lg:col-span-4 lg:grid-cols-2">
                        <div className="flex flex-col gap-2">
                          <div className="flex-1 rounded-md border border-yellow-200 bg-yellow-100 p-3 text-sm">
                            <h4 className="mb-3 font-bold">
                              Relacionamento com o cliente
                            </h4>
                            <ul>
                              {avaliacao.analise['sugestao-bmc'][
                                'relacionamento-com-os-clientes'
                              ].map((item) => (
                                <li
                                  key={item}
                                  className="first: mt-2 border-t border-t-black/10 pt-2 first:border-t-0"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex-1 rounded-md border border-yellow-200 bg-yellow-100 p-3 text-sm">
                            <h4 className="mb-3 font-bold">Canais</h4>
                            <ul>
                              {avaliacao.analise['sugestao-bmc']['canais'].map(
                                (item) => (
                                  <li
                                    key={item}
                                    className="first: mt-2 border-t border-t-black/10 pt-2 first:border-t-0"
                                  >
                                    {item}
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className="rounded-md border border-yellow-200 bg-yellow-100 p-3 text-sm">
                          <h4 className="mb-3 font-bold">
                            Segmentação de clientes
                          </h4>
                          <ul>
                            {avaliacao.analise['sugestao-bmc'][
                              'segmento-de-clientes'
                            ].map((item) => (
                              <li
                                key={item}
                                className="first: mt-2 border-t border-t-black/10 pt-2 first:border-t-0"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="grid gap-2 rounded-md md:col-span-3 md:grid-cols-2 lg:col-span-10">
                        <div className="rounded-md border border-emerald-200 bg-emerald-100 p-3 text-sm">
                          <h4 className="mb-3 font-bold">
                            Estrutura de custos
                          </h4>
                          <ul>
                            {avaliacao.analise['sugestao-bmc'][
                              'estrutura-de-custos'
                            ].map((item) => (
                              <li
                                key={item}
                                className="first: mt-2 border-t border-t-black/10 pt-2 first:border-t-0"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-md border border-emerald-200 bg-emerald-100 p-3 text-sm">
                          <h4 className="mb-3 font-bold">Fontes de receita</h4>
                          <ul>
                            {avaliacao.analise['sugestao-bmc'][
                              'fontes-de-receita'
                            ].map((item) => (
                              <li
                                key={item}
                                className="first: mt-2 border-t border-t-black/10 pt-2 first:border-t-0"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="">
                    <Link
                      href={`/canvas360/${avaliacao.inscricao.id}/avaliacao/${avaliacao.id}/relatorio`}
                      target="_blank"
                    >
                      <Button>Baixar relatório</Button>
                    </Link>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}
