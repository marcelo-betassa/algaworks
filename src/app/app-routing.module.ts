import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { PesquisaPessoasComponent } from "./pessoas/pesquisa-pessoas/pesquisa-pessoas.component";
import { PessoaCadastroComponent } from "./pessoas/pessoa-cadastro/pessoa-cadastro.component";
import { PaginaNaoEncontradaComponent } from "./core/pagina-nao-encontrada.component";





const routes: Routes = [
  { path: "", redirectTo: "lancamentos", pathMatch: "full" },
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
