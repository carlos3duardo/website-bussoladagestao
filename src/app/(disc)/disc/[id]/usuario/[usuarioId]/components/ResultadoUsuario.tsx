'use client';

import Color from 'color';
import { Cog, Hourglass, MessagesSquare, Target } from 'lucide-react';
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
        <div className="grid md:grid-cols-2 md:gap-4">
          <figure className="border-primary-100 rounded border bg-white">
            <figcaption className="border-b-primary-100 border-b px-8 py-4 text-sm font-semibold">
              Resultado do teste DISC de{' '}
              {firstName({ fullName: usuario.nome, ucfirst: true })}
            </figcaption>
            <ul className="flex flex-col gap-3 px-8 pt-8 pb-8">
              {resultado.disc.map((perfil) => (
                <li key={perfil.id} className="flex flex-col">
                  <span className="text-sm font-semibold">{perfil.nome}</span>
                  <div className="flex items-center">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-l-sm bg-purple-600 text-white"
                      style={{
                        backgroundColor: Color(perfil.cor).darken(0.2).hex(),
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
          <div>
            <h2 className="text-2xl font-bold tracking-tighter">
              {capitalize(usuario.nome)}
            </h2>
            <h3>
              {usuario.cargo}, {usuario.inscricao.empresa.nome}.
            </h3>
          </div>
        </div>
        <pre className="text-xs font-semibold">
          {JSON.stringify(usuario, null, 2)}
        </pre>
      </div>
    )
  );
}
