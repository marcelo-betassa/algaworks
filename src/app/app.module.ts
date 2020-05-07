import { Observable } from "rxjs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { LancamentosModule } from "./lancamentos/lancamentos.module";
import { PessoasModule } from "./pessoas/pessoas.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";
import { SegurancaModule } from "./seguranca/seguranca.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtHttpInterceptor } from "./seguranca/jwt-http.interceptor";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    PessoasModule,
    LancamentosModule,
    SegurancaModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true}
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
