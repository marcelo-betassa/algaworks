import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { LancamentoFiltro } from "./lancamento-filtro";
import * as moment from "moment";
import { Lancamento } from "../core/model";
import { Observable } from "rxjs";

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

  adicionarLancamento(lancamento: Lancamento): Observable<any> {
    const headers = new HttpHeaders({Authorization: "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==", "Content-Type": "application/json" });
    return this.http.post(`${this.lancamentoURL}`, JSON.stringify(lancamento), { headers });

  }

  atualizarLancamento(lancamento: Lancamento): Observable<any> {
    const headers = new HttpHeaders({Authorization: "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==", "Content-Type": "application/json" });
    return this.http.put(`${this.lancamentoURL}/${lancamento.codigo}`, JSON.stringify(lancamento), { headers });

  }

  buscarPorCodigo(codigo: number): Promise<any> {
    const headers = new HttpHeaders().append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
    return this.http.get(`${this.lancamentoURL}/${codigo}`, { headers })
    .toPromise()
    .then(
      (response: any) => {
        console.log(response);
        const lancamento = response as Lancamento;
        return lancamento;
      }
    );
  }

  excluir(codigo: number) {
    const headers = new HttpHeaders().append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
    return this.http.delete(`${this.lancamentoURL}/${codigo}`, { headers });

  }

}
