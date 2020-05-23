import { Component, OnInit } from "@angular/core";
import { RelatoriosService } from "../relatorios.service";

@Component({
  selector: "app-relatorio-lancamento",
  templateUrl: "./relatorio-lancamento.component.html",
  styleUrls: ["./relatorio-lancamento.component.css"]
})
export class RelatorioLancamentoComponent implements OnInit {

  dataInicio: string;
  dataFim: string;

  constructor(private relatorioService: RelatoriosService) { }

  ngOnInit(): void {
  }

  gerar() {
    console.log("Data inicio: ", this.dataInicio);
    console.log("Data fim: ", this.dataFim);

    this.relatorioService.relatorioLancamentosPorPessoa(this.dataInicio, this.dataFim).subscribe(
      (response: any) => {
        const url = window.URL.createObjectURL(response);
        console.log("Response relatorio: # ", response);
        window.open(url);
      },
      (error: any) => {
        console.log("# erro relatorio: ", error);
      }
    );

  }

}
