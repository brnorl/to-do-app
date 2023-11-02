import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'todoCalendar',
  templateUrl: './todoCalendar.component.html',
  styleUrls: ['./todoCalendar.component.css']
})
export class TodoCalendarComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() placeHolder: string = "Due Date";
  constructor() { }

  ngOnInit() {
  }

}
