import Component from "./base-component";
import { Task } from "../models/task";
import { autobind } from "../decorators/autobind";

export class TaskItem extends Component<HTMLUListElement, HTMLLIElement> {
  private task: Task;

  constructor(hostId: string, task: Task) {
    super("single-task", hostId, false, task.id);
    this.task = task;

    this.configure();
    this.renderContent();
  }

  @autobind
  editHandler(event: Event) {
    console.log(event, "edit");
  }

  @autobind
  deleteHandler(event: Event) {
    console.log(event, "delete");
  }

  configure() {}

  renderContent() {
    this.element.querySelector("span")!.textContent = this.task.description;
  }
}
