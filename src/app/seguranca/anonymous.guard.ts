import { AuthService } from "src/app/seguranca/auth.service";
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AnonymousGuard implements CanActivate {

  authenticated: boolean;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log("Can Activate isAuth ", this.auth.isAuthenticated());
    // console.log("Can Activate auth ", this.auth.authenticated);
    // console.log("Can Activate propertyAuth ", this.authenticated);
    // console.log("Can Activate next ", next.url[0].path);
    // console.log("Can Activate tokenValido ", !this.auth.isAccessTokenInvalido());

    if (!this.auth.isAccessTokenInvalido() && this.auth.isAuthenticated() && next.url[0].path === "login") {

      console.log("Chegou aqui ### redirecionando...");
      this.router.navigate(["/lancamentos"]);
    }
    return true;
  }

}
