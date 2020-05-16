import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { ErrorHandlerService } from "src/app/core/error-handler.service";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {

  usuario: string;
  senha: string;
  authenticated: boolean;

  constructor(
    public auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.auth.authenticated.subscribe( authenticated => {
      this.authenticated = authenticated;
    });
    this.auth.authenticated.next(this.authenticated);
    if (this.authenticated === null) {
      this.authenticated = false;
      this.auth.authenticated.next(this.authenticated);
    }
  }


  logar(usuario , senha) {

    this.auth.login(usuario , senha).subscribe(
      (response: any) => {
        this.auth.armazenarToken(response.access_token);
        this.auth.authenticated.next(true);
        this.router.navigate(["/dashboard"]);
      },
      (error: any) => {
        this.auth.authenticated.next(false);
        if (error.status === 400) {
          if (error.error.error === "invalid_grant") {
            return this.errorHandler.handle("Usuário ou Senha inválida!");
          }
        }
        return this.errorHandler.handle(error);
      }
    );
  }

}
