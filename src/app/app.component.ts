import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "algamoney-ui";

  constructor(
    private toastyService: ToastrService,
    private router: Router
    ) { }

  exibirMenuNavbar() {
    return this.router.url !== "/login";
  }

}
