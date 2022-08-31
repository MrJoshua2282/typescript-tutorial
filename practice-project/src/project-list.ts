import { Component } from './base-component';
import { Project, Status } from './project-model';
import { ProjectItem } from './project-item';
import { projectState } from './project-state';
import { DragTarget } from './drag-drop-interfaces';

export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
  assignedProjects: Project[];

  constructor(private type: 'active' | 'finished') {
    super('project-list', 'app', false, `${type}-projects`);
    this.assignedProjects = []

    this.configure()
    this.renderContent();
  }

  private renderProjects() {
    const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
    listEl.innerHTML = '';

    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, prjItem)
    }
  }

  dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {

      event.preventDefault()
      const listEl = this.element.querySelector('ul')!;
      listEl.classList.add('droppable')
    }
  }

  dropHandler(event: DragEvent): void {
    const prjId = event.dataTransfer!.getData('text/plain');
    projectState.moveProject(prjId, this.type === 'active' ? Status.Active : Status.Finished)
  }

  dragLeaveHandler(_: DragEvent): void {
    const listEl = this.element.querySelector('ul')!;
    listEl.classList.remove('droppable')
  }

  configure() {
    this.element.addEventListener('dragover', (e) => this.dragOverHandler(e));
    this.element.addEventListener('dragleave', (e) => this.dragLeaveHandler(e));
    this.element.addEventListener('drop', (e) => this.dropHandler(e));

    projectState.addListener((projects: Project[]) => {
      const releventProjects = projects.filter(prj => {
        if (this.type === 'active') {
          return prj.status === Status.Active;
        } else {
          return prj.status === Status.Finished;
        }
      });

      this.assignedProjects = releventProjects;
      this.renderProjects();
    })
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
  }
}
