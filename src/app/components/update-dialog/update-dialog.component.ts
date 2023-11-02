import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ModalData } from 'src/app/interfaces/modalData';
import { ModalService } from 'src/app/services/modal.service';
import { updateItem } from 'src/app/store/app.actions';
import { State } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css'],
})
export class UpdateDialogComponent implements OnInit {
  updateForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ModalData,
    private modalService: ModalService,
    private fb: FormBuilder,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.updateFormInit();
  }

  updateItem() {
    this.updateForm.value['dueDate'] = new Date(this.updateForm.value['dueDate']);
    this.store.dispatch(updateItem({ item: this.updateForm.value }));
    this.modalService.close();
  }

  updateFormInit() {
    this.updateForm = this.fb.group({
      title: [this.data.title, [Validators.required]],
      content: [this.data.content],
      status: [this.data.status],
      id: [this.data.id],
      dueDate: new FormControl(new Date(this.data.dueDate)),
    });
  }
}
