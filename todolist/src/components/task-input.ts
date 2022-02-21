import Component from "./base-component";
import { autobind } from "../decorators/autobind";
import { taskState } from "../state/task-state";
import { validate, Validatable } from "../util/validation";

export default class TaskInput extends Component<
  HTMLDivElement,
  HTMLFormElement
> {
  descriptionInputElement: HTMLInputElement;

  constructor() {
    super("task-input", "card", false, "task-input");

    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;

    this.configure();
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }
  renderContent() {}

  private gatherUserInput(): string | void {
    const enteredDescription = this.descriptionInputElement.value;

    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 0,
    };

    if (!validate(descriptionValidatable)) alert("Invalid Input!");
    else return enteredDescription;
  }

  private clearInputs() {
    this.descriptionInputElement.value = "";
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (userInput) {
      taskState.addTask(userInput);
      this.clearInputs();
    }
  }
}
