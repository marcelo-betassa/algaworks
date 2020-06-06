import { Pessoa, Contato } from "./../../core/model";
import { Component, OnInit } from "@angular/core";
import { PessoaService } from "../pessoa.service";
import { ToastyService } from "ng2-toasty";
import { ErrorHandlerService } from "src/app/core/error-handler.service";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-pessoa-cadastro",
  templateUrl: "./pessoa-cadastro.component.html",
  styleUrls: ["./pessoa-cadastro.component.css"]
})
export class PessoaCadastroComponent implements OnInit {

  cep: any;
  pessoa = new Pessoa();
  contato: Contato;
  estadoSelecionado: number;
  estados: any[];
  cidades: any[];

  constructor(
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
   // this.title.setTitle("Nova Pessoa");
    const codigoPessoa = this.route.snapshot.params.codigo;
    if (codigoPessoa) {
      this.carregarPessoaPorCodigo(codigoPessoa);
    }
    this.carregarEstados();
  }

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizaPessoa(form);
    } else {
      this.adicionarPessoa(form);
    }
  }

  adicionarPessoa( form: NgForm) {
    this.pessoaService.adicionarPessoa(this.pessoa).subscribe(
      (response: any) => {
        this.toasty.success("Pessoa cadastrada com sucesso!");
        // form.reset();
        // this.pessoa = new Pessoa();
        this.router.navigate(["/pessoas", response.codigo]);
      },
      (error: any) => {
        this.errorHandler.handle(error);
      }
    );
  }

  atualizaPessoa(form: NgForm) {
    this.pessoaService.atualizaPessoa(this.pessoa).subscribe(
      (response: any) => {
        this.pessoa = response;
        this.atualizaTitle();
        this.toasty.success("Pessoa atualizada com sucesso!");
      },
      (error: any) => {
        this.errorHandler.handle(error);
      }
    );
  }

  cepIsNotZero() {
    if (this.pessoa.endereco.cep === "00000-000" || this.pessoa.endereco.cep === "") {
      return true;
    }
    return false;
  }

  carregarPessoaPorCodigo(codigo: number) {
    this.pessoaService.buscarPessoaPorCodigo(codigo).subscribe(
      (response: any) => {
        this.pessoa = response;
        this.atualizaTitle();
      },
      (error: any) => {
        this.errorHandler.handle(error);
      }
    );
  }

  novaPessoa( form: NgForm) {
    form.reset();
    this.router.navigate(["pessoas/nova"]);

  }

  atualizaTitle() {
    this.title.setTitle(`Editando Pessoa: ${this.pessoa.nome}`);
  }

  get editando() {
    return Boolean(this.pessoa.codigo);
  }

  carregarEstados() {
    this.pessoaService.listarEstados().subscribe(
      (response: any) => {
        this.estados = response.map( uf => ({ label: uf.nome, value: uf.codigo}));
      },
      (error: any) => {
        this.errorHandler.handle(error);
      }
    );
  }

  carregarCidades() {
    this.pessoaService.pesquisarCidades(this.estadoSelecionado).subscribe(
      (response: any) => {
        this.cidades = response.map( c => ({ label: c.nome, value: c.codigo}));
      },
      (error: any) => {
        this.errorHandler.handle(error);
      }
    );

  }

}
