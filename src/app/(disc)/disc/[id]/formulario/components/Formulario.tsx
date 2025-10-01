'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { isAxiosError } from 'axios';
import { isPhone } from 'brazilian-values';
import { SquarePen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { Button, Input } from '@/components/form';

interface FormularioProps {
  inscricaoId: string;
}

export function Formulario({ inscricaoId }: FormularioProps) {
  const router = useRouter();

  const formSchema = z.object({
    nome: z
      .string()
      .min(1, 'O nome precisa ser preenchido.')
      .min(6, 'O nome precisa ter pelo menos 12 caracteres.'),
    email: z.email({ message: 'Endereço de e-mail inválido' }),
    whatsapp: z
      .string()
      .optional()
      .refine(
        (val) => {
          if (val === undefined || val.trim() === '') return true; // se vazio, passa
          return isPhone(val); // se preenchido, valida
        },
        {
          message: 'Número de telefone inválido.',
        },
      ),
    cargo: z.string().min(3, 'Campo não pode ter menos de 3 caracteres.'),
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
    const usuario = {
      inscricaoId,
      ...data,
    };

    try {
      const response = await axios.post('/api/disc/usuario', usuario);

      const responseData = response.data.data;

      if ([200, 201].includes(response.status)) {
        router.push(`/disc/${inscricaoId}/usuario/${responseData.id}`);
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
    <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-4">
      <fieldset className="grid grid-cols-12 gap-x-4 gap-y-2">
        <div className="col-span-12">
          <label className="text-sm font-medium text-slate-400">
            Seu nome completo
          </label>
          <Input
            type="text"
            registration={register('nome')}
            error={errors.nome?.message}
            className="uppercase"
          />
        </div>
        <div className="col-span-12">
          <label className="text-sm font-medium text-slate-400">
            Endereço de e-mail
          </label>
          <Input
            type="text"
            registration={register('email')}
            className="lowercase"
            error={errors.email?.message}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <label className="text-sm font-medium text-slate-400">Cargo</label>
          <Input
            type="text"
            registration={register('cargo')}
            error={errors.cargo?.message}
            className="uppercase"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <label className="text-sm font-medium text-slate-400">Whatsapp</label>
          <Input
            type="text"
            registration={register('whatsapp')}
            error={errors.whatsapp?.message}
          />
        </div>
      </fieldset>
      <fieldset>
        <Button type="submit" isLoading={isSubmitting} icon={SquarePen}>
          Começar
        </Button>
      </fieldset>
    </form>
  );
}
