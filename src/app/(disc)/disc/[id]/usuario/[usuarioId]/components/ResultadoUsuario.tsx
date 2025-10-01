'use client';

import Color from 'color';
import {
  BicepsFlexed,
  Cog,
  Contact,
  Hourglass,
  MessagesSquare,
  Skull,
  Target,
  ThumbsDown,
  ThumbsUp,
  User,
} from 'lucide-react';
import { ReactNode } from 'react';

import { useResultadoTesteDiscUsuario } from '@/hooks/useResultadoTesteDiscUsuario';
import { capitalize, firstName } from '@/lib/helpers';
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
  const analise = usuario.analise ?? null;

  const {
    comportamentos = null,
    forcas = null,
    fraquezas = null,
    adjetivos = null,
    animadores = null,
    desanimadores = null,
    adequacao = null,
  } = analise || {};

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
    return <>Carregando...</>;
  }

  return (
    resultado && (
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
                  {usuario.cargo}, {usuario.inscricao.empresa.nome}.
                </h3>
                {usuario.analise?.resumo && (
                  <p className="my-2 text-sm font-medium text-balance">
                    {usuario.analise?.resumo}
                  </p>
                )}

                {adjetivos && adjetivos.length > 0 && (
                  <ul className="flex flex-wrap items-center gap-4 py-2">
                    {adjetivos.map((adjetivo) => (
                      <li
                        key={adjetivo}
                        className="ring-primary-400 text-primary-600 rounded-full px-4 py-1 text-sm ring"
                      >
                        {adjetivo}
                      </li>
                    ))}
                  </ul>
                )}

                {usuario.analise?.descricao && (
                  <p className="my-2 text-base font-normal text-balance">
                    {usuario.analise?.descricao}
                  </p>
                )}
              </div>
              <div className="self-center">
                <figure>
                  <ul className="flex flex-col gap-3">
                    {resultado.disc.map((perfil) => (
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

          {forcas && forcas.length > 0 && (
            <section className="border-primary-100 rounded border bg-white">
              <h2 className="border-b-primary-100 border-b px-8 py-4 text-sm font-semibold">
                <span className="flex items-center gap-2">
                  <BicepsFlexed size={18} /> Forças
                </span>
              </h2>
              <ul className="flex flex-col gap-3 px-8 pt-8 pb-8">
                {forcas.map((forca) => (
                  <li key={forca}>{forca}</li>
                ))}
              </ul>
            </section>
          )}

          {fraquezas && fraquezas.length > 0 && (
            <section className="border-primary-100 rounded border bg-white">
              <h2 className="border-b-primary-100 border-b px-8 py-4 text-sm font-semibold">
                <span className="flex items-center gap-2">
                  <Skull size={18} /> Fraquezas
                </span>
              </h2>
              <ul className="flex flex-col gap-3 px-8 pt-8 pb-8">
                {fraquezas.map((fraqueza) => (
                  <li key={fraqueza}>{fraqueza}</li>
                ))}
              </ul>
            </section>
          )}

          {animadores && animadores.length > 0 && (
            <section className="border-primary-100 rounded border bg-white">
              <h2 className="border-b-primary-100 border-b px-8 py-4 text-sm font-semibold">
                <span className="flex items-center gap-2">
                  <ThumbsUp size={18} /> Coisas que animam{' '}
                  {firstName({ fullName: usuario.nome, ucfirst: true })}
                </span>
              </h2>
              <ul className="flex flex-col gap-3 px-8 pt-8 pb-8">
                {animadores.map((fraqueza) => (
                  <li key={fraqueza}>{fraqueza}</li>
                ))}
              </ul>
            </section>
          )}

          {desanimadores && desanimadores.length > 0 && (
            <section className="border-primary-100 rounded border bg-white">
              <h2 className="border-b-primary-100 border-b px-8 py-4 text-sm font-semibold">
                <span className="flex items-center gap-2">
                  <ThumbsDown size={18} /> Coisas que desanimam{' '}
                  {firstName({ fullName: usuario.nome, ucfirst: true })}
                </span>
              </h2>
              <ul className="flex flex-col gap-3 px-8 pt-8 pb-8">
                {desanimadores.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {comportamentos && comportamentos.length > 0 && (
            <section className="border-primary-100 rounded border bg-white">
              <h2 className="border-b-primary-100 border-b px-8 py-4 text-sm font-semibold">
                <span className="flex items-center gap-2">
                  <User size={18} /> Comportamentos
                </span>
              </h2>
              <ul className="flex flex-col gap-3 px-8 pt-8 pb-8">
                {comportamentos.map((comportamento) => (
                  <li key={comportamento}>{comportamento}</li>
                ))}
              </ul>
            </section>
          )}

          {adequacao && (
            <section className="border-primary-100 rounded border bg-white">
              <h2 className="border-b-primary-100 border-b px-8 py-4 text-sm font-semibold">
                <span className="flex items-center gap-2">
                  <Contact size={18} />{' '}
                  {firstName({ fullName: usuario.nome, ucfirst: true })} se
                  adequa ao seu cargo?
                </span>
              </h2>
              <p className="px-8 py-8">{adequacao}</p>
            </section>
          )}
        </div>
      </div>
    )
  );
}
