'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { isAxiosError } from 'axios';
import { isPhone } from 'brazilian-values';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import z from 'zod';

import { Button, Input, Select, Textarea } from '@/components/form';
import { assuntosContato, unidadesFederativas } from '@/data';

const formSchema = z.object({
  nome: z
    .string()
    .min(1, 'O nome precisa ser preenchido.')
    .max(128, 'O nome não pode possuir mais de 128 caracteres.'),
  empresa: z
    .string()
    .min(1, 'A empresa precisa ser preenchida.')
    .min(4, 'A empresa precisa ter pelo menos 4 caracteres.')
    .max(128, 'A empresa não pode possuir mais de 128 caracteres.'),
  email: z
    .string()
    .check(
      z.minLength(1, { message: 'O email precisa ser preenchido.' }),
      z.email({ message: 'Endereco de email inválido.' }),
    ),
  whatsapp: z
    .string()
    .min(1, { message: 'Número do WhatsApp é obrigatório.' })
    .refine((val) => isPhone(val), { message: 'Número inválido' }),
  municipio: z.string().optional(),
  uf: z.string().optional(),
  assunto: z.string().min(1, 'É necessário informar o assunto.'),
  mensagem: z
    .string()
    .min(5, 'O comentário não pode possuir menos do que 5 caracteres.')
    .or(z.literal('')),
});

export function FormularioContato() {
  const searchParams = useSearchParams();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const assunto = searchParams.get('assunto') || '';

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      assunto:
        assunto !== ''
          ? assuntosContato.find((a) => a.slug === assunto)?.slug || ''
          : '',
    },
  });

  async function formSubmit(data: FormData) {
    try {
      const token = recaptchaRef.current
        ? await recaptchaRef.current.execute()
        : null;

      await axios.post('/api/contato', { ...data, token });

      Swal.fire({
        icon: 'success',
        title: 'Mensagem enviada com sucesso!',
        html: 'Agradecemos a sua mensagem. Em breve, um de nossos especialistas entrará em contato com vocês.',
        confirmButtonText: 'Fechar',
        confirmButtonColor: '#fe5314',
      }).then(() => {
        reset();
      });
    } catch (err) {
      console.error(err);
      if (isAxiosError(err)) {
        const response = err.response;
        const json = await response?.data;

        console.error('root.serverError', { message: json.message });

        if (response?.status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Não foi possível enviar a mensagem',
            html: json.message,
            confirmButtonText: 'Fechar',
            confirmButtonColor: '#fe5314',
          });
        }

        return;
      }

      Swal.fire({
        icon: 'error',
        title: 'Pronto',
        html: `Enviamos para o endereço de e-mail informado um link
              para a realização do teste, com mais intruções a seguir.`,
        confirmButtonText: 'Fechar',
        confirmButtonColor: '#fe5314',
      });
    }
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-slate-100 p-8">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="relative flex w-full flex-col gap-4"
      >
        <fieldset className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <Input
              type="text"
              placeholder="Seu nome"
              registration={register('nome')}
              error={errors.nome?.message}
            />
          </div>

          <div className="col-span-12">
            <Input
              type="text"
              placeholder="Sua empresa"
              registration={register('empresa')}
              error={errors.empresa?.message}
            />
          </div>

          <div className="col-span-12 md:col-span-7 lg:col-span-6 xl:col-span-7">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              registration={register('email')}
              error={errors.email?.message}
            />
          </div>

          <div className="col-span-12 md:col-span-5 lg:col-span-6 xl:col-span-5">
            <Input
              type="text"
              placeholder="Whatsapp"
              registration={register('whatsapp')}
              error={errors.whatsapp?.message}
            />
          </div>

          <div className="col-span-12 md:col-span-7 lg:col-span-6 xl:col-span-7">
            <Input
              type="text"
              placeholder="Cidade"
              registration={register('municipio')}
              error={errors.municipio?.message}
            />
          </div>

          <div className="col-span-12 md:col-span-5 lg:col-span-6 xl:col-span-5">
            <Select
              registration={register('uf')}
              error={errors.uf?.message}
              placeholder="Estado"
              options={unidadesFederativas.map(({ sigla, nome }) => ({
                value: sigla,
                label: nome,
              }))}
            />
          </div>

          <div className="col-span-12">
            <Select
              registration={register('assunto')}
              error={errors.assunto?.message}
              placeholder="Assunto"
              options={assuntosContato.map(({ slug, descricao }) => ({
                value: slug,
                label: descricao,
              }))}
            />
          </div>

          <div className="col-span-12">
            <Textarea
              registration={register('mensagem')}
              error={errors.mensagem?.message}
              placeholder="Mensagem (opcional)"
              rows={3}
            />
          </div>

          <div className="col-span-12">
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            />
          </div>
        </fieldset>
        <fieldset>
          <Button
            type="submit"
            variant="primary"
            className="px-8"
            isLoading={isSubmitting}
          >
            Enviar
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
