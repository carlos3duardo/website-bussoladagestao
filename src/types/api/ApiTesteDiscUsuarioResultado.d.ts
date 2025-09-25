type PerfilDisc = {
  id: number;
  nome: string;
  descricao: string;
  cor: string;
  pontos: number;
  proporcao: number;
};

export interface ApiTesteDiscUsuarioResultado {
  disc: PerfilDisc[];
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
}
