import { StatusEnum } from './status.enum';

export class ModalData {
  title: string = '';
  content: string = '';
  id: number = 0;
  status: StatusEnum;
  dueDate: Date;
  constructor(data?: any) {
    if (data) {
      this.title = data.title;
      this.content = data.content;
      this.id = data.id;
      this.status = data.status;
      this.dueDate = data.dueDate;
    }
  }
}
