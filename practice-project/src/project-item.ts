import { Component } from './base-component';
import { Project } from './project-model';
import { Draggable } from './drag-drop-interfaces';

export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
  private project: Project;

  get persons() {
    return this.project.people === 1 ? '1 person' : `${this.project.people} persons`
  }

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent()
  }

  dragStartHandler(event: DragEvent): void {
    event.dataTransfer!.setData('text/plain', this.project.id)
    event.dataTransfer!.effectAllowed = 'move'

  }
  dragEndHandler(_: DragEvent): void {
    console.log('Drag End')
  }

  configure(): void {
    this.element.addEventListener('dragstart', (e) => this.dragStartHandler(e));
    this.element.addEventListener('dragend', (e) => this.dragEndHandler(e));
  }

  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
    this.element.querySelector('p')!.textContent = this.project.description;
  }
}
