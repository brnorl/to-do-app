import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { StatusEnum } from 'src/app/interfaces/status.enum';
import { TodoItem } from 'src/app/interfaces/todoItem';
import { ModalService } from 'src/app/services/modal.service';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  todo: Array<TodoItem> = [];
  progress: Array<TodoItem> = [];
  done: Array<TodoItem> = [];
  dialogRef: any;

  constructor(
    public modalService: ModalService,
    private todoService: ToDoService
  ) {}

  ngOnInit() {
    this.loadItems();

  }

  loadItems() {
    this.todoService.getTodoItems().subscribe((res) => {
      this.todo = [];
      this.progress = [];
      this.done = [];
      res.map((x) => {
        if (x.status == StatusEnum.Todo) {
          this.todo.push(x);
        } else if (x.status == StatusEnum.InProgress) {
          this.progress.push(x);
        } else {
          this.done.push(x);
        }
      });
    });
  }

  openDetailsDialog(item: TodoItem) {
    this.dialogRef = this.modalService.openDetailDialog(item);
  }

  openCreateDialog() {
    this.dialogRef = this.modalService.openCreateDialog();

    this.dialogRef.afterClosed().subscribe(() => this.loadItems());
  }
  
  openUpdateDialog(item: TodoItem) {
    this.dialogRef = this.modalService.openUpdateDialog(item);
    
    this.dialogRef.afterClosed().subscribe(() => this.loadItems());
  }
  
  deleteItem(item: TodoItem) {
    this.todoService.deleteTodoItem(item.id).subscribe((res) => {
      this.loadItems();
    });
  }

  drop(event: any, status: StatusEnum) {
    let movedItem = event.previousContainer.data[event.previousIndex]
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      movedItem.status = status;
      this.todoService.updateItem(movedItem).subscribe(res => {
        this.loadItems();
      });
  
    }
  }
}
