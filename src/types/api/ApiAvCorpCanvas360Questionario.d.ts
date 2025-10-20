export interface ApiAvCorpCanvas360Questionario {
  id: string;
  nome: string;
  inscricao: InscricaoProps | null;
  modelo: ModeloProps;
  blocos: BlocoProps[];
}

type InscricaoProps = {
  id: string;
  empresa: string;
  usuario: string;
  email: string;
};

type ModeloProps = {
  id: string;
  nome: string;
  descricao: string;
  opcoes: OpcaoProps[];
};

type OpcaoProps = {
  id: string;
  nome: string;
  descricao: string;
  peso: number;
  cor: string;
};

type BlocoProps = {
  id: string;
  nome: string;
  cor: string;
  icone: string;
  categorias: CategoriaProps[];
};

type CategoriaProps = {
  id: string;
  nome: string;
  questoes: QuestaoProps[];
};

type QuestaoProps = {
  id: string;
  nome: string;
  resposta_id: string | null;
  comentarios: ComentarioProps[];
};

type ComentarioProps = {
  id: string;
  comentario: string;
  tipo: {
    id: number;
    codigo: string;
    nome: string;
  };
  created_at: string;
};
