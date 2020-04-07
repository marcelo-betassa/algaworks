import { Observable } from "rxjs";
import { PessoaService } from "./pessoas/pessoa.service";
import { LancamentoService } from "./lancamentos/lancamento.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { LancamentosModule } from "./lancamentos/lancamentos.module";
import { PessoasModule } from "./pessoas/pessoas.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { ToastyModule } from "ng2-toasty";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    PessoasModule,
    LancamentosModule,
    SharedModule,
    ToastyModule.forRoot()
  ],

  providers: [
    LancamentoService,
    PessoaService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
