'use client';
import React, { useState } from 'react';

type CompanyForm = {
  company: string;
  email: string;
  manager: string;
  business: string;
};

const DISC_PROFILES = [
  {
    name: 'Dominância (D)',
    desc: 'Foco em resultados, assertivo, gosta de desafios.',
    color: 'bg-red-100',
    icon: '🔥',
  },
  {
    name: 'Influência (I)',
    desc: 'Comunicativo, entusiasta, motiva e engaja pessoas.',
    color: 'bg-yellow-100',
    icon: '💬',
  },
  {
    name: 'Estabilidade (S)',
    desc: 'Colaborativo, paciente, valoriza a harmonia no ambiente.',
    color: 'bg-green-100',
    icon: '🌱',
  },
  {
    name: 'Conformidade (C)',
    desc: 'Analítico, detalhista, busca precisão e qualidade.',
    color: 'bg-blue-100',
    icon: '📊',
  },
];

const ADVANTAGES = [
  { icon: '🤝', text: 'Melhore a comunicação interna' },
  { icon: '🚀', text: 'Potencialize o trabalho em equipe' },
  { icon: '🌟', text: 'Identifique talentos e líderes' },
  { icon: '📈', text: 'Aumente a produtividade' },
];

export default function Home() {
  const [form, setForm] = useState<CompanyForm>({
    company: '',
    email: '',
    manager: '',
    business: '',
  });
  const [link, setLink] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simulação de geração de link
    setLink(
      `https://disc360.com/form?company=${encodeURIComponent(form.company)}`,
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-green-50">
      {/* Topo */}
      <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
        <div className="text-2xl font-bold text-blue-700">DISC360</div>
        <a
          href="#contato"
          className="font-medium text-blue-600 hover:underline"
        >
          Fale conosco
        </a>
      </header>

      {/* Hero */}
      <section className="px-4 py-12 text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-800 md:text-5xl">
          Avaliação DISC para Empresas e Indivíduos
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Descubra o potencial do seu time ou entenda melhor seu próprio perfil
          comportamental com o teste DISC. Resultados rápidos, relatórios
          completos e insights práticos para o desenvolvimento profissional.
        </p>
      </section>

      {/* Perfis DISC */}
      <section className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-4">
        {DISC_PROFILES.map((profile) => (
          <div
            key={profile.name}
            className={`rounded-xl p-6 shadow-sm ${profile.color} flex flex-col items-center`}
          >
            <div className="mb-2 text-4xl">{profile.icon}</div>
            <div className="mb-1 text-lg font-bold">{profile.name}</div>
            <div className="text-center text-sm text-gray-600">
              {profile.desc}
            </div>
          </div>
        ))}
      </section>

      {/* Vantagens */}
      <section className="bg-white px-4 py-8">
        <h2 className="mb-6 text-center text-2xl font-bold text-blue-700">
          Vantagens para sua empresa
        </h2>
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6">
          {ADVANTAGES.map((adv) => (
            <div
              key={adv.text}
              className="flex items-center gap-3 rounded-lg bg-blue-50 px-4 py-3 shadow-sm"
            >
              <span className="text-2xl">{adv.icon}</span>
              <span className="text-gray-700">{adv.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Formulário */}
      <section className="flex flex-col items-center justify-center gap-10 px-4 py-12 md:flex-row">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md flex-col gap-4 rounded-xl bg-white p-8 shadow-lg"
        >
          <h3 className="mb-2 text-xl font-bold text-blue-700">
            Para Empresas
          </h3>
          <input
            type="text"
            name="company"
            placeholder="Nome da empresa"
            value={form.company}
            onChange={handleChange}
            required
            className="rounded-md border px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            required
            className="rounded-md border px-3 py-2"
          />
          <input
            type="text"
            name="manager"
            placeholder="Nome do responsável"
            value={form.manager}
            onChange={handleChange}
            required
            className="rounded-md border px-3 py-2"
          />
          <input
            type="text"
            name="business"
            placeholder="Ramo de atividade"
            value={form.business}
            onChange={handleChange}
            required
            className="rounded-md border px-3 py-2"
          />
          <button
            type="submit"
            className="rounded-md bg-blue-600 py-2 font-bold text-white transition hover:bg-blue-700"
          >
            Gerar link para colaboradores
          </button>
          {link && (
            <div className="mt-2 text-sm break-all text-green-700">
              Link gerado:{' '}
              <a href={link} className="underline">
                {link}
              </a>
            </div>
          )}
          <p className="mt-2 text-xs text-gray-500">
            Após o preenchimento, você receberá um link exclusivo para
            compartilhar com sua equipe. Cada colaborador receberá seu relatório
            individual, e você terá acesso ao panorama completo do time.
          </p>
        </form>

        {/* Teste individual */}
        <div className="flex flex-col items-center">
          <h3 className="mb-2 text-lg font-bold text-blue-700">
            Para Indivíduos
          </h3>
          <a
            href="/teste-individual"
            className="rounded-md bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700"
          >
            Fazer teste individual
          </a>
        </div>
      </section>

      {/* Contato e rodapé */}
      <footer className="mt-auto bg-white py-6" id="contato">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              rel="noopener"
              className="text-2xl text-green-600"
            >
              📱
            </a>
            <a
              href="mailto:contato@disc360.com"
              className="text-2xl text-blue-600"
            >
              ✉️
            </a>
            <a href="#" className="text-2xl text-gray-600">
              💬
            </a>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 DISC360. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
