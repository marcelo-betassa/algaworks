import { Component, OnInit } from "@angular/core";
import { CategoriaService } from "src/app/categorias/categoria.service";
import { ErrorHandlerService } from "src/app/core/error-handler.service";
import { PessoaService } from "src/app/pessoas/pessoa.service";
import { Lancamento } from "src/app/core/model";
import { FormControl, NgForm } from "@angular/forms";
import { LancamentoService } from "../lancamento.service";
import { ToastyService } from "ng2-toasty";
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: "app-lancamento-cadastro",
  templateUrl: "./lancamento-cadastro.component.html",
  styleUrls: ["./lancamento-cadastro.component.css"]
})
export class LancamentoCadastroComponent implements OnInit {

  constructor(
    private categoriaService: CategoriaService,
    private errorHandler: ErrorHandlerService,
    private lancamentoService: LancamentoService,
    private toasty: ToastyService,
    private pessoaService: PessoaService,
    private route: ActivatedRoute
  ) { }

  vencimento: any;
  valor: any;
  pessoas: any = [];
  categorias: any = [];
  categoria: string;
  lancamento = new Lancamento();

  tipos: any = [
    { label: "Receita", value: "RECEITA" },
    { label: "Despesa", value: "DESPESA" }
  ];

  ngOnInit(): void {
    const codigoLancamento = this.route.snapshot.params.codigo;
    if (codigoLancamento) {
      this.carregarLancamentoPorCodigo(codigoLancamento);
    }
    this.carregarPessoas();
    this.carregarCategorias();
  }

  carregarLancamentoPorCodigo(codigo: number) {
    this.lancamentoService.buscarPorCodigo(codigo)
    .then( (response: any) => {
        this.lancamento = response;
      }).catch((error: any) => {
        this.errorHandler.handle(error);
      });
  }

  salvarLancamento(form: NgForm) {
    if (this.editando) {
      this.atualizarLancamento(form);
    } else {
      this.adicionarLancamento(form);
    }
  }

  adicionarLancamento( form: NgForm) {
    this.lancamentoService.adicionarLancamento(this.lancamento).subscribe(
      (response: any) => {
        console.log(response);
        this.toasty.success("Lancamento adicionado com sucesso!");
        form.reset();
        this.lancamento = new Lancamento();
        this.lancamento.tipoLancamento = "RECEITA";
      },
      (error: any) => {
        this.errorHandler.handle(error);
      }

    );
  }

  atualizarLancamento(form: NgForm) {
    this.lancamentoService.atualizarLancamento(this.lancamento).subscribe(
      (response: any) => {
        this.lancamento = response;
        this.toasty.success("Lançamento atualizado com sucesso!");
      },
      (error: any) => {
        this.errorHandler.handle(error);
      }
    );
  }

  validaDataVazia() {
    if (this.vencimento === "") {
      return false;
    }
    return true;
  }

  validaSeValorZero() {
    if (this.valor === "0,00" || this.valor === "" || this.valor === undefined) {
      return true;
    }
    console.log("com valor", this.valor);
    return false;
  }

  carregarCategorias() {
    this.categoriaService.listarCategorias().subscribe(
      (categoria: any) => {
        this.categorias = categoria.map( c => {
          return {label: c.nome, value: c.codigo};
        });
      },
      (error: any) => {
        this.errorHandler.handle(error);
      }
    );
  }

  carregarPessoas() {
    this.pessoaService.listarPessoas().subscribe(
      (pessoa: any) => {
        this.pessoas = pessoa.content.map( p => {
          return {label: p.nome, value: p.codigo};
        });
      },
      (error: any) => {
        this.errorHandler.handle(error);
      }
    );
  }

  get editando() {
    return Boolean(this.lancamento.codigo);
  }

}
