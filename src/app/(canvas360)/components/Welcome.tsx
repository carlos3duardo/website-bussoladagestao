'use client';

import axios from 'axios';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useState } from 'react';

import { Button } from '@/components/ui';
import { firstName } from '@/lib/helpers';
import { ApiAvCorpInscricao } from '@/types';

interface WelcomeProps {
  inscricao: ApiAvCorpInscricao;
}

export function Welcome({ inscricao }: WelcomeProps) {
  const [isSubmitting, setSubmitting] = useState(false);

  const agora = new Date().getHours();
  const saudacao =
    agora < 12 ? 'Bom dia' : agora < 18 ? 'Boa tarde' : 'Boa noite';

  const handleSubmit = useCallback(async () => {
    setSubmitting(true);

    const data = {
      inscricao_id: inscricao.id,
      nome: `Avaliação solicitada pelo site. Empresa: ${inscricao.empresa.nome}.`,
    };

    axios
      .post('/api/canvas360/avaliacao', data)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setSubmitting(false);
      });
  }, [inscricao.empresa.nome, inscricao.id]);

  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
      <figure className="py-4">
        <Image
          src="/images/canvas360-charts.svg"
          width={993}
          height={580}
          alt=""
          className="mx-auto w-[50%] md:w-[320px] lg:mx-0 lg:ml-auto"
        />
      </figure>
      <section className="py-4 text-center lg:text-left">
        <h2 className="text-2xl font-bold">
          Olá, {firstName({ fullName: inscricao.usuario, ucfirst: true })}!{' '}
          {saudacao}.
        </h2>
        <p className="my-2 text-lg">
          Tudo certo para começar a avaliação Canvas 360° da sua empresa?
          <br />
          Clique no botão abaixo para iniciar.
        </p>
        <div className="mt-4 flex justify-center gap-2 lg:justify-start">
          <Button
            size="sm"
            isLoading={isSubmitting}
            onClick={handleSubmit}
            icon={ArrowRight}
            iconPosition="right"
          >
            Iniciar Avaliação
          </Button>
        </div>
      </section>
    </div>
  );
}
