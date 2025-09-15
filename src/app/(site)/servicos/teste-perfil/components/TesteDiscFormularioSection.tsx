'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { isAxiosError } from 'axios';
import { CircleCheck, CircleCheckBig } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { twMerge } from 'tailwind-merge';
import z from 'zod';

import { Input, Select } from '@/components/form';
import { HomeSection, PageSection } from '@/components/ui';

const formSchema = z.object({
  usuario: z
    .string()
    .min(1, 'O nome precisa ser preenchido.')
    .min(6, 'O nome precisa ter pelo menos 6 caracteres.'),
  empresa: z.string().optional(),
  cargo: z.string().optional(),
  email: z
    .string()
    .check(
      z.minLength(1, 'O email precisa ser preenchido.'),
      z.email('Endereco de email inválido.'),
    ),
  whatsapp: z.string().optional(),
  municipio: z.string().optional(),
  uf: z.string().optional(),
});

export function TesteDiscFormularioSection() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function formSubmit(data: FormData) {
    try {
      await axios.post('/api/disc', data);

      setShowSuccessMessage(true);

      reset();

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 1000 * 10);
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
    <HomeSection.Root className="text-darken bg-primary-100">
      <div className="relative mx-auto max-w-7xl px-4 2xl:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div
            data-slot="headline"
            className="flex flex-col gap-1 lg:col-span-5"
          >
            <PageSection.Headline className="text-center text-balance lg:text-left">
              <span className="text-primary-500">Faça agora</span> o teste DISC
              de sua equipe
            </PageSection.Headline>
            <PageSection.Description className="text-center text-balance lg:text-left">
              Descubra seu estilo comportamental e entenda como potencializar
              suas habilidades naturais no trabalho e na vida pessoal.
            </PageSection.Description>
            <ul
              data-slot="vantagens"
              className="mt-2 flex items-center justify-center gap-3 lg:justify-start"
            >
              <li className="flex items-center gap-2 text-sm font-medium">
                <CircleCheckBig
                  size={16}
                  strokeWidth={3}
                  className="text-primary-500"
                />
                É grátis
              </li>
              <li className="flex items-center gap-2 text-sm font-medium">
                <CircleCheckBig
                  size={16}
                  strokeWidth={3}
                  className="text-primary-500"
                />
                É simples
              </li>
            </ul>

            <p className="text-darken/70 mt-8 text-sm text-balance">
              Após o preenchimento, você receberá um link exclusivo para
              compartilhar com sua equipe. Cada colaborador receberá seu
              relatório individual, e você terá acesso ao panorama completo do
              time.
            </p>
          </div>

          <div data-slot="formulario" className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(formSubmit)}
              className="relative flex flex-col gap-4 overflow-hidden rounded-lg bg-white p-4 shadow lg:p-8 xl:p-12"
            >
              <div
                data-show={showSuccessMessage}
                className={twMerge(
                  'absolute top-0 left-0 flex h-full w-full -translate-y-full items-center justify-center bg-emerald-100 transition-transform duration-[500ms] ease-in-out',
                  'data-[show=true]:translate-y-0',
                )}
              >
                <div className="flex flex-col items-center gap-2 p-12">
                  <div>
                    <CircleCheck size={32} />
                  </div>
                  <h4 className="font-bold">
                    Recebemos sua requisição com sucesso!
                  </h4>
                  <p className="text-center text-balance">
                    Enviamos um link para que você possa acompnar a realização
                    dos testes DISC dos seus colaboradores.
                  </p>
                  <p className="text-center text-balance">
                    Verifique sua caixa de entrada. Não esqueça também de
                    verificar a caixa de spam.
                  </p>
                </div>
              </div>
              <fieldset className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    registration={register('usuario')}
                    error={errors.usuario?.message}
                  />
                </div>

                <Input
                  type="text"
                  placeholder="Sua empresa"
                  registration={register('empresa')}
                  error={errors.empresa?.message}
                />
                <Input
                  type="text"
                  placeholder="Seu cargo"
                  registration={register('cargo')}
                  error={errors.cargo?.message}
                />

                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  registration={register('email')}
                  error={errors.email?.message}
                />

                <Input
                  type="text"
                  placeholder="Whatsapp"
                  registration={register('whatsapp')}
                  error={errors.whatsapp?.message}
                />

                <Input
                  type="text"
                  placeholder="Cidade"
                  registration={register('municipio')}
                  error={errors.municipio?.message}
                />

                <Select
                  registration={register('uf')}
                  error={errors.uf?.message}
                  options={[
                    { value: 'AC', label: 'Acre' },
                    { value: 'AL', label: 'Alagoas' },
                    { value: 'AP', label: 'Amapá' },
                    { value: 'AM', label: 'Amazonas' },
                    { value: 'BA', label: 'Bahia' },
                    { value: 'CE', label: 'Ceará' },
                    { value: 'DF', label: 'Distrito Federal' },
                    { value: 'ES', label: 'Espírito Santo' },
                    { value: 'GO', label: 'Goiás' },
                    { value: 'MA', label: 'Maranhão' },
                    { value: 'MT', label: 'Mato Grosso' },
                    { value: 'MS', label: 'Mato Grosso do Sul' },
                    { value: 'MG', label: 'Minas Gerais' },
                    { value: 'PA', label: 'Pará' },
                    { value: 'PB', label: 'Paraíba' },
                    { value: 'PR', label: 'Paraná' },
                    { value: 'PE', label: 'Pernambuco' },
                    { value: 'PI', label: 'Piauí' },
                    { value: 'RJ', label: 'Rio de Janeiro' },
                    { value: 'RN', label: 'Rio Grande do Norte' },
                    { value: 'RS', label: 'Rio Grande do Sul' },
                    { value: 'RO', label: 'Rondônia' },
                    { value: 'RR', label: 'Roraima' },
                    { value: 'SC', label: 'Santa Catarina' },
                    { value: 'SP', label: 'São Paulo' },
                    { value: 'SE', label: 'Sergipe' },
                    { value: 'TO', label: 'Tocantins' },
                  ]}
                />
              </fieldset>

              <fieldset>
                <button
                  type="submit"
                  className={twMerge(
                    'bg-primary-500 hover:bg-primary-700 flex h-12 items-center rounded px-5 font-medium text-white hover:cursor-pointer',
                    'disabled:opacity-50',
                  )}
                  disabled={isSubmitting}
                >
                  Entrar
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </HomeSection.Root>
  );
}
