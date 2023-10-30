import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DetailDialogComponent} from '../components/detail-dialog/detail-dialog.component';
import { TodoItem } from '../interfaces/todoItem';
import { CreateDialogComponent } from '../components/create-dialog/create-dialog.component';
import { UpdateDialogComponent } from '../components/update-dialog/update-dialog.component';
import { ModalData } from '../interfaces/modalData';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  dialogRef: any;

  constructor(public dialog: MatDialog) {}

  openDetailDialog(item: TodoItem) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.dialogRef = this.dialog.open(DetailDialogComponent, {
      panelClass: 'app-dialog',
      data: new ModalData({
        title: item.title,
        content: item.content,
        id: item.id,
        status : item.status,
        dueDate : item.dueDate
      }),
    });

    return this.dialogRef;
  }

  openCreateDialog() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.dialogRef = this.dialog.open(CreateDialogComponent, {
      panelClass: 'app-dialog',
    });

    return this.dialogRef;
  }

  openUpdateDialog(item : TodoItem) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.dialogRef = this.dialog.open(UpdateDialogComponent, {
      panelClass: 'app-dialog',
      data: new ModalData({
        title: item.title,
        content: item.content,
        id: item.id,
        status : item.status,
        dueDate : item.dueDate
      }),
    });

    return this.dialogRef;
  }

  close() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
