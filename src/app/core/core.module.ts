import { ConfirmDialogModule } from "primeng/confirmdialog";
import { Observable } from "rxjs";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorHandlerService } from "./error-handler.service";
import { LancamentoService } from "../lancamentos/lancamento.service";
import { PessoaService } from "../pessoas/pessoa.service";
import { ConfirmationService } from "primeng/api";
import { RouterModule } from "@angular/router";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada.component";
import { Title } from "@angular/platform-browser";
import { NavbarComponent } from "./navbar/navbar.component";
import { AuthService } from "../seguranca/auth.service";
import { NaoAutorizadoComponent } from "./nao-autorizado.component";
import { DashboardService } from "../dashboard/dashboard.service";
import { RelatoriosService } from "../relatorio/relatorios.service";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

registerLocaleData(localePt);

@NgModule({
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent, NaoAutorizadoComponent],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() ,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ConfirmDialogModule,
    ToastrModule,
  ],
  providers: [
    ErrorHandlerService,
    LancamentoService,
    PessoaService,
    ConfirmationService,
    AuthService,
    DashboardService,
    RelatoriosService,
    Title,
    { provide: LOCALE_ID , useValue: "pt"}
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CoreModule { }
