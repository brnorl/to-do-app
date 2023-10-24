import { StatusEnum } from './status.enum';

export interface TodoItem {
  id: number;
  title: string;
  content: string;
  status: StatusEnum;
}
