import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { PaginaNaoEncontradaComponent } from "./core/pagina-nao-encontrada.component";
import { NaoAutorizadoComponent } from "./core/nao-autorizado.component";
import { LoginFormComponent } from "./seguranca/login-form/login-form.component";




const routes: Routes = [
 // { path: "", redirectTo: "lancamentos", pathMatch: "full" },
  {path: "dashboard", loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule)},
  {path: "relatorios", loadChildren: () => import("./relatorio/relatorio.module").then(r => r.RelatorioModule)},


  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "login", component: LoginFormComponent},
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
  ],
  providers: [ ]
})
export class AppRoutingModule { }
