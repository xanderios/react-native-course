export type TodoItem = {
  title: string;
  description?: string;
  createdAt: Date;
  completedAt?: Date;
  complete?: boolean;
  id: number;
};
