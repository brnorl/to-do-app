import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalData } from 'src/app/interfaces/modalData';
import { ModalService } from 'src/app/services/modal.service';
import { ToDoService } from 'src/app/services/to-do.service';

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
    private todoService: ToDoService,
    private modalService: ModalService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    console.log('this.data: ', this.data);
    this.updateFormInit();
  }

  updateItem() {
    const value = this.updateForm.getRawValue();
    this.todoService.updateItem(value).subscribe((res) => {
      this.modalService.close();
    });
  }

  updateFormInit(){
    this.updateForm = this.fb.group({
      title: [this.data.title, [Validators.required]],
      content: [this.data.content],
      status: [this.data.status],
      id:[this.data.id],
      dueDate : new FormControl(new Date(this.data.dueDate)) 
    });
  }
}
