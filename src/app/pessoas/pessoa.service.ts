import { Pessoa } from "./../core/model";
import { PessoaFiltro } from "./pessoa-filtro";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class PessoaService {

  pessoaURL: string;

  constructor(private http: HttpClient) {
    this.pessoaURL = `${environment.apiURL}/pessoas`;
   }

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

 adicionarPessoa(pessoa: Pessoa): Observable<any> {
  const headers = new HttpHeaders({Authorization: "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==", "Content-Type": "application/json" });
  return this.http.post(`${this.pessoaURL}`, JSON.stringify(pessoa), { headers });
 }

 atualizaPessoa(pessoa: Pessoa): Observable<any> {
  const headers = new HttpHeaders({Authorization: "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==", "Content-Type": "application/json" });
  return this.http.put(`${this.pessoaURL}/${pessoa.codigo}`, JSON.stringify(pessoa), { headers });
 }

 listarPessoas() {
  const headers = new HttpHeaders().append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
  return this.http.get(`${this.pessoaURL}` , {headers});
 }

 buscarPessoaPorCodigo(codigo: number): Observable<any> {
  const headers = new HttpHeaders().append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
  return this.http.get(`${this.pessoaURL}/${codigo}`, { headers });
 }

 excluirPessoa(codigo: number) {
  const headers = new HttpHeaders().append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
  return this.http.delete(`${this.pessoaURL}/${codigo}`, { headers });

 }

 mudarStatus( codigo: number , ativo: boolean) {
  const headers = new HttpHeaders({Authorization: "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==", "Content-Type": "application/json" });
  return this.http.put(`${this.pessoaURL}/${codigo}/ativo`, ativo, { headers });
 }

}
