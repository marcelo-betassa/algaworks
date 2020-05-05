import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { PesquisaLancamentosComponent } from "./pesquisa-lancamentos/pesquisa-lancamentos.component";
import { LancamentoCadastroComponent } from "./lancamento-cadastro/lancamento-cadastro.component";
import { AuthGuard } from "../seguranca/auth.guard";



const routes: Routes = [
  {
    path: "lancamentos",
    component: PesquisaLancamentosComponent,
    canActivate: [AuthGuard],
    data: { roles: ["ROLE_PESQUISAR_LANCAMENTO"]}
  },
  {
    path: "lancamentos/novo",
    component: LancamentoCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ["ROLE_CADASTRAR_LANCAMENTO"]}
  },
  {
    path: "lancamentos/:codigo",
    component: LancamentoCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ["ROLE_CADASTRAR_LANCAMENTO"]}
  },
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LancamentosRoutingModule { }
