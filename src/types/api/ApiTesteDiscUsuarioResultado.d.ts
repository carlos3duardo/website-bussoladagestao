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
}
