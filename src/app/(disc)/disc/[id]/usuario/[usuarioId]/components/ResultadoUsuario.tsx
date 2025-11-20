'use client';

import Color from 'color';
import {
  BicepsFlexed,
  Cog,
  Contact,
  Hourglass,
  LoaderCircle,
  MessagesSquare,
  Skull,
  Target,
  ThumbsDown,
  ThumbsUp,
  User,
} from 'lucide-react';
import { ReactNode } from 'react';
import Lottie from 'react-lottie';

import { useResultadoTesteDiscUsuario } from '@/hooks/useResultadoTesteDiscUsuario';
import { capitalize, firstName } from '@/lib/helpers';
import analytics from '@/resources/animations/analytics.json';
import { ApiTesteDiscUsuario } from '@/types';

interface ResultadoProps {
  inscricaoId: string;
  usuario: ApiTesteDiscUsuario;
  usuarioId: string;
}

export function ResultadoUsuario({
  inscricaoId,
  usuario,
  usuarioId,
}: ResultadoProps) {
  const { isLoading, data: resultado } = useResultadoTesteDiscUsuario({
    inscricaoId,
    usuarioId,
  });

  const icones: Record<number, ReactNode> = {
    1: <Target />,
    2: <MessagesSquare />,
    3: <Hourglass />,
    4: <Cog />,
  };

  if (isLoading) {
    return (
      <div className="border-primary-100 bg-primary-50 flex flex-col gap-2 rounded-md border p-8">
        <div className="flex flex-col gap-2 p-8 lg:flex-row lg:items-center lg:justify-center">
          <figure>
            <Lottie
              options={{ loop: true, autoplay: true, animationData: analytics }}
              height={96}
              width={96}
            />
          </figure>
          <div className="text-center lg:text-left">
            <strong>
              {firstName({ fullName: usuario.nome, ucfirst: true })}, por favor,
              aguarde...
            </strong>
            <br />
            <span>Processando o resultado de seu teste DISC.</span>
          </div>
        </div>
      </div>
    );
  }

  if (resultado) {
    const {
      forcas,
      fraquezas,
      animadores,
      desanimadores,
      comportamentos,
      adequacao,
    } = resultado.analise || {};
    return (
      <div className="border-primary-100 bg-primary-50 flex flex-col gap-2 rounded-md border p-8">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="border-primary-100 rounded border bg-white lg:col-span-2">
            <h2 className="border-b-primary-100 border-b px-8 py-4 text-sm font-semibold">
              Resultado do teste DISC de{' '}
              {firstName({ fullName: usuario.nome, ucfirst: true })}
            </h2>
            <div className="grid gap-6 px-8 py-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter">
                  {capitalize(usuario.nome)}
                </h2>
                <h3 className="text-base font-bold opacity-80">
                  {usuario.cargo}, {usuario.inscricao.empresa}.
                </h3>
                {resultado.analise ? (
                  <p className="my-2 text-sm font-medium text-balance">
                    {resultado.analise.resumo}
                  </p>
                ) : (
                  <div className="flex animate-pulse flex-col gap-2">
                    <p className="h-4 w-[420px] rounded-full bg-slate-300" />
                    <p className="h-4 w-[360px] rounded-full bg-slate-300" />
                  </div>
                )}

                {resultado.analise?.adjetivos &&
                resultado.analise.adjetivos.length > 0 ? (
                  <ul className="flex flex-wrap items-center gap-4 py-2">
                    {resultado.analise.adjetivos.map((adjetivo) => (
                      <li
                        key={adjetivo}
                        className="ring-primary-400 text-primary-600 rounded-full px-4 py-1 text-sm ring"
                      >
                        {adjetivo}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="flex animate-pulse flex-wrap items-center gap-4 py-4">
                    <li className="bg-primary-200 h-[28px] w-[100px] rounded-full px-4 py-1 text-sm" />
                    <li className="bg-primary-200 h-[28px] w-[100px] rounded-full px-4 py-1 text-sm" />
                    <li className="bg-primary-200 h-[28px] w-[100px] rounded-full px-4 py-1 text-sm" />
                    <li className="bg-primary-200 h-[28px] w-[100px] rounded-full px-4 py-1 text-sm" />
                  </ul>
                )}

                {resultado.analise?.descricao ? (
                  <p className="my-2 text-base font-normal text-balance">
                    {resultado.analise?.descricao}
                  </p>
                ) : (
                  <div className="my-2 flex animate-pulse flex-col gap-2">
                    <p className="h-4 w-[420px] rounded-full bg-slate-300" />
                    <p className="h-4 w-[360px] rounded-full bg-slate-300" />
                    <p className="h-4 w-[380px] rounded-full bg-slate-300" />
                    <p className="h-4 w-[400px] rounded-full bg-slate-300" />
                    <p className="h-4 w-[360px] rounded-full bg-slate-300" />
                  </div>
                )}
              </div>
              <div className="self-center">
                <figure>
                  <ul className="flex flex-col gap-3">
                    {resultado.resultado.disc.map((perfil) => (
                      <li key={perfil.id} className="flex flex-col">
                        <span className="text-sm font-semibold">
                          {perfil.nome}
                        </span>
                        <div className="flex items-center">
                          <div
                            className="flex h-10 w-10 items-center justify-center rounded-l-sm bg-purple-600 text-white"
                            style={{
                              backgroundColor: Color(perfil.cor)
                                .darken(0.2)
                                .hex(),
                            }}
                          >
                            {icones[perfil.id]}
                          </div>
                          <div
                            className="h-10 rounded-r-sm bg-blue-500"
                            style={{
                              width: `${perfil.proporcao}%`,
                              backgroundColor: perfil.cor,
                            }}
                          />
                          <div className="flex h-10 items-center justify-center p-2 text-sm font-semibold">
                            {perfil.proporcao}%
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </figure>
              </div>
            </div>
          </div>

          <section className="border-primary-100 rounded border bg-white">
            <h2 className="border-b-primary-100 border-b px-8 py-4 text-sm font-semibold">
              <span className="flex items-center gap-2">
                <BicepsFlexed size={18} /> Forças
              </span>
            </h2>
            <ul className="flex flex-col gap-3 px-8 pt-8 pb-8">
              {forcas && forcas.length > 0 ? (
                forcas.map((forca) => <li key={forca}>{forca}</li>)
              ) : (
                <li className="flex items-center gap-4">
                  <LoaderCircle size={22} className="animate-spin" /> Aguardando
                  resultado...
                </li>
              )}
            </ul>
          </section>

          <section className="border-primary-100 rounded border bg-white">
            <h2 className="border-b-primary-100 border-b px-8 py-4 text-sm font-semibold">
              <span className="flex items-center gap-2">
                <Skull size={18} /> Fraquezas
              </span>
            </h2>
            <ul className="flex flex-col gap-3 px-8 pt-8 pb-8">
              {fraquezas && fraquezas.length > 0 ? (
                fraquezas.map((item) => <li key={item}>{item}</li>)
              ) : (
                <li className="flex items-center gap-4">
                  <LoaderCircle size={22} className="animate-spin" /> Aguardando
                  resultado...
                </li>
              )}
            </ul>
          </section>

          <section className="border-primary-100 rounded border bg-white">
            <h2 className="border-b-primary-100 border-b px-8 py-4 text-sm font-semibold">
              <span className="flex items-center gap-2">
                <ThumbsUp size={18} /> Coisas que animam{' '}
                {firstName({ fullName: usuario.nome, ucfirst: true })}
              </span>
            </h2>
            <ul className="flex flex-col gap-3 px-8 pt-8 pb-8">
              {animadores && animadores.length > 0 ? (
                animadores.map((item) => <li key={item}>{item}</li>)
              ) : (
                <li className="flex items-center gap-4">
                  <LoaderCircle size={22} className="animate-spin" /> Aguardando
                  resultado...
                </li>
              )}
            </ul>
          </section>

          <section className="border-primary-100 rounded border bg-white">
            <h2 className="border-b-primary-100 border-b px-8 py-4 text-sm font-semibold">
              <span className="flex items-center gap-2">
                <ThumbsDown size={18} /> Coisas que desanimam{' '}
                {firstName({ fullName: usuario.nome, ucfirst: true })}
              </span>
            </h2>
            <ul className="flex flex-col gap-3 px-8 pt-8 pb-8">
              {desanimadores && desanimadores.length > 0 ? (
                desanimadores.map((item) => <li key={item}>{item}</li>)
              ) : (
                <li className="flex items-center gap-4">
                  <LoaderCircle size={22} className="animate-spin" /> Aguardando
                  resultado...
                </li>
              )}
            </ul>
          </section>

          <section className="border-primary-100 rounded border bg-white">
            <h2 className="border-b-primary-100 border-b px-8 py-4 text-sm font-semibold">
              <span className="flex items-center gap-2">
                <User size={18} /> Comportamentos
              </span>
            </h2>
            <ul className="flex flex-col gap-3 px-8 pt-8 pb-8">
              {comportamentos && comportamentos.length > 0 ? (
                comportamentos.map((item) => <li key={item}>{item}</li>)
              ) : (
                <li className="flex items-center gap-4">
                  <LoaderCircle size={22} className="animate-spin" /> Aguardando
                  resultado...
                </li>
              )}
            </ul>
          </section>

          <section className="border-primary-100 rounded border bg-white">
            <h2 className="border-b-primary-100 border-b px-8 py-4 text-sm font-semibold">
              <span className="flex items-center gap-2">
                <Contact size={18} />{' '}
                {firstName({ fullName: usuario.nome, ucfirst: true })} se adequa
                ao seu cargo?
              </span>
            </h2>
            <p className="px-8 py-8">
              {adequacao ? (
                adequacao
              ) : (
                <>
                  <LoaderCircle size={22} className="animate-spin" /> Aguardando
                  resultado...
                </>
              )}
            </p>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="border-primary-100 bg-primary-50 flex flex-col gap-2 rounded-md border p-8">
      <div className="flex flex-col gap-2 p-8 lg:flex-row lg:items-center lg:justify-center">
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
          <span>Processando o resultado de seu teste DISC.</span>
        </div>
      </div>
    </div>
  );
}
