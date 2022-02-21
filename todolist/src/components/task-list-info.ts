import { taskState } from "../state/task-state";
import Component from "./base-component";
import { Task } from "../models/task";

export default class TaskListInfo extends Component<
  HTMLDivElement,
  HTMLElement
> {
  constructor() {
    super("task-list-info", "card", true, "task-list-info");

    this.configure();
    this.renderContent();
  }

  configure() {}

  renderContent() {
    const today = new Date();
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    this.element.querySelector("#date")!.textContent = today
      .getDate()
      .toString();
    this.element.querySelector("#day")!.textContent = `${
      week[today.getDay()]
    }요일`;

    const taskList = this.element.nextElementSibling;
    this.element.querySelector("#lefttask")!.textContent = taskList!
      .getElementsByTagName("li")
      .length.toString();
  }
}
