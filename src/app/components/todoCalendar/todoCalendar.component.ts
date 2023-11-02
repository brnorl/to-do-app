import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'todoCalendar',
  templateUrl: './todoCalendar.component.html',
  styleUrls: ['./todoCalendar.component.css'],
})
export class TodoCalendarComponent {
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() placeHolder: string = 'Due Date';
  constructor() {}
}
