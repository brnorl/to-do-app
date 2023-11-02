import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'todoInput',
  templateUrl: './todoInput.component.html',
  styleUrls: ['./todoInput.component.css'],
})
export class TodoInputComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() placeHolder: string;

  constructor() {}

  ngOnInit() {}
}
