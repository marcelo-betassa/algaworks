import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { PesquisaLancamentosComponent } from './pesquisa-lancamentos/pesquisa-lancamentos.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';



const routes: Routes = [
  { path: "lancamentos", component: PesquisaLancamentosComponent },
  { path: "lancamentos/novo", component: LancamentoCadastroComponent },
  { path: "lancamentos/:codigo", component: LancamentoCadastroComponent }
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
