import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { LancamentoFiltro } from "./lancamento-filtro";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class LancamentoService {

  lancamentoURL = "http://localhost:8080/lancamentos";

  constructor( private http: HttpClient) { }

  pesquisar(filtro: LancamentoFiltro ) {
    let params = new HttpParams();
    const headers = new HttpHeaders().append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");

    params = params.set("page", filtro.pagina.toString());
    params = params.set("size", filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params = params.set("descricao" , filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      params = params.set("dataVencimentoDe", moment(filtro.dataVencimentoInicio).format("YYYY-MM-DD"));
    }

    if (filtro.dataVencimentoFim) {
      params = params.set("dataVencimentoAte", moment(filtro.dataVencimentoFim).format("YYYY-MM-DD"));
    }

    return this.http.get(`${this.lancamentoURL}?resumo`, { headers, params });
  }

  excluir(codigo: number) {
    const headers = new HttpHeaders().append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
    return this.http.delete(`${this.lancamentoURL}/${codigo}`, { headers });

  }

}
