import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalData } from 'src/app/interfaces/modalData';
import { ModalService } from 'src/app/services/modal.service';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.css'],
})
export class DetailDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ModalData,
  ) {}

  ngOnInit() {}

}
