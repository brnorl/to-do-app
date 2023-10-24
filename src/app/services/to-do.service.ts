import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todoItem';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(private http: HttpClient) {}

  getTodoItems() {
    return this.http.get<TodoItem[]>('http://localhost:3000/todo');
  }

  getTodoItemByID(id: number) {
    return this.http.get<any>(`http://localhost:3000/todo/${id}`);
  }

  updateItem(item: TodoItem) {
    return this.http.put<any>(`http://localhost:3000/todo/${item.id}`, item);
  }

  deleteTodoItem(id: number) {
    return this.http.delete<any>(`http://localhost:3000/todo/${id}`);
  }

  addNewItem(item: TodoItem) {
    return this.http.post<any>('http://localhost:3000/todo', item);
  }
}
