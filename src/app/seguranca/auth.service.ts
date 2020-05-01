import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JwtHelper } from "angular2-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  oauthTokenURL = "http://localhost:8080/oauth/token";
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelper
    ) {
      this.carregarToken();
     }

  login(usuario: string , senha: string): void {

    const headers = new HttpHeaders({Authorization: "Basic YW5ndWxhcjpAbmd1bEByMA==", "Content-Type": "application/x-www-form-urlencoded"});
    const body = `username=${usuario}&password=${senha}&grant_type=password`;
    this.http.post(this.oauthTokenURL, body, { headers }).subscribe(
      (response: any) => {
        console.log("Response...", response);
        this.armazenarToken(response.access_token);
      },
      (error: any) => {
        console.log("# Erro: ", error);
      }
    );
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem("token" , token);
    // console.log(this.jwtPayload);
  }

  private carregarToken() {
    const token = localStorage.getItem("token");
    if (token) {
      this.armazenarToken(token);
    }
  }

}
