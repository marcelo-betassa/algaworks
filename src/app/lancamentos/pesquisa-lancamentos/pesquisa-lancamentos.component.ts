import { LancamentoFiltro } from "./../lancamento-filtro";
import { LancamentoService } from "./../lancamento.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { LazyLoadEvent } from "primeng/api/public_api";
import { Table } from "primeng/table/table";
import { ToastyService } from 'ng2-toasty';

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
    private toasty: ToastyService
     ) { }

  ngOnInit(): void {

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
        console.log("erro: ", error.message);

      }
    );
  }

  excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento).subscribe(
      (request: any) => {
        console.log(`Exclusão do lançamento ${lancamento} realizada com sucesso!`);
        if (this.tabela.first === 0) {
          this.pesquisar();
        } else {
          this.tabela.reset();
        }
        this.toasty.success(`Lançamento ${lancamento} excluido com sucesso!` );
      },
      (error: any) => {
        console.log("# erro... ", error);
      }
    );


  }


  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
