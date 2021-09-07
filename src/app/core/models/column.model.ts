import type { Task } from './task.model';

export interface Column {
  status: string;
  title: string;
  tasks: Task[];
}
