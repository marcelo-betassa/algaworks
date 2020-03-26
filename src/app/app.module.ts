import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./core/navbar/navbar.component";
import { FormsModule } from "@angular/forms";
import { LancamentosModule } from "./lancamentos/lancamentos.module";
import { PessoasModule } from "./pessoas/pessoas.module";
import { NgxCurrencyModule } from "ngx-currency";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from './core/core.module';



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
    SharedModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
