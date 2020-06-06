export class Pessoa {
  codigo: number;
  nome: string;
  ativo = true;
  endereco = new Endereco();
  contatos = new Array<Contato>();
}

export class Contato {
  codigo: number;
  nome: string;
  email: string;
  telefone: string;

  constructor( codigo?: number, nome?: string, email?: string, telefone?: string) {
    this.codigo = codigo;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }
}

export class Estado {
  codigo: number;
  nome: string;
}

export class Cidade {
  codigo: number;
  nome: string;
  estado = new Estado();
}

export class Endereco {
  logradouro: string;
  numero: number;
  complemento: string;
  cep: string;
  bairro: string;
  cidade = new Cidade();
}

export class Categoria {
  codigo: number;
  nome: string;
}

export class Lancamento {
  codigo: number;
  tipoLancamento = "RECEITA";
  descricao: string;
  dataVencimento: string;
  dataPagamento: string;
  valor: number;
  observacao: string;
  pessoa = new  Pessoa();
  categoria = new Categoria();
}

