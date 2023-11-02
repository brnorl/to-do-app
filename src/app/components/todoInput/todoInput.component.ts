import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'todoInput',
  templateUrl: './todoInput.component.html',
  styleUrls: ['./todoInput.component.css'],
})
export class TodoInputComponent {
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() placeHolder: string;

  constructor() {}
}
