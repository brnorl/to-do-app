import { StatusEnum } from './status.enum';

export class TodoItem {
  id: number;
  title: string;
  content: string;
  status: StatusEnum;
  dueDate : Date;
}
