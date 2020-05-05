import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { PaginaNaoEncontradaComponent } from "./core/pagina-nao-encontrada.component";
import { NaoAutorizadoComponent } from "./core/nao-autorizado.component";
import { AuthGuard } from './seguranca/auth.guard';
import { CanDeactivateGuard } from './seguranca/can-deactivate-guard';





const routes: Routes = [
 // { path: "", redirectTo: "lancamentos", pathMatch: "full" },
  { path: "", redirectTo: "login", pathMatch: "full", canDeactivate: [CanDeactivateGuard] },
  { path: "pagina-nao-encontrada", component: PaginaNaoEncontradaComponent },
  { path: "nao-autorizado", component: NaoAutorizadoComponent },
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
