import { Component, OnInit } from "@angular/core";
import { CategoriaService } from "src/app/categorias/categoria.service";
import { ErrorHandlerService } from "src/app/core/error-handler.service";
import { PessoaService } from "src/app/pessoas/pessoa.service";
import { Lancamento } from "src/app/core/model";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { LancamentoService } from "../lancamento.service";
import { ToastyService } from "ng2-toasty";
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";



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
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder
  ) { }

  vencimento: any;
  valor: any;
  pessoas: any = [];
  categorias: any = [];
  categoria: string;
  // lancamento = new Lancamento();
  formulario: FormGroup;

  tipos: any = [
    { label: "Receita", value: "RECEITA" },
    { label: "Despesa", value: "DESPESA" }
  ];

  ngOnInit(): void {
    this.title.setTitle("Novo Lançamento");
    this.criarForm();
    const codigoLancamento = this.route.snapshot.params.codigo;
    if (codigoLancamento) {
      this.carregarLancamentoPorCodigo(codigoLancamento);
    }
    this.carregarPessoas();
    this.carregarCategorias();
  }

  criarForm() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      tipoLancamento: ["RECEITA", Validators.required],
      dataVencimento: [null , Validators.required],
      dataPagamento: [],
      descricao: [null, [this.validarObrigatoriedade, this.validarTamanhoMinimo(5)]],
      valor: [null, Validators.required],
      pessoa: this.formBuilder.group({
        codigo: [null, Validators.required],
        nome: []
      }),
      categoria: this.formBuilder.group({
        codigo: [null, Validators.required],
        nome: []
      }),
      observacao: []

    });
  }

  validarObrigatoriedade(input: FormControl) {
    return input.value ? null : { obrigatoriedade: true };
  }

  validarTamanhoMinimo( valor: number) {
    return (input: FormControl) => {
      return (!input.value || input.value.length >= valor) ? null : {tamanhoMinimo: { tamanho: valor}};
    };
  }

  carregarLancamentoPorCodigo(codigo: number) {
    this.lancamentoService.buscarPorCodigo(codigo)
    .then( (response: any) => {
        this.formulario.patchValue(response);
        this.atualizaTitle();
      }).catch((error: any) => {
        this.errorHandler.handle(error);
      });
  }

  salvarLancamento() {
    if (this.editando) {
      this.atualizarLancamento();
    } else {
      this.adicionarLancamento();
    }
  }

  adicionarLancamento() {
    this.lancamentoService.adicionarLancamento(this.formulario.value).subscribe(
      (response: any) => {
        console.log(this.formulario.value);
        this.toasty.success("Lancamento adicionado com sucesso!");
        this.router.navigate(["/lancamentos", response.codigo]);
        // form.reset();
        // this.lancamento = new Lancamento();
        // this.lancamento.tipoLancamento = "RECEITA";

      },
      (error: any) => {
        console.log(this.formulario.value);
        console.log("# error 1" , error);
        this.errorHandler.handle(error);
      }

    );
  }

  atualizarLancamento() {
    this.lancamentoService.atualizarLancamento(this.formulario.value).subscribe(
      (response: any) => {
        this.formulario.patchValue(response);
        this.atualizaTitle();
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
    return Boolean(this.formulario.get("codigo").value);
  }

  novo() {
    this.formulario.reset(new Lancamento());
    this.router.navigate(["/lancamentos/novo"]);
  }

  atualizaTitle() {
    this.title.setTitle(`Edição de Lançamento: ${this.formulario.get("descricao").value}`);
  }

}
