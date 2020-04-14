export class Pessoa {
  codigo: number;
  nome: string;
  ativo = true;
  endereco = new Endereco();

}

export class Endereco {
  logradouro: string;
  numero: number;
  complemento: string;
  cep: string;
  bairro: string;
  cidade: string;
  estado: string;
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
