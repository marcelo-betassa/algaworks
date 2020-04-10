import { ConfirmDialogModule } from "primeng/confirmdialog";
import { Observable } from "rxjs";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/NavbarComponent";
import { ErrorHandlerService } from "./error-handler.service";
import { ToastyModule } from "ng2-toasty";
import { LancamentoService } from "../lancamentos/lancamento.service";
import { PessoaService } from "../pessoas/pessoa.service";
import { ConfirmationService } from "primeng/api";

registerLocaleData(localePt);

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ToastyModule.forRoot(),
  ],
  exports: [
    NavbarComponent,
    ConfirmDialogModule,
    ToastyModule
  ],
  providers: [
    ErrorHandlerService,
    LancamentoService,
    PessoaService,
    ConfirmationService,
    { provide: LOCALE_ID , useValue: "pt-BR"}
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CoreModule { }
