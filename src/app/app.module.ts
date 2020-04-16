import { Observable } from "rxjs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { LancamentosModule } from "./lancamentos/lancamentos.module";
import { PessoasModule } from "./pessoas/pessoas.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { Routes, RouterModule } from "@angular/router";
import { PesquisaLancamentosComponent } from "./lancamentos/pesquisa-lancamentos/pesquisa-lancamentos.component";
import { LancamentoCadastroComponent } from "./lancamentos/lancamento-cadastro/lancamento-cadastro.component";
import { PesquisaPessoasComponent } from "./pessoas/pesquisa-pessoas/pesquisa-pessoas.component";
import { PessoaCadastroComponent } from "./pessoas/pessoa-cadastro/pessoa-cadastro.component";


const routes: Routes = [
  { path: "lancamentos", component: PesquisaLancamentosComponent },
  { path: "lancamentos/novo", component: LancamentoCadastroComponent },
  { path: "lancamentos/:codigo", component: LancamentoCadastroComponent },
  { path: "pessoas", component: PesquisaPessoasComponent },
  { path: "pessoas/nova", component: PessoaCadastroComponent },
];

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
    CoreModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
