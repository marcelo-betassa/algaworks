import { PanelModule } from "primeng/panel";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PesquisaPessoasComponent } from "./pesquisa-pessoas/pesquisa-pessoas.component";
import { PessoaCadastroComponent } from "./pessoa-cadastro/pessoa-cadastro.component";
import { PessoasGridComponent } from "./pessoas-grid/pessoas-grid.component";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { SelectButtonModule } from "primeng/selectbutton";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";
import { DialogModule } from "primeng/dialog";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputMaskModule } from "primeng/inputmask";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { PessoasRoutingModule } from "./pessoas-routing.module";





@NgModule({
  declarations: [
    PesquisaPessoasComponent,
    PessoaCadastroComponent,
    PessoasGridComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    RouterModule,
    TableModule,
    TooltipModule,
    PanelModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    PessoasRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: []
})
export class PessoasModule { }
