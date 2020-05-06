import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/seguranca/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {

  exibindoMenu: boolean;
  payload: any;
  constructor(
    public auth: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.payload = this.auth.jwtPayload;
    this.exibindoMenu = false;
  }

  novoAccessToken() {
    this.auth.obterNovoAccessToken();
  }

  logout() {
    this.auth.logout().subscribe(
      (response: any) => {
        this.auth.limparAccessToken();
        console.log("Excluido AccessToken com sucesso!", response);
        this.router.navigate(["/login"]);
      } ,
      (error: any) => {
        console.log("Erro ao limpar AccessToken!", error);
      }
    );
  }

}
