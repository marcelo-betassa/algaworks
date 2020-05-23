import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../dashboard.service";
import * as moment from "moment";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  pieChartData: any;
  lineChartData: any;
  options = {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const valor = dataset.data[tooltipItem.index];
          const label = dataset.label ? (dataset.label + ":") : "";

          return label + this.decimalPipe.transform( valor, "1.2-2");

        }
      }
    }
  };

  constructor(
    private decimalPipe: DecimalPipe,
    private dashService: DashboardService
    ) { }

  ngOnInit(): void {
    this.lancamentosPordia();
    this.configurarGraficoPizza();
  }

  configurarGraficoPizza() {
    this.dashService.lancamentosPorCategoria()
      .then((response: any) => {
        console.log("#GraficoPizza", response);
        this.pieChartData = {
          labels: response.map(dado => dado.categoria.nome),
          datasets: [
            {
              data: response.map(dado => dado.total),
              backgroundColor: ["#FF9900", "#109618", "#990099", "#3B3EAC", "#0099C6", "#DD4477", "#3366CC", "#DC3912"]
            }
          ]
        };

      }).catch(
        (error: any) => {
          console.log("#erro Pizza", error);
        }
      );
  }

  lancamentosPordia() {
    this.dashService.lancamentosPorDia().subscribe(
      (reesponse: any) => {
        console.log("Response Grafico: ", reesponse);
        this.converterStringParaDatas(reesponse);
        const diasDoMes = this.configurarDiasDoMes();
        const totaisReceitas = this.totaisPorCadaDiaMes(reesponse.filter(resp => resp.tipoLancamento === "RECEITA"), diasDoMes);
        const totaisDespesas = this.totaisPorCadaDiaMes(reesponse.filter(resp => resp.tipoLancamento === "DESPESA"), diasDoMes);
        this.lineChartData = {
          labels: diasDoMes,
          datasets: [
            {
              label: "Receitas",
              data: totaisReceitas,
              borderColor: "#3366CC"
            }, {
              label: "Despesas",
              data: totaisDespesas,
              borderColor: "#D62B00"
            }
          ]
        };
      },
      (error: any) => {
        console.log("erro # grafico", error);
      }
    );
  }

  private totaisPorCadaDiaMes(dados, diasDoMes) {
    const totais: number[] = [];
    for (const dia of diasDoMes) {
      let total = 0;
      for (const dado of dados) {
        if (dado.dia.getDate() === dia) {
          total = dado.total;

          break;
        }
      }
      totais.push(total);
    }
    return totais;
  }


  private configurarDiasDoMes() {
    const mesReferencia = new Date();
    mesReferencia.setMonth(mesReferencia.getMonth() + 1);
    mesReferencia.setDate(0);

    const quantidade = mesReferencia.getDate();

    const dias: number[] = [];

    for (let i = 1; i <= quantidade; i++) {
      dias.push(i);

    }

    return dias;

  }

  private converterStringParaDatas(dados: Array<any>) {
    for (const dado of dados) {
      dado.dia = moment(dado.dia, "YYYY-MM-DD").toDate();
      console.log("Dados# ", dado);
    }

  }
}
