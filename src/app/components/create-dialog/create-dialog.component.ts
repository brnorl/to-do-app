import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ModalService } from 'src/app/services/modal.service';
import { addItem } from 'src/app/store/app.actions';
import { State } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css'],
})
export class CreateDialogComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private modalService: ModalService,
    private fb: FormBuilder,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.createFormInit();
  }

  createItem() {
    this.createForm.value['dueDate'] = new Date(this.createForm.value['dueDate']);
    this.store.dispatch(addItem({ item: this.createForm.value }));
    this.modalService.close();
  }

  createFormInit() {
    this.createForm = this.fb.group({
      title: [null, [Validators.required]],
      content: [null],
      status: [1],
      dueDate: [new Date()],
    });
  }
}
