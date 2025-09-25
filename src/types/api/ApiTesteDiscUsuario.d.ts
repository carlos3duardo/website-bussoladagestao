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

type ResultadoPerfilProps = {
  id: number;
  nome: string;
  descricao: string;
  cor: string;
  pontos: number;
  proporcao: number;
};

type ResultadoProps = {
  disc: ResultadoPerfilProps[];
  analise: {
    perfil: string;
    resumo: string;
    descricao: string;
    adjetivos: string[];
    comportamentos: string[];
    forcas: string[];
    fraquezas: string[];
    animadores: string[];
    desanimadores: string[];
    adequacao: string;
  };
};

export interface ApiTesteDiscUsuario {
  id: string;
  nome: string;
  email: string;
  whatsapp: string | null;
  cargo: string;
  conclusao: string | null;
  inscricao: InscricaoProps;
  questoes: number;
  respostas: number;
  progresso: number;
  perfil: PerfilProps | null;
  resultado: ResultadoProps;
}
