import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LancamentosGridComponent } from "./lancamentos-grid/lancamentos-grid.component";
import { PesquisaLancamentosComponent } from "./pesquisa-lancamentos/pesquisa-lancamentos.component";
import { LancamentoCadastroComponent } from "./lancamento-cadastro/lancamento-cadastro.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { SelectButtonModule } from "primeng/selectbutton";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputMaskModule } from "primeng/inputmask";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentosGridComponent,
    PesquisaLancamentosComponent
  ],
  imports: [
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
    SharedModule
  ],
  exports: [
    LancamentoCadastroComponent,
    PesquisaLancamentosComponent
  ]

})
export class LancamentosModule { }
