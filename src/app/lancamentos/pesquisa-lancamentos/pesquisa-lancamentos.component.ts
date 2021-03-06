import { LancamentoFiltro } from "./../lancamento-filtro";
import { LancamentoService } from "./../lancamento.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { LazyLoadEvent, ConfirmationService } from "primeng/api";
import { Table } from "primeng/table/table";
import { ErrorHandlerService } from "src/app/core/error-handler.service";
import { Title } from "@angular/platform-browser";
import { AuthService } from "src/app/seguranca/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-pesquisa-lancamentos",
  templateUrl: "./pesquisa-lancamentos.component.html",
  styleUrls: ["./pesquisa-lancamentos.component.css"]
})
export class PesquisaLancamentosComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];

  @ViewChild("tabela", { static: true})
  tabela: Table;

  constructor(
    private lancamentoService: LancamentoService,
    private toasty: ToastrService,
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    public auth: AuthService,
    private title: Title
     ) { }

  ngOnInit(): void {
    this.title.setTitle("Pesquisa de Lançamentos");
  }

  pesquisar( pagina = 0 ) {
    this.filtro.pagina = pagina;
    this.lancamentoService.pesquisar( this.filtro ).subscribe(
      (response: any) => {
        const lancamentos = response.content;
        const result = {
          lancamentos,
          total: response.totalElements
        };
        this.totalRegistros = result.total;
        this.lancamentos = result.lancamentos;
      },
      (error: any) => {
       this.errorHandler.handle(error);

      }
    );
  }

  confirmarExclusao(lancamento: any) {
    this.confirmationService.confirm({
      message: "Tem certeza que deseja excluir este lançamento?",
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento).subscribe(
      (request: any) => {
        if (this.tabela.first === 0) {
          this.pesquisar();
        } else {
          this.tabela.reset();
        }
        this.toasty.success(`Lançamento ${lancamento} excluido com sucesso!` );
      },
      (error: any) => {
        this.errorHandler.handle(error);
      }
    );


  }


  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
