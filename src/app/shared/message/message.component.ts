import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";


@Component({
  selector: "app-message",
  template: `
   <div *ngIf="temErro()" name="error" ngDefaultControl class="ui-messages ui-messages-error ui-corner-all">
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
export class MessageComponent {

  @Input()
  error: string;

  @Input()
  control: FormControl;

  @Input()
  text: string;

  temErro() {
    return this.control.hasError(this.error) && this.control.dirty;
  }


}
