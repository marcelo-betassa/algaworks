import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { PesquisaLancamentosComponent } from "./lancamentos/pesquisa-lancamentos/pesquisa-lancamentos.component";
import { LancamentoCadastroComponent } from "./lancamentos/lancamento-cadastro/lancamento-cadastro.component";
import { PesquisaPessoasComponent } from "./pessoas/pesquisa-pessoas/pesquisa-pessoas.component";
import { PessoaCadastroComponent } from "./pessoas/pessoa-cadastro/pessoa-cadastro.component";
import { PaginaNaoEncontradaComponent } from "./core/pagina-nao-encontrada.component";





const routes: Routes = [
  { path: "", redirectTo: "lancamentos", pathMatch: "full" },
  { path: "lancamentos", component: PesquisaLancamentosComponent },
  { path: "lancamentos/novo", component: LancamentoCadastroComponent },
  { path: "lancamentos/:codigo", component: LancamentoCadastroComponent },
  { path: "pessoas", component: PesquisaPessoasComponent },
  { path: "pessoas/nova", component: PessoaCadastroComponent },
  { path: "pagina-nao-encontrada", component: PaginaNaoEncontradaComponent },
  { path: "**", redirectTo: "pagina-nao-encontrada" }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
