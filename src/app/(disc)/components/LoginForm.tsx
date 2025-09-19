'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { isAxiosError } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { Button, Input } from '@/components/form';
import { ApiTesteDisc } from '@/types';

interface ComponentProps {
  teste: ApiTesteDisc;
}

export function LoginForm({ teste }: ComponentProps) {
  const router = useRouter();

  const formSchema = z.object({
    username: z.email({ message: 'Endereço de e-mail inválido' }),
    password: z.string().min(1, { message: 'Campo obrigatório' }),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function formSubmit(data: FormData) {
    const credenciais = {
      testeId: teste.id,
      ...data,
    };

    try {
      const response = await axios.post('/api/disc/auth', credenciais);

      if (response.status === 200) {
        router.push(`/disc/${teste.id}/dashboard`);
      }
    } catch (err) {
      console.error(err);
      if (isAxiosError(err)) {
        const response = err.response;
        const json = await response?.data;

        setError('root.serverError', { message: json.message });

        return;
      }

      setError('root.serverError', {
        message:
          'Não foi possível realizar a operação devido a um erro desconhecido.',
      });
    }
  }

  return (
    <div className="rounded-xl bg-white p-8 shadow xl:p-12">
      <div className="grid gap-8 lg:grid-cols-2 xl:gap-12">
        <figure className="flex items-center justify-center rounded-md bg-slate-200 p-8">
          <Image
            src="/images/disc-logo.webp"
            width={230}
            height={230}
            alt=""
            className="h-[180px] w-[180px]"
          />
        </figure>
        <form className="w-[360px] lg:py-8" onSubmit={handleSubmit(formSubmit)}>
          <h2 className="text-base font-semibold">Olá, {teste.usuario}.</h2>
          <p>Confirme o seu e-mail e a senha que recebeu.</p>
          <fieldset className="mt-4 flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Seu e-mail"
              registration={register('username')}
              error={errors.username?.message}
            />

            <Input
              type="password"
              placeholder="Senha"
              registration={register('password')}
              error={errors.password?.message}
            />

            <Button type="submit" isLoading={isSubmitting}>
              Entrar
            </Button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
