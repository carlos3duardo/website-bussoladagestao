type ModeloProps = {
  id: string;
  nome: string;
  descricao: string;
};

type InscricaoProps = {
  id: string;
  empresa: {
    id: string | null;
    nome: string;
  };
  validade: string;
  modelo: ModeloProps | null;
};

type PerfilProps = {
  id: string;
  nome: string;
  descricao: string;
  cor: string;
};

export interface ApiTesteDiscUsuario {
  id: string;
  nome: string;
  email: string;
  whatsapp: string | null;
  cargo: string;
  conclusao: string | null;
  resultado: unknown;
  perfil: PerfilProps | null;
  inscricao: InscricaoProps;
  questoes: number;
  respostas: number;
  progresso: number;
}
