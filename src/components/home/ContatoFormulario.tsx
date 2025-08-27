'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { isAxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import z from 'zod';

const formSchema = z.object({
  nome: z
    .string()
    .min(1, 'O nome precisa ser preenchido.')
    .min(6, 'O nome precisa ter pelo menos 6 caracteres.'),
  empresa: z.string().optional(),
  email: z
    .string()
    .check(
      z.minLength(1, 'O email precisa ser preenchido.'),
      z.email('Endereco de email inválido.'),
    ),
  localizacao: z.string().optional(),
  whatsapp: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\(\d{2}\) \d{4,5}-\d{4}$/.test(val),
      'WhatsApp deve estar no formato (11) 99999-9999',
    ),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

export function ContatoFormulario() {
  type FormData = z.infer<typeof formSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function formSubmit(data: FormData) {
    try {
      const response = await axios.post('/api/contato', data);

      console.log(response);
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
    <form
      onSubmit={handleSubmit(formSubmit)}
      noValidate
      className="flex flex-col gap-4"
    >
      <fieldset className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div
          data-slot="input-control"
          className="col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1"
        >
          <div
            data-error={!!errors.nome}
            className="flex h-12 items-center rounded-md border border-white/40 px-3 data-[error=true]:border-red-400"
          >
            <input
              {...register('nome')}
              placeholder="Seu nome *"
              className="font-medium outline-none"
            />
          </div>
          {errors.nome && (
            <p
              role="alert"
              className="p-0.5 text-xs font-semibold text-red-400"
            >
              {errors.nome.message}
            </p>
          )}
        </div>

        <div
          data-slot="input-control"
          className="col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1"
        >
          <div
            data-error={!!errors.empresa}
            className="flex h-12 items-center rounded-md border border-white/40 px-3 data-[error=true]:border-red-400"
          >
            <input
              {...register('empresa')}
              placeholder="Sua empresa"
              className="font-medium outline-none"
            />
          </div>
          {errors.empresa && (
            <p
              role="alert"
              className="p-0.5 text-xs font-semibold text-red-400"
            >
              {errors.empresa.message}
            </p>
          )}
        </div>

        <div
          data-slot="input-control"
          className="col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1"
        >
          <div
            data-error={!!errors.email}
            className="flex h-12 items-center rounded-md border border-white/40 px-3 data-[error=true]:border-red-400"
          >
            <input
              {...register('email')}
              placeholder="Seu melhor e-mail *"
              className="font-medium outline-none"
            />
          </div>
          {errors.email && (
            <p
              role="alert"
              className="p-0.5 text-xs font-semibold text-red-400"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        <div
          data-slot="input-control"
          className="col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1"
        >
          <div
            data-error={!!errors.whatsapp}
            className="flex h-12 items-center rounded-md border border-white/40 px-3 data-[error=true]:border-red-400"
          >
            <input
              {...register('whatsapp')}
              placeholder="Whatsapp"
              className="font-medium outline-none"
            />
          </div>
          {errors.whatsapp && (
            <p
              role="alert"
              className="p-0.5 text-xs font-semibold text-red-400"
            >
              {errors.whatsapp.message}
            </p>
          )}
        </div>

        <div data-slot="input-control" className="col-span-2">
          <div
            data-error={!!errors.mensagem}
            className="flex h-24 items-center rounded-md border border-white/40 px-3 py-2 data-[error=true]:border-red-400"
          >
            <textarea
              {...register('mensagem')}
              placeholder="Mensagem *"
              className="h-full w-full font-medium outline-none"
            />
          </div>
          {errors.mensagem && (
            <p
              role="alert"
              className="p-0.5 text-xs font-semibold text-red-400"
            >
              {errors.mensagem.message}
            </p>
          )}
        </div>
      </fieldset>
      <fieldset>
        <button
          type="submit"
          className="ring-primary-500 bg-primary-500 hover:bg-primary-700 hover:ring-primary-500 rounded px-4 py-3 text-sm font-bold text-white ring transition-all duration-200 hover:cursor-pointer"
        >
          Enviar mensagem
        </button>
      </fieldset>
    </form>
  );
}
