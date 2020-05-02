import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  oauthTokenURL = "http://localhost:8080/oauth/token";
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
    ) {
      this.carregarToken();
     }

  login(usuario: string , senha: string): Observable<any> {

    const headers = new HttpHeaders({Authorization: "Basic YW5ndWxhcjpAbmd1bEByMA==", "Content-Type": "application/x-www-form-urlencoded"});
    const body = `username=${usuario}&password=${senha}&grant_type=password`;
    return this.http.post(this.oauthTokenURL, body, { headers });
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

}
