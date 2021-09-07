import { Columns } from './columns.model';

export interface Task
  extends Readonly<{
    title: string;
    description: string;
    status: Columns | string;
    id?: number;
  }> {}
