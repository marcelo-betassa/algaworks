import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { ErrorHandlerService } from "src/app/core/error-handler.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {

  usuario: string;
  senha: string;
  constructor(
    public auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
    ) { }


  ngOnInit(): void {

  }


  logar(usuario , senha) {
    // this.usuario = form.control.value["usuario"];
    // this.senha = form.control.value["senha"];
    // console.log(this.usuario, this.senha);
    this.auth.login(usuario , senha).subscribe(
      (response: any) => {
        console.log("Response...", response);
        this.auth.armazenarToken(response.access_token);
        this.router.navigate(["/lancamentos"]);
      },
      (error: any) => {

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
