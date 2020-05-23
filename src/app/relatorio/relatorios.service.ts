import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class RelatoriosService {

  lancamentoURL: string;

  constructor(private http: HttpClient) {
    this.lancamentoURL = `${environment.apiURL}/lancamentos`;
   }

  relatorioLancamentosPorPessoa(dataInicio, dataFim ) {
    let params = new HttpParams();
    const headers = new HttpHeaders().append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
    params = params.set("inicio", moment(dataInicio, "DD/MM/YYYY").format("YYYY-MM-DD"));
    params = params.set("fim", moment(dataFim, "DD/MM/YYYY").format("YYYY-MM-DD"));
    return this.http.get(`${this.lancamentoURL}/relatorios/por-pessoa`, { headers, params , responseType: "blob"});

  }

}
