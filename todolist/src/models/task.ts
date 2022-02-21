export enum TaskStatus {
  Active,
  Finished,
}

export enum TaskPriority {
  High,
  Medium,
  Low,
}

export class Task {
  constructor(
    public id: string,
    public description: string,
    public status: TaskStatus,
    public priority?: TaskPriority
  ) {}
}
