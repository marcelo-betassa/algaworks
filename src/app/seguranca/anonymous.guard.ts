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

    if (!this.auth.isAccessTokenInvalido() && this.auth.isAuthenticated() && next.url[0].path === "login") {
      this.router.navigate(["/lancamentos"]);
    }
    return true;
  }

}
