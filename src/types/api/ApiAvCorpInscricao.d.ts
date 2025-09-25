type AvaliacaoProps = {
  id: string;
  nome: string;
  autodiagnostico: boolean;
  conclusao: string | null;
  modelo: {
    id: string;
    nome: string;
    descricao: string;
  };
  created_at: string;
};

export interface ApiAvCorpInscricao {
  id: string;
  usuario: string;
  email: string;
  whatsapp: string | null;
  empresa: {
    id: string | null;
    nome: string;
    colaboradores: string | null;
    ramo_atividade: {
      id: string;
      nome: string;
    } | null;
  };
  municipio: string | null;
  uf: string | null;
  validade: string | null;
  modelo: {
    id: string;
    nome: string;
    descricao: string;
  } | null;
  ciclo: {
    id: string;
    nome: string;
    descricao: string;
  } | null;
  avaliacoes?: AvaliacaoProps[];
}
