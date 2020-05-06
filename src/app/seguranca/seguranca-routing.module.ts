import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RouterModule, Routes } from "@angular/router";
import { AnonymousGuard } from "./anonymous.guard";

const routes: Routes = [
  { path: "login", component: LoginFormComponent, canActivate: [AnonymousGuard]}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [AnonymousGuard]
})
export class SegurancaRoutingModule { }
