import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { TodoItem } from '../interfaces/todoItem';

export const appFeatureKey = 'app';

export interface State {
  items: TodoItem[];
  selectedItem: any;

}

export const initialState: State = {
  items: [
    {
      "id": 1,
      "title": "Get To Work",
      "content": "Get To Work at 8AM",
      "status": 1,
      "dueDate": new Date(2023,10,5),
    },
    {
      "title": "Pick up groceries",
      "content": "Grocery List : Carrot , tomatoes , milk , bread , sugar",
      "status": 1,
      "id": 2,
      "dueDate": new Date(2023,10,5),
    },
    {
      "id": 3,
      "title": "Go home",
      "content": "Go home by 6 PM",
      "status": 1,
      "dueDate": new Date(2023,10,5),
    },
    {
      "id": 4,
      "title": "Fall asleep",
      "content": "Fall asleep at 9 PM",
      "status": 3,
      "dueDate": new Date(2023,10,5),
    },
    {
      "id": 5,
      "title": "Get up",
      "content": "Get up at 7 AM for work",
      "status": 3,
      "dueDate": new Date(2023,10,5),
    },
    {
      "id": 6,
      "title": "Brush teeth",
      "content": "Brush teeth",
      "status": 1,
      "dueDate": new Date(2023,10,5),
    },
    {
      "id": 7,
      "title": "Take a shower",
      "content": "Take a shower with hot water",
      "status": 2,
      "dueDate": new Date(2023,10,5),
    },
    {
      "id": 8,
      "title": "Check e-mail",
      "content": "Check personal e-mail at 8 AM",
      "status": 2,
      "dueDate": new Date(2023,10,5),
    },
    {
      "id": 9,
      "title": "Walk dog",
      "content": "Walk dog at 8.30 AM - get home by 9 AM",
      "status": 1,
      "dueDate": new Date(2023,10,5),
    },
    {
      "title": "test",
      "content": "test",
      "status": 1,
      "dueDate": new Date(2023,10,5),
      "id": 10
    },
    {
      "title": "test2",
      "content": "test2",
      "status": 1,
      "dueDate": new Date(2023,10,5),
      "id": 11
    },
    {
      "title": "test3",
      "content": "test3",
      "status": 3,
      "dueDate": new Date(2023,10,5),
      "id": 12
    },
    {
      "title": "test5",
      "content": "test5",
      "status": 3,
      "dueDate": new Date(2023,10,5),
      "id": 13
    },
    {
      "title": "test7",
      "content": "test7",
      "status": 3,
      "dueDate": new Date(2023,10,5),
      "id": 14
    },
    {
      "title": "test-8",
      "content": "test-8",
      "status": 1,
      "dueDate": new Date(2023,10,5),
      "id": 15
    },
    {
      "title": "test-9",
      "content": "test-9",
      "status": 1,
      "dueDate": new Date(2023,10,5),
      "id": 16
    },
    {
      "title": "test-11",
      "content": "test-11",
      "status": 3,
      "dueDate": new Date(2023,10,5),
      "id": 17
    },
    {
      "title": "test-12",
      "content": "test-12",
      "status": 3,
      "dueDate": new Date(2023,10,5),
      "id": 18
    },
    {
      "title": "baran",
      "content": "baran",
      "status": 3,
      "dueDate": new Date(2023,10,5),
      "id": 19
    }
  ],
  selectedItem: {
    id:0,
    title:"",
    content:"",
    status:1,
    dueDate:new Date()
  } 
};


export const itemReducer = createReducer(
  initialState,
  on(AppActions.loadItems, state => state),
  on(AppActions.addItem, (state, { item }) => {
    return {
      items: [...state.items, item],
      selectedItem: null
    }
  }),
  on(AppActions.selectItemById, (state, {itemId}) => {
    let sItem = null;
    state.items.forEach(value => {
      if( value.id == itemId ) {
        return sItem = value;
      }
      return null
    })
    return {
      ...state,
      selectedBook: sItem
    }
  }),
  on(AppActions.deleteItem, (state, {id}) => {
    return {
      items: state.items.filter(item => item.id != id),
      selectedItem: null
    }
  }),on(AppActions.updateItem, (state, { item }) => {
    const menuItemIndex = state.items.findIndex(
      (menuItem) => menuItem.id === item.id
    );
    const updatedMenuItems = [...state.items];
    updatedMenuItems[menuItemIndex] = item;
    return {
      items: updatedMenuItems,
      selectedItem: null
    }
  })

);