import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CategoriaService {

  categoriasURL = "http://localhost:8080/categorias";

  constructor(private http: HttpClient) { }

  listarCategorias() {
    const headers = new HttpHeaders().append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
    return this.http.get(`${this.categoriasURL}`, { headers });
  }

}
