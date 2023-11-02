import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalData } from 'src/app/interfaces/modalData';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.css'],
})
export class DetailDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ModalData
  ) {}
}
