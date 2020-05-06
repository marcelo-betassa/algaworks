import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { PaginaNaoEncontradaComponent } from "./core/pagina-nao-encontrada.component";
import { NaoAutorizadoComponent } from "./core/nao-autorizado.component";
import { LoginFormComponent } from "./seguranca/login-form/login-form.component";
import { AuthGuard } from "./seguranca/auth.guard";



const routes: Routes = [
 // { path: "", redirectTo: "lancamentos", pathMatch: "full" },
  { path: "", redirectTo: "login", pathMatch: "full" },
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
