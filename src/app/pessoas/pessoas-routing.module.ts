import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule, Routes } from "@angular/router";
import { PessoaCadastroComponent } from "./pessoa-cadastro/pessoa-cadastro.component";
import { PesquisaPessoasComponent } from "./pesquisa-pessoas/pesquisa-pessoas.component";
import { AuthGuard } from "../seguranca/auth.guard";



const routes: Routes = [
  {
    path: "pessoas",
    component: PesquisaPessoasComponent,
    canActivate: [AuthGuard],
    data: { roles: ["ROLE_PESQUISAR_PESSOA"] },
  },
  {
    path: "pessoas/nova",
    component: PessoaCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ["ROLE_CADASTRAR_PESSOA"] },
  },
  {
    path: "pessoas/:codigo",
    component: PessoaCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ["ROLE_CADASTRAR_PESSOA"] },
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PessoasRoutingModule { }
