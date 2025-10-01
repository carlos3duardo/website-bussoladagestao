type ModeloProps = {
  id: string;
  nome: string;
  descricao: string;
};

type OpcaoProps = {
  id: number;
  valor: string;
  descricao: string | null;
  perfil: {
    id: number;
    nome: string;
  };
  selecionado: boolean;
};

type RespostaProps = {
  id: number;
  valor: string;
  descricao: string | null;
  peso: number;
};

type QuestaoProps = {
  id: number;
  descricao: string;
  opcoes: OpcaoProps[];
  resposta: RespostaProps | RespostaProps[] | null;
};

export interface ApiTesteDiscUsuarioQuestionario {
  modelo: ModeloProps;
  questoes: QuestaoProps[];
}
