export interface ApiTesteDiscInscricao {
  id: string;
  usuario: string;
  empresa: {
    id: string | null;
    nome: string;
  };
  cargo: string;
  email: string;
  whatsapp: string | null;
  municipio: string;
  uf: string;
  url_questionario: string;
  modelo: {
    id: number;
    nome: string;
    descricao: string;
  } | null;
  usuarios: number;
  validade: string;
  chave: string;
}
