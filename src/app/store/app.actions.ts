import { createAction, props } from '@ngrx/store';
import { TodoItem } from '../interfaces/todoItem';

export const loadItems = createAction(
  '[Item] Load'
);

export const addItem = createAction(
  '[Item] Add',
  props<{item: TodoItem}>()
)

export const updateItem = createAction(
  '[Item] Update',
  props<{item: TodoItem}>()
)

export const deleteItem = createAction(
  '[Item] Delete',
  props<{id:number}>()
)
export const selectItemById = createAction(
  '[Item] Select Item',
  props<{itemId: number}>()
)