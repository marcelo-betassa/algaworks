import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class CategoriaService {

  categoriasURL: string;

  constructor(private http: HttpClient) {
    this.categoriasURL = `${environment.apiURL}/categorias`;
   }

  listarCategorias() {
    const headers = new HttpHeaders().append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
    return this.http.get(`${this.categoriasURL}`, { headers });
  }

}
