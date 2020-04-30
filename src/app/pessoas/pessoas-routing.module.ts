import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule, Routes } from "@angular/router";
import { PessoaCadastroComponent } from "./pessoa-cadastro/pessoa-cadastro.component";
import { PesquisaPessoasComponent } from "./pesquisa-pessoas/pesquisa-pessoas.component";

const routes: Routes = [
  { path: "pessoas", component: PesquisaPessoasComponent },
  { path: "pessoas/nova", component: PessoaCadastroComponent },
  { path: "pessoas/:codigo", component: PessoaCadastroComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PessoasRoutingModule { }
