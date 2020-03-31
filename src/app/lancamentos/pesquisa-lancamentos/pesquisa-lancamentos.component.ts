import { LancamentoService } from "./../lancamento.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pesquisa-lancamentos",
  templateUrl: "./pesquisa-lancamentos.component.html",
  styleUrls: ["./pesquisa-lancamentos.component.css"]
})
export class PesquisaLancamentosComponent implements OnInit {

  descricao: string;
  lancamentos = [];

  constructor( private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.lancamentoService.pesquisar({ descricao: this.descricao }).subscribe(
      (lancamentos: any) => {
        this.lancamentos = lancamentos.content;
        console.log(lancamentos.content);
      }
    );
  }

}
