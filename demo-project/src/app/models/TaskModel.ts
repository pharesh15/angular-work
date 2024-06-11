export interface ITask {
  id: number;
  user_id: number;
  title: string;
  summary: string;
  due_date: string;
}

export interface IAddTask {
  title: string;
  summary: string;
  due_date: string;
}
