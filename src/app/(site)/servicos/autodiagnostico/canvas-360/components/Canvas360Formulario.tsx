'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { isAxiosError } from 'axios';
import { isPhone } from 'brazilian-values';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import z from 'zod';

import { Input, Select } from '@/components/form';
import { Button, PageSection } from '@/components/ui';

const formSchema = z.object({
  usuario: z
    .string()
    .min(1, 'O nome precisa ser preenchido.')
    .min(8, 'O nome precisa ter pelo menos 8 caracteres.'),
  empresa: z
    .string()
    .min(1, 'A empresa precisa ser preenchida.')
    .min(4, 'A empresa precisa ter pelo menos 4 caracteres.'),
  colaboradores: z
    .string()
    .min(1, { message: 'Informe a quantidade de colaboradores.' }),
  area_atuacao: z
    .string()
    .min(1, 'A Área de Atuação precisa ser preenchida.')
    .min(12, 'A Área de Atuação precisa ter pelo menos 12 caracteres.'),
  email: z
    .string()
    .check(
      z.minLength(1, { message: 'O email precisa ser preenchido.' }),
      z.email({ message: 'Endereco de email inválido.' }),
    ),
  whatsapp: z
    .string()
    .min(1, { message: 'Número do WhatsApp precisa ser preenchido.' })
    .refine((val) => isPhone(val), { message: 'Número inválido' }),
  municipio: z.string().optional(),
  uf: z.string().optional(),
});

export function Canvas360Formulario() {
  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function formSubmit(data: FormData) {
    console.log(data);
    try {
      await axios.post('/api/canvas360', data);

      Swal.fire({
        icon: 'success',
        title: 'Pronto',
        html: `Enviamos para ${data.email} um link
            para a realização de sua avaliação.<br /><br />
            Não esquece de conferir sua caixa de spam!`,
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
    <PageSection.Root
      id="formulario"
      className="bg-primary-400 relative bg-[url(/images/bg-typing-keyboard.jpg)] bg-cover bg-center p-0"
    >
      <div className="bg-primary-400/40 absolute top-0 left-0 h-full w-full backdrop-blur-sm lg:hidden" />
      <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-0">
        <div className="relative px-4 pt-24 lg:bg-[url(/images/bg-typing-keyboard.jpg)] lg:bg-cover lg:bg-center lg:pb-24">
          <div className="bg-primary-700/40 absolute top-0 left-0 hidden h-full w-full backdrop-blur-sm lg:block" />
          <div className="bg-primary-400 absolute top-0 right-[-1px] hidden h-full w-[200px] [clip-path:polygon(100%_0,100%_100%,0_100%)] lg:block 2xl:w-[260px]" />
          <div className="relative mx-auto w-[80%] text-balance text-white lg:mx-0 lg:ml-auto lg:w-full lg:max-w-[40rem] lg:pr-[100px] xl:pr-[200px]">
            <PageSection.Headline className="text-center lg:text-left">
              Pronto para medir e acelerar seu crescimento?
            </PageSection.Headline>
            <PageSection.Description className="text-center lg:text-left">
              Responda agora e receba seu score por dimensão com sugestões de
              melhorias geradas por uma IA especializada.
            </PageSection.Description>
          </div>
        </div>
        <div className="lg:bg-primary-400 px-4 pb-24 lg:pt-24">
          <div className="bg-primary-100 lg:bg-primary-400 border-primary-300 rounded-lg border p-4 shadow md:mx-auto md:w-[80%] md:p-8 lg:mx-0 lg:mr-auto lg:w-full lg:max-w-[40rem] lg:border-0 lg:p-0 lg:shadow-none">
            <form
              onSubmit={handleSubmit(formSubmit)}
              className="relative flex w-full flex-col gap-4"
            >
              <fieldset className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    registration={register('usuario')}
                    error={errors.usuario?.message}
                    errorClassName="text-white"
                  />
                </div>

                <div className="col-span-12">
                  <Input
                    type="text"
                    placeholder="Sua empresa"
                    registration={register('empresa')}
                    error={errors.empresa?.message}
                    errorClassName="text-white"
                  />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-12 xl:col-span-6">
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    registration={register('email')}
                    error={errors.email?.message}
                    errorClassName="text-white"
                  />
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-12 xl:col-span-6">
                  <Input
                    type="text"
                    placeholder="Whatsapp"
                    registration={register('whatsapp')}
                    error={errors.whatsapp?.message}
                    errorClassName="text-white"
                  />
                </div>

                <div className="col-span-12 md:col-span-8 lg:col-span-12 xl:col-span-8">
                  <Input
                    type="text"
                    placeholder="Descreva sua área de atuação"
                    registration={register('area_atuacao')}
                    error={errors.area_atuacao?.message}
                    errorClassName="text-white"
                  />
                </div>

                <div className="col-span-12 md:col-span-4 lg:col-span-12 xl:col-span-4">
                  <Select
                    registration={register('colaboradores')}
                    error={errors.colaboradores?.message}
                    options={[
                      {
                        value: '1-19 colaboradores',
                        label: 'Até 19 colaboradores',
                      },
                      {
                        value: '20-99 colaboradores',
                        label: 'Entre 20 e 99 colaboradores',
                      },
                      {
                        value: '100-499 colaboradores',
                        label: 'Entre 100 e 499 colaboradores',
                      },
                      {
                        value: '500+ colaboradores',
                        label: 'Acima de 500 colaboradores',
                      },
                    ]}
                    errorClassName="text-white"
                    placeholder="Colaboradores"
                  />
                </div>

                <div className="col-span-12 md:col-span-8 lg:col-span-12 xl:col-span-8">
                  <Input
                    type="text"
                    placeholder="Cidade"
                    registration={register('municipio')}
                    error={errors.municipio?.message}
                  />
                </div>

                <div className="col-span-12 md:col-span-4 lg:col-span-12 xl:col-span-4">
                  <Select
                    registration={register('uf')}
                    error={errors.uf?.message}
                    placeholder="UF"
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
                </div>
              </fieldset>
              <fieldset>
                <Button
                  type="submit"
                  variant="secondary"
                  className="px-8"
                  isLoading={isSubmitting}
                >
                  Enviar
                </Button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </PageSection.Root>
  );
}
