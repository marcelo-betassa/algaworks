import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-nao-autorizado",
  template: `
    <div class="container">
      <h1 class="text-center">Acesso Negado!</h1>
      <div class="text-center">
        <button (click)="goBack()"><i class="pi pi-arrow-left"></i> Voltar</button>
      </div>
    </div>
  `,
  styles: [
  ],
})
export class NaoAutorizadoComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {

  }

  goBack() {
    this.location.back();
  }

}
