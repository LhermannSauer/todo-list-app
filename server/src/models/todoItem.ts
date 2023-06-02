enum Priority {
  Low,
  Medium,
  High,
  Critical,
}

export class TodoItem {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  dateDue?: Date;
  dateCreated: Date;
  isResolved: boolean;
}
