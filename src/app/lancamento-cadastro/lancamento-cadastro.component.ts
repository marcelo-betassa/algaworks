import { Component, OnInit } from "@angular/core";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-lancamento-cadastro",
  templateUrl: "./lancamento-cadastro.component.html",
  styleUrls: ["./lancamento-cadastro.component.css"]
})
export class LancamentoCadastroComponent implements OnInit {

  constructor() { }

  vencimento: any;
  valor: any;

  tipos: any = [
    {label: "Receita", value: "RECEITA"},
    {label: "Despesa", value: "DESPESA"}
  ];

  categorias: any = [
    {label: "Alimentação", value: 1},
    {label: "Transporte", value: 2}
  ];

  pessoas: any = [
    {label: "Marcelo Henrique Betassa", value: 1},
    {label: "Flávia Akemi Hino", value: 2},
    {label: "Alessandro Scarpin", value: 3}
  ];

  validaDataVazia() {
    if (this.vencimento === "") {
      return false;
    }
    return true;
  }

  validaSeValorZero() {
    if (this.valor === "0,00" || this.valor === "" || this.valor === undefined) {
      console.log("0,00 ou ' '");
      return true;
    }
    console.log("com valor" , this.valor);
    return false;
  }

  ngOnInit(): void {}

}
