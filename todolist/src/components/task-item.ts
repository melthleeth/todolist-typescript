import Component from "./base-component";
import { Task, TaskStatus } from "../models/task";
import { autobind } from "../decorators/autobind";
import { taskState } from "../state/task-state";

export class TaskItem extends Component<HTMLUListElement, HTMLLIElement> {
  private task: Task;

  constructor(hostId: string, task: Task) {
    super("single-task", hostId, false, task.id);
    this.task = task;

    this.configure();
    this.renderContent();
  }

  @autobind
  toggleHandler(event: Event) {
    event.preventDefault();
    const taskId = this.element.id;

    taskState.toggleTask(taskId);
  }

  @autobind
  editHandler(_: Event) {
    const taskId = this.element.id;
    let taskDesc = this.element.querySelector("span")!.textContent;
    if (!taskDesc) taskDesc = "";
    const updatedTaskDesc = prompt("수정할 내용을 입력하세요.", taskDesc);

    if (updatedTaskDesc === null || updatedTaskDesc.trim() === "") {
      alert("값을 입력해주세요.");
      return;
    }
    taskState.updateTask(taskId, updatedTaskDesc);
  }

  @autobind
  deleteHandler(_: Event) {
    const taskId = this.element.id;
    taskState.deleteTask(taskId);
  }

  configure() {
    this.element
      .querySelector(".task-complete-button")!
      .addEventListener("click", this.toggleHandler);
    this.element
      .querySelector(".task-edit-button")!
      .addEventListener("click", this.editHandler);
    this.element
      .querySelector(".task-delete-button")!
      .addEventListener("click", this.deleteHandler);
  }

  renderContent() {
    this.element.querySelector("span")!.textContent = this.task.description;

    const togleBtn = this.element.querySelector(".task-complete-button");
    const taskDescEl = this.element.querySelector("span");

    const isChecked = this.task.status === TaskStatus.Finished ? true : false;
    if (isChecked) {
      togleBtn!.classList.add("checked");
      taskDescEl!.classList.add("completed");
    } else this.element.classList.add("active");
  }
}
