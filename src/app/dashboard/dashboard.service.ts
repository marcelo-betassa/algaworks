import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class DashboardService {

  lancamentosURL: string;

  lancamento: any[];

  res: Promise<any[]>;

  constructor( private http: HttpClient) {
    this.lancamentosURL = `${environment.apiURL}/lancamentos`;
   }

  lancamentosPorCategoria(): Promise<Array<any[]>> {
    return this.http.get(`${this.lancamentosURL}/estatisticas/por-categoria`)
      .toPromise()
      .then((response: any) => response as Array<any>);
  }

  lancamentosPorDia(): Observable<any[]> {
    return this.http.get<any[]>(`${this.lancamentosURL}/estatisticas/por-dia`);

  }

  private converterStringParaDatas( dados: Array<any>) {
    for (const dado of dados) {
      dado.dia = moment(dado.dia , "YYYY-MM-DD").toDate();
    }
  }

}
