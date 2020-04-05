import { PessoaFiltro } from "./pessoa-filtro";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PessoaService {

  pessoaURL = "http://localhost:8080/pessoas";

  constructor(private http: HttpClient) { }

 pesquisaPessoa( pFiltro: PessoaFiltro ) {

  let params = new HttpParams();
  const headers = new HttpHeaders().append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
  params = params.set("page", pFiltro.pagina.toString());
  params = params.set("size", pFiltro.itensPorPagina.toString());

  if (pFiltro.nome) {
    params = params.set("nome", pFiltro.nome);
  }

  return this.http.get(`${this.pessoaURL}`, {headers , params});
 }

 listarPessoas() {
  const headers = new HttpHeaders().append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
  return this.http.get(`${this.pessoaURL}` , {headers});
 }

}
