import { ApiTesteDiscUsuario } from './ApiTesteDiscUsuario';

export interface ApiTesteDiscUsuarioResultado extends ApiTesteDiscUsuario {
  perfil: {
    id: number;
    nome: string;
    descricao: string;
    cor: string;
    caracteristicas: string;
  } | null;
  resultado: {
    disc: PerfilDisc[];
  };
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
  } | null;
}

type PerfilDisc = {
  id: number;
  nome: string;
  descricao: string;
  cor: string;
  pontos: number;
  proporcao: number;
};
