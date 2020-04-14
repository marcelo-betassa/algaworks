import { Pessoa } from "./../../core/model";
import { Component, OnInit } from "@angular/core";
import { PessoaService } from "../pessoa.service";
import { ToastyService } from "ng2-toasty";
import { ErrorHandlerService } from "src/app/core/error-handler.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-pessoa-cadastro",
  templateUrl: "./pessoa-cadastro.component.html",
  styleUrls: ["./pessoa-cadastro.component.css"]
})
export class PessoaCadastroComponent implements OnInit {

  cep: any;
  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
  }

  adicionarPessoa( form: NgForm) {
    this.pessoaService.adicionarPessoa(this.pessoa).subscribe(
      (response: any) => {
        console.log(response);
        this.toasty.success("Pessoa cadastrada com sucesso!");
        form.reset();
        this.pessoa = new Pessoa();
      },
      (error: any) => {
        this.errorHandler.handle(error);
      }
    );
  }

  cepIsNotZero() {
    if (this.pessoa.endereco.cep === "00000-000" || this.pessoa.endereco.cep === "") {
      return true;
    }
    return false;
  }

}
