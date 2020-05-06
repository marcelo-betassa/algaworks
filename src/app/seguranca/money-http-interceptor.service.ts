import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable, from } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { NotAuthenticatedError } from "./not-authenticated-error";

@Injectable({
  providedIn: "root"
})
export class MoneyHttpInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes("/oauth/token") && this.auth.isAccessTokenInvalido()) {
      return from(this.auth.obterNovoAccessToken())
        .pipe(
          mergeMap(() => {
            if (this.auth.isAccessTokenInvalido()) {
              throw new NotAuthenticatedError();
            }
            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            });
            console.log("obtendo token após token ter expirado", req);
            return next.handle(req);
          })

        );
    }
    console.log("token não expirado");
    return next.handle(req);
  }

}
