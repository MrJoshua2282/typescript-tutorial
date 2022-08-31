import { Component } from './base-component';
import { Validable, validate } from './validate';
import { projectState } from './project-state'

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;


  constructor() {
    super('project-input', 'app', true, 'user-input');

    this.titleInputElement = this.element.querySelector('#title')!;
    this.descriptionInputElement = this.element.querySelector('#description')!;
    this.peopleInputElement = this.element.querySelector('#people')!;

    this.configure()
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validable = {
      value: enteredTitle,
      required: true,
    }
    const descriptionValidatable: Validable = {
      value: enteredDescription,
      required: true,
      minLength: 5
    }
    const propleValidatable: Validable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5
    }

    if (validate(titleValidatable) && validate(descriptionValidatable) && validate(propleValidatable)) {
      return [enteredTitle, enteredDescription, +enteredPeople]
    } else {
      alert('Invalid input, please try again');
    }
  }

  private clearInputs() {
    this.titleInputElement.value = ''
    this.descriptionInputElement.value = ''
    this.peopleInputElement.value = ''
  }

  private submitHandler(event: Event) {
    event.preventDefault()
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people)

      console.log(title, description, people)
      this.clearInputs()
    }
  }

  configure() {
    this.element.addEventListener('submit', e => this.submitHandler(e))
  }
  renderContent(): void { }
}
