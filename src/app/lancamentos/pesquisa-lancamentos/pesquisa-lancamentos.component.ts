import { LancamentoFiltro } from "./../lancamento-filtro";
import { LancamentoService } from "./../lancamento.service";
import { Component, OnInit } from "@angular/core";
import { LazyLoadEvent } from "primeng/api/public_api";

@Component({
  selector: "app-pesquisa-lancamentos",
  templateUrl: "./pesquisa-lancamentos.component.html",
  styleUrls: ["./pesquisa-lancamentos.component.css"]
})
export class PesquisaLancamentosComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];

  constructor( private lancamentoService: LancamentoService ) { }

  ngOnInit(): void {
    // this.pesquisar();
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
        console.log("# resultado...", result);
      },
      (error: any) => {
        console.log("erro: ", error.message);

      }
    );
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
