import { Task, TaskStatus, TaskPriority } from "../models/task";
import { HTTP_METHOD } from "../util/api";

const TARGET_URL = import.meta.env.VITE_TARGET_URL;

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

    this.getTasksAll();
  }

  static getInstance() {
    // singleton
    if (this.instance) return this.instance;
    this.instance = new TaskState();
    return this.instance;
  }

  private async getTasksAll() {
    const response = await fetch(`${TARGET_URL}`);
    if (!response.ok) {
      alert("fail to get tasks!");
    }

    const result = await response.json();
    for (const item of result) {
      this.tasks.push(
        new Task(item.id, item.description, item.status, item.priority)
      );
    }
    this.updateListeners();
  }

  async addTask(description: string) {
    const newTask = new Task(
      Math.random().toString().substring(2),
      description,
      TaskStatus.Active,
      TaskPriority.Medium
    );

    const response = await fetch(`${TARGET_URL}`, HTTP_METHOD("POST", newTask));

    if (!response.ok) {
      alert("fail to add tasks!");
    }

    this.tasks.push(newTask);
    this.updateListeners();
  }

  toggleTask(taskId: string, newStatus: TaskStatus) {
    const taskIdx = this.tasks.findIndex((target) => target.id === taskId);
    console.log(
      "toggleTask - taskIdx",
      taskIdx,
      "task content: ",
      this.tasks[taskIdx].description,
      "status"
    );
    if (taskIdx && this.tasks[taskIdx].status !== newStatus) {
      // 💡found toggle logic error: 실제 tasks[] 에서 값 변경이 이루어지지 않고 있었기 때문...
      this.tasks[taskIdx].status = newStatus;
      console.log(
        "changed to",
        this.tasks[taskIdx].status === TaskStatus.Finished
          ? "active"
          : "finished"
      );
      this.updateListeners();
    }
  }

  async updateTask(taskId: string, newDesc: string) {
    const taskIdx = this.tasks.findIndex((target) => target.id === taskId);
    if (taskIdx && this.tasks[taskIdx].description !== newDesc) {
      this.tasks[taskIdx].description = newDesc;

      const response = await fetch(
        `${TARGET_URL}`,
        HTTP_METHOD("PUT", this.tasks[taskIdx])
      );

      if (!response.ok) {
        alert("fail to update tasks!");
      }

      this.updateListeners();
    }
  }

  async deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);

    const response = await fetch(
      `${TARGET_URL}/${taskId}`,
      HTTP_METHOD("DELETE")
    );

    if (!response.ok) {
      alert("fail to update tasks!");
    }

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
