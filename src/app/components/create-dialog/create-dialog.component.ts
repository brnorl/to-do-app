import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalService } from 'src/app/services/modal.service';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css'],
})
export class CreateDialogComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private todoService: ToDoService,
    private modalService: ModalService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createFormInit();
  }

  createItem() {
    const value = this.createForm.getRawValue();
    this.todoService.addNewItem(value).subscribe((res) => {
      this.modalService.close();
    });
  }

  createFormInit(){
    this.createForm = this.fb.group({
      title: [null, [Validators.required]],
      content: [null],
      status: [1],
      dueDate : [null]
    });
  }
}
