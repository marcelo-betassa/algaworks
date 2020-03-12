import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule , LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
import { NgxCurrencyModule } from "ngx-currency";

import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { SelectButtonModule } from "primeng/selectbutton";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputMaskModule } from "primeng/inputmask";


import { AppComponent } from "./app.component";
import { PesquisaLancamentosComponent } from "./pesquisa-lancamentos/pesquisa-lancamentos.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PesquisaPessoasComponent } from "./pesquisa-pessoas/pesquisa-pessoas.component";
import { LancamentoCadastroComponent } from "./lancamento-cadastro/lancamento-cadastro.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { PessoaCadastroComponent } from "./pessoa-cadastro/pessoa-cadastro.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MessageComponent } from "./message/message.component";
import { MessageDatepickerComponent } from "./message/message-datepicker.component";

registerLocaleData(localePt);

export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: false,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "",
  suffix: "",
  thousands: ".",
  nullable: true
};

@NgModule({
  declarations: [
    AppComponent,
    PesquisaLancamentosComponent,
    NavbarComponent,
    PesquisaPessoasComponent,
    LancamentoCadastroComponent,
    CalendarComponent,
    PessoaCadastroComponent,
    MessageComponent,
    MessageDatepickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "pt-BR"}
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
