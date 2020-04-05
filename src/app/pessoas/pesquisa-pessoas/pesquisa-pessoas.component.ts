import { PessoaService } from "./../pessoa.service";
import { PessoaFiltro } from "./../pessoa-filtro";
import { Component, OnInit } from "@angular/core";
import { LazyLoadEvent } from "primeng/api/public_api";

@Component({
  selector: "app-pesquisa-pessoas",
  templateUrl: "./pesquisa-pessoas.component.html",
  styleUrls: ["./pesquisa-pessoas.component.css"]
})
export class PesquisaPessoasComponent implements OnInit {

  totalRegistros = 0;
  pFiltro = new PessoaFiltro();
  pessoas = [];

  constructor( private pessoaService: PessoaService) {}

  ngOnInit() {
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
        console.log("# erro...", error);
      }
    );
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisarPessoa(pagina);
  }

}
