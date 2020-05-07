import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class JwtHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem("token");

    if (token && request.url.indexOf("/oauth/token") === -1) {
      request = request.clone({
        setHeaders: {
          Accept: `application/json`,
          "Content-Type": `application/json`,
          Authorization: `Bearer ${token}`
        }
      });

    }
    return next.handle(request);

  }
}
