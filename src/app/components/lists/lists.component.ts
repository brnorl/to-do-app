import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { SearchParams } from 'src/app/interfaces/searchParams';
import { StatusEnum } from 'src/app/interfaces/status.enum';
import { TodoItem } from 'src/app/interfaces/todoItem';
import { ModalService } from 'src/app/services/modal.service';
import { State } from '../../store/app.reducer';
import { Observable } from 'rxjs';
import { selectItems } from 'src/app/store/app.selectors';
import { deleteItem, updateItem } from 'src/app/store/app.actions';

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
  data: Array<Object> = [];
  animationPC = true;
  colorSchemePC = 'vivid';
  labelsPC = true;
  doughnut = true;
  searchForm: FormGroup;
  itemList$: Observable<TodoItem[]>;

  constructor(
    public modalService: ModalService,
    private fb: FormBuilder,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.loadItems();
    this.searchFormInit();
  }

  loadItems() {
    this.store.pipe(select(selectItems)).subscribe((res) => {
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
      this.loadChartData(res.length);
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
    this.store.dispatch(deleteItem({ id: item.id }));
    this.loadItems();
  }

  drop(event: any, status: StatusEnum) {
    let movedItem = event.previousContainer.data[event.previousIndex];
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

      //because of you cannot modify an object that is stored in the state
      this.store.dispatch(
        updateItem({
          item: {
            id: movedItem.id,
            status: status,
            dueDate: movedItem.dueDate,
            content: movedItem.content,
            title: movedItem.title,
          },
        })
      );
    }
  }

  loadChartData(totalData: number) {
    this.data = [
      {
        name: 'To Do',
        value: ((this.todo.length / totalData) * 100).toFixed(1),
      },
      {
        name: 'In Progress',
        value: ((this.progress.length / totalData) * 100).toFixed(1),
      },
      {
        name: 'Done',
        value: ((this.done.length / totalData) * 100).toFixed(1),
      },
    ];
  }

  percentageFormatter(data: any): string {
    return data.value + '%';
  }

  searchFormInit() {
    this.searchForm = this.fb.group({
      title: [null],
      content: [null],
      dueDate: [null],
    });
    this.searchForm.valueChanges.subscribe((res) => {
      this.searchItem(res);
    });
  }
  searchItem(searchParams: SearchParams) {
    this.todo = this.todo?.filter(
      (x) =>
        x?.title?.toLowerCase().includes(searchParams.title?.toLowerCase()) ||
        x?.content
          .toLowerCase()
          .includes(searchParams.content?.toLowerCase()) ||
        x?.dueDate == searchParams?.dueDate
    );
    this.progress = this.progress?.filter(
      (x) =>
        x?.title?.toLowerCase().includes(searchParams.title?.toLowerCase()) ||
        x?.content
          .toLowerCase()
          .includes(searchParams.content?.toLowerCase()) ||
        x?.dueDate == searchParams?.dueDate
    );
    this.done = this.done?.filter(
      (x) =>
        x?.title?.toLowerCase().includes(searchParams.title?.toLowerCase()) ||
        x?.content
          .toLowerCase()
          .includes(searchParams.content?.toLowerCase()) ||
        x?.dueDate == searchParams?.dueDate
    );
    this.loadChartData(
      this.todo.length + this.progress.length + this.done.length
    );
  }

  clearForm() {
    this.searchForm.reset();
    this.loadItems();
  }

  calculateRemainingDay(item: TodoItem) {
    let remainingDays = item.dueDate.getDate() - new Date().getDate();
    return remainingDays;
  }
}
