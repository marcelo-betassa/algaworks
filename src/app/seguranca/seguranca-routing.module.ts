import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RouterModule, Routes } from "@angular/router";
import { CanDeactivateGuard } from './can-deactivate-guard';

const routes: Routes = [
  { path: "login", component: LoginFormComponent, canDeactivate: [CanDeactivateGuard] }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SegurancaRoutingModule { }
