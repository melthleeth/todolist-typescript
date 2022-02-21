import { Task, TaskStatus, TaskPriority } from "../models/task";

type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

export class TaskState extends State<Task> {
  private tasks: Task[] = [];
  private static instance: TaskState;

  private constructor() {
    super();
  }

  static getInstance() {
    // singleton
    if (this.instance) return this.instance;
    this.instance = new TaskState();
    return this.instance;
  }

  addTask(description: string) {
    const newTask = new Task(
      Math.random().toString(),
      description,
      TaskStatus.Active,
      TaskPriority.Medium
    );
    this.tasks.push(newTask);
    this.updateListeners();
  }

  toggleTask(taskId: string, newStatus: TaskStatus) {
    const task = this.tasks.find((target) => target.id === taskId);
    if (task && task.status !== newStatus) {
      task.status = newStatus;
      this.updateListeners();
    }
  }

  updateTask(taskId: string, newDesc: string) {
    const task = this.tasks.find((target) => target.id === taskId);
    if (task && task.description !== newDesc) {
      task.description = newDesc;
      this.updateListeners();
    }
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
    this.updateListeners();
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.tasks.slice());
    }
  }
}

// instance runs only once
export const taskState = TaskState.getInstance();
