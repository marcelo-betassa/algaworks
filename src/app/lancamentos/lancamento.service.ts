import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { LancamentoFiltro } from "./lancamento-filtro";

@Injectable({
  providedIn: "root"
})
export class LancamentoService {

  lancamentoURL = "http://localhost:8080/lancamentos";

  constructor( private httpClient: HttpClient) { }

  pesquisar(filtro: LancamentoFiltro ) {
    let params = new HttpParams();
    const headers = new HttpHeaders().append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
    console.log("# filtro ", filtro);
    if (filtro.descricao) {
      console.log("# passou aqui ");
      params = params.set("descricao" , filtro.descricao);
    }
    return this.httpClient.get(`${this.lancamentoURL}?resumo`, { headers, params });
  }
}
