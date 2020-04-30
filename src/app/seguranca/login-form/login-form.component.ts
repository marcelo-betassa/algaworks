import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {

  usuario: string;
  senha: string;
  constructor() { }

  ngOnInit(): void {
  }


  logar( form: NgForm) {
    console.log(form.control.value);
  }

}
