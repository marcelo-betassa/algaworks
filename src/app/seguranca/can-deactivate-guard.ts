import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<LoginFormComponent> {

  constructor(
    private auth: AuthService,
    private router: Router
    ) { }

  canDeactivate(
    component: LoginFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (!this.auth.isAccessTokenInvalido() && nextState.url ==="login") {
        console.log("### passou aqui Corrent", currentRoute);
        console.log("***************************************");
        console.log("### passou aqui Next", nextState);
        return false;

     }
    return true;
  }

}
