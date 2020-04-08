import { FormsModule } from "@angular/forms";
import { MessageDatepickerComponent } from "./message/message-datepicker.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./calendar/calendar.component";
import { MessageComponent } from "./message/message.component";
import { CalendarModule } from "primeng/calendar";



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
  providers: []
})
export class SharedModule { }
