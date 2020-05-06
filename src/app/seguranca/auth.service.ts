import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  oauthTokenURL = "http://localhost:8080/oauth/token";
  tokensRevokeURL = "http://localhost:8080/tokens/revoke";
  jwtPayload: any;
  authenticated: BehaviorSubject<boolean> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
    ) {
      this.carregarToken();
     }

  login(usuario: string , senha: string): Observable<any> {

    const headers = new HttpHeaders({Authorization: "Basic YW5ndWxhcjpAbmd1bEByMA==", "Content-Type": "application/x-www-form-urlencoded"});
    const body = `username=${usuario}&password=${senha}&grant_type=password`;
    return this.http.post(this.oauthTokenURL, body, { headers , withCredentials: true });
  }

  temQualquerPermissao(roles) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }
    return false;
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  obterNovoAccessToken(): Promise<any> {
    const headers = new HttpHeaders({Authorization: "Basic YW5ndWxhcjpAbmd1bEByMA==", "Content-Type": "application/x-www-form-urlencoded"});
    const body = `grant_type=refresh_token`;
    return this.http.post(this.oauthTokenURL, body, { headers , withCredentials: true } )
    .toPromise()
    .then((response: any) => {
       this.armazenarToken(response.access_token);
       return Promise.resolve(null);
    })
    .catch((error: any) => {
      console.error("# Erro ao criar Novo AccessToken", error);
      return Promise.resolve(null);
    });
  }

  limparAccessToken() {
    localStorage.removeItem("token");
    this.jwtPayload = null;
    this.authenticated.next(false);
  }

  armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem("token" , token);
    // console.log(this.jwtPayload);
  }

  carregarToken() {
    const token = localStorage.getItem("token");
    if (token) {
      this.armazenarToken(token);
    }
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem("token");
    return !token || this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    return this.http.delete(this.tokensRevokeURL, { withCredentials: true});
  }

  isAuthenticated() {
    if (this.authenticated) {
      return true;
    } else {
      return false;
    }
  }

}
