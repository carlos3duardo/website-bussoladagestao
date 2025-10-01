export interface ApiTesteDiscUsuarioTableRowProps {
  id: string;
  nome: string;
  email: string;
  whatsapp: string | null;
  cargo: string;
  conclusao: string | null;
  questoes: number;
  respostas: number;
  perfil: {
    id: number;
    nome: string;
    cor: string;
  } | null;
  created_at: string;
}
