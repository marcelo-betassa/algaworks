import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { LancamentosGridComponent } from "./lancamentos-grid/lancamentos-grid.component";
import { PesquisaLancamentosComponent } from "./pesquisa-lancamentos/pesquisa-lancamentos.component";
import { LancamentoCadastroComponent } from "./lancamento-cadastro/lancamento-cadastro.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { SelectButtonModule } from "primeng/selectbutton";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputMaskModule } from "primeng/inputmask";
import { SharedModule } from "../shared/shared.module";
import { NgxCurrencyModule } from "ngx-currency";
import { LancamentosRoutingModule } from "./lancamentos-routing.module";


export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: false,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "",
  suffix: "",
  thousands: ".",
  nullable: true
};

@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentosGridComponent,
    PesquisaLancamentosComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LancamentosRoutingModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ],
  exports: []

})
export class LancamentosModule { }
