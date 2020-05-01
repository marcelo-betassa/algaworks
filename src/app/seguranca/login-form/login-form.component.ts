import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {

  usuario: string;
  senha: string;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }


  logar(usuario , senha) {
    // this.usuario = form.control.value["usuario"];
    // this.senha = form.control.value["senha"];
    // console.log(this.usuario, this.senha);
    this.auth.login(usuario , senha);
  }

}
