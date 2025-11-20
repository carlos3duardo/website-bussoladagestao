export interface ApiTesteDiscUsuario {
  id: string;
  nome: string;
  email: string;
  whatsapp: string | null;
  cargo: string;
  conclusao: string | null;
  respostas: number;
  progresso: number;
  inscricao: {
    id: string;
    empresa: string;
    municipio: string;
    uf: string;
    usuario: string;
    cargo: string;
    validade: string;
    url: string;
    modelo: {
      id: number;
      nome: string;
      questoes: number;
    };
  };
}
