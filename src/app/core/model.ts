export class Pessoa {
  codigo: number;

}

export class Endereco {
  logradouro: string;
  numero: number;
  complemento: string;
  cep: number;
  bairro: string;
  cidade: string;
  estado: string;
}

export class Categoria {
  codigo: number;
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
