import { StatusEnum } from './status.enum';

export class TodoItem {
  id: number;
  title: string;
  content: string;
  status: StatusEnum;
  dueDate: Date;
  /**
   *
   */
  constructor(
    id: number,
    title: string,
    content: string,
    status: StatusEnum,
    dueDate: Date
  ) {
    id = this.id;
    title = this.title;
    content = this.content;
    status = this.status;
    dueDate = this.dueDate;
  }
}
