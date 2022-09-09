import { createStore } from "pinia";
import { Todo, Area, Project, Heading } from "../models";

export type State = {
  inbox: Todo[];
  logbook: Todo[];
  trash: Todo[];
  areas: Area[];
  projects: Project[];
}

export default createStore("todos", {
  state: () => ({
    inbox: [],
    logbook: [],
    trash: [],
    areas: [],
    projects: [],
  } as State),
  actions: {
    createArea(area: Area) {
      this.areas.push(area);
    },
    getArea(id: string): Area | undefined {
      return this.getAllAreas().find((area: Area) => area.id === id);
    },
    getAllAreas(): Area[] {
      return this.areas;
    }
    updateArea(id: string, newArea: Area) {
      this.getArea(string) = newArea;
    },
    deleteArea(id: string) {
      this.areas = this.areas.filter((area: Area) => area.id !== id);
    },

    createProject(project: Project) {
      if (project.parent === 'root') {
        this.projects.push(project);
      } else if (project.parent.area !== undefined) {
        this.getArea(project.parent.area).projects.push(project);
      }
    },
    getProject(id: string): Project | undefined {
      return this.getAllProjects().find((project: Project) => project.id === id);
    },
    getAllProjects(): Project[] {
      return [...this.projects, ...this.getAllAreas().map((area: Area) => area.projects).flat()];
    },
    updateProject() {},
    deleteProject() {},
  },
});

