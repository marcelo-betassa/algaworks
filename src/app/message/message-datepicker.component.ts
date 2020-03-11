import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: "app-message-datepicker",
  template: `
  <div *ngIf="isVazio()" class="ui-messages ui-messages-error ui-corner-all">
     <p>{{ text }}</p>
   </div>
 `,
 styles: [
   `
     .ui-messages-error {
       margin: 0;
       margin-top: 6px;
     }
   `
 ]
})

export class MessageDatepickerComponent {

  @Input()
  error: string;

  @Input()
  control: FormControl;

  @Input()
  text: string;

  isVazio() {
    return this.control.hasError(this.error) && this.control.dirty;
  }


}
