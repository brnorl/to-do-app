import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todoButton',
  templateUrl: './todoButton.component.html',
  styleUrls: ['./todoButton.component.css'],
})
export class TodoButtonComponent {
  @Input() color:
    | 'primary'
    | 'info'
    | 'icon-primary'
    | 'icon-secondary'
    | 'icon-warning' = 'primary';
  @Output() click = new EventEmitter();

  constructor() {}

  getButtonClass() {
    return this.color;
  }

  onClick(event: Event) {
    this.click.emit();
  }
}
