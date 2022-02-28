import Component from "./base-component";
import TaskInput from "./task-input";
import TaskListInfo from "./task-list-info";
import { taskState } from "../state/task-state";
import { Task } from "../models/task";
import { TaskItem } from "./task-item";

export default class Card extends Component<HTMLDivElement, HTMLDivElement> {
  tasks: Task[];

  get taskCount() {
    return this.element
      .querySelector("#task-list")!
      .getElementsByClassName("active")
      .length.toString();
  }

  constructor() {
    super("task-card", "app", true, "card");
    this.tasks = [];

    new TaskListInfo();
    new TaskInput();

    this.configure();
    this.renderContent();
  }

  configure() {
    taskState.addListener((tasks: Task[]) => {
      this.tasks = tasks;
      this.renderContent();
    });
  }
  renderContent() {
    const listEl = document.getElementById("task-list")! as HTMLUListElement;
    listEl.innerHTML = "";
    for (const taskItem of this.tasks) {
      new TaskItem(this.element.querySelector("ul")!.id, taskItem);
    }

    this.element.querySelector("#lefttask")!.textContent = this.taskCount;
  }
}
