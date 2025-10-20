export interface ApiAvCorpAvaliacaoProps {
  id: string;
  nome: string;
  autodiagnostico: boolean;
  consenso: boolean;
  conclusao: string | null;
  modelo: ModeloProps;
  inscricao: InscricaoProps;
  empresa: EmpresaProps;
  resultado: ResultadoProps;
  analise: AnaliseProps | null;
  created_at: string;
}

type ModeloProps = {
  id: string;
  nome: string;
  descricao: string;
};

type InscricaoProps = {
  id: string;
  usuario: string;
  email: string;
  whatsapp: string;
  municipio: string | null;
  uf: string | null;
  validade: string;
};

type EmpresaProps = {
  id: string | null;
  nome: string;
};

type ResultadoProps = {
  blocos: BlocoProps[];
};

type BlocoProps = {
  id: string;
  nome: string;
  descricao: string;
  maximo: number;
  pontos: number;
  peso: number;
  maturidade: number;
  cor: string;
  icone: string;
  categorias: CategoriaProps[];
};

type CategoriaProps = {
  id: string;
  nome: string;
  maximo: number;
  pontos: number;
  peso: number;
  maturidade: number;
  questoes: QuestaoProps[];
};

type QuestaoProps = {
  id: string;
  nome: string;
  pontos: number;
  nota_maxima: number;
  maturidade: number;
  resposta: RespostaProps;
  comentarios: string[];
};

type RespostaProps = {
  id: string;
  nome: string;
  descricao: string;
  cor: string;
  peso: number;
};

type AnaliseProps = {
  feedback: string;
  categorias: {
    canais: string;
    'recursos-chave': string;
    'parceiros-chave': string;
    'atividades-chave': string;
    'fluxo-de-receitas': string;
    'contexto-do-negocio': string;
    'estrutura-de-custos': string;
    'segmento-de-clientes': string;
    'preservacao-e-manutencao': string;
    'proposta-de-valorproduto': string;
    'relacionamento-com-os-clientes': string;
  };
  'sugestao-bmc': {
    canais: string[];
    'atividades-chave': string[];
    'fontes-de-receita': string[];
    'proposta-de-valor': string[];
    'estrutura-de-custos': string[];
    'recursos-chave': string[];
    'parcerias-chave': string[];
    'segmento-de-clientes': string[];
    'relacionamento-com-os-clientes': string[];
  };
};
