import { PessoaService } from "./../pessoa.service";
import { PessoaFiltro } from "./../pessoa-filtro";
import { Component, OnInit, ViewChild } from "@angular/core";
import { LazyLoadEvent, ConfirmationService } from "primeng/api";
import { Table } from "primeng/table/table";
import { ToastyService } from "ng2-toasty";
import { ErrorHandlerService } from "src/app/core/error-handler.service";
import { Title } from "@angular/platform-browser";


@Component({
  selector: "app-pesquisa-pessoas",
  templateUrl: "./pesquisa-pessoas.component.html",
  styleUrls: ["./pesquisa-pessoas.component.css"]
})
export class PesquisaPessoasComponent implements OnInit {

  totalRegistros = 0;
  pFiltro = new PessoaFiltro();
  pessoas = [];
  @ViewChild("tabela", { static: true})
  tabela: Table;

  constructor(
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private title: Title
    ) {}

  ngOnInit() {
    this.title.setTitle("Pesquisa de pessoas");
  }

  pesquisarPessoa(pagina = 0) {
    this.pFiltro.pagina = pagina;
    this.pessoaService.pesquisaPessoa(this.pFiltro).subscribe(
      (response: any) => {
        const pessoas = response.content;
        const result = {
          pessoas ,
          total: response.totalElements
        };
        this.totalRegistros = result.total;
        this.pessoas = result.pessoas;
      },
      (error: any) => {
        this.errorHandler.handle(error);
      }
    );
  }

  listarPessoas() {
    this.pessoaService.listarPessoas().subscribe(
      (response: any) => {
        this.pessoas = response.content;
      },
      (error: any) => {
        this.errorHandler.handle(error);
      }
    );
  }

  confirmarExclusao(pessoa: any) {
    this.confirmationService.confirm({
      message: "Tem certeza que deseja excluir esta pessoa?",
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  excluir(pessoa: any) {
    this.pessoaService.excluirPessoa(pessoa).subscribe(
      (request: any) => {
        if (this.tabela.first === 0) {
          this.pesquisarPessoa();
        } else {
          this.tabela.reset();
        }
        this.toasty.success(`Pessoa de codigo ${pessoa} excluida com sucesso!`);
      },
      (error: any) => {
        this.errorHandler.handle(error);
      }
    );
  }

  mudarStatus(pessoa: any, status: boolean) {
    const novoStatus = !status;
    this.pessoaService.mudarStatus(pessoa, novoStatus).subscribe(
      (response: any) => {
        const acao = novoStatus ? "ativada" : "inativada";
        // pessoa.ativo = novoStatus;
        if (this.tabela.first === 0) {
          this.pesquisarPessoa();
        } else {
          this.tabela.reset();
        }
        this.pesquisarPessoa();
        this.toasty.success(`Alterado Status para ${acao} com sucesso!`);
      },
      (error: any) => {
        this.errorHandler.handle(error);
      }
    );
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisarPessoa(pagina);
  }

}
