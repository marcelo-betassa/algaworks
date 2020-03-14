import { FormsModule } from "@angular/forms";
import { MessageDatepickerComponent } from "./message/message-datepicker.component";
import { NgModule, LOCALE_ID } from "@angular/core";
import localePt from "@angular/common/locales/pt";
import { CommonModule, registerLocaleData } from "@angular/common";
import { CalendarComponent } from "./calendar/calendar.component";
import { MessageComponent } from "./message/message.component";
import { CalendarModule } from "primeng/calendar";



registerLocaleData(localePt);


@NgModule({
  declarations: [
    CalendarComponent,
    MessageComponent,
    MessageDatepickerComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule
  ],
  exports: [
    CalendarComponent,
    MessageComponent,
    MessageDatepickerComponent
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "pt-BR"}
  ]
})
export class SharedModule { }
