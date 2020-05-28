import { NgForm } from "@angular/forms";
import { Component, OnInit, Input } from "@angular/core";
import { Contato } from "src/app/core/model";

@Component({
  selector: "app-pessoa-cadastro-contato",
  templateUrl: "./pessoa-cadastro-contato.component.html",
  styleUrls: ["./pessoa-cadastro-contato.component.css"]
})
export class PessoaCadastroContatoComponent implements OnInit {

  @Input()
  contatos: Array<Contato>;
  contato: Contato;
  contatoIndice: number;
  showModal: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showModal = false;
  }

  clonarContato(contato: Contato): Contato {
    return new Contato( contato.codigo, contato.nome, contato.email, contato.telefone);
  }

  prepararNovoContato() {
    this.showModal = true;
    this.contato = new Contato();
    this.contatoIndice = this.contatos.length;
  }

  confirmarContato(formContato: NgForm) {
    this.contatos[this.contatoIndice] = this.clonarContato(this.contato);
    formContato.reset();
    this.showModal = false;
  }

  prepararEdicaoContato(contato: Contato, indice: number) {
    this.contato = this.clonarContato(contato);
    this.contatoIndice = indice;
    this.showModal = true;
  }

  removerContato( indice: number) {
    this.contatos.splice(indice, 1);
  }

  get editando() {
    return this.contato && this.contato.codigo;
  }

}
